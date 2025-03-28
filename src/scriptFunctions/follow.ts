import { client } from "../main";
import ScriptItem from "../scriptItem";
import { MAPStoABR } from "../utils/constants";
import { ChatMessage } from "./chat";

interface FollowPlayer {
    player: number;
    playerName: string;
}
interface FollowPellet {
    on: boolean,
    pellet: number;
}
interface FollowCandy {
    on: boolean,
    candy: number;
}

export class Follow extends ScriptItem {
    public followPlayer: FollowPlayer = { player: NaN, playerName: "" }
    public followPellet: FollowPellet = { on: false, pellet: NaN }
    public followCandy: FollowCandy = { on: false, candy: NaN }

    onNewArea(msg: any): void {
        this.followPellet.on = false;
        
    }
    
    editPositionOnFollow(md: { x: number, y: number }) {
        if (md) return md;
        const   me = client.user.self.entity,
                pl = client.user.globalEntities[this.followPlayer.player];
        if (!pl) { this.followPlayer.player = NaN; client.chat.addMessages([new ChatMessage(`Player not found`)]); return { updated: false }; }
        let x = pl.x - me.x,
            y = pl.y - me.y;
        const d = Math.sqrt(x**2 + y**2);
        const getN = (c: number) => {if (d > 50) return c / d * 200; return c * 2}
    
        if (pl.regionName !== me.regionName) {
            if (!me.regionName.endsWith('Hard') && (pl.regionName.endsWith('Hard') || ['Mysterious Mansion'].includes(pl.regionName)) && !['Endless Echo Hard'].includes(pl.regionName)) x = -x;
            if ((pl.regionName == 'Catastrophic Core' && me.regionName == 'Central Core Hard') || (pl.regionName == 'Central Core Hard' && me.regionName == 'Catastrophic Core')) x = -x;
            if ((pl.regionName == 'Central Core' && me.regionName == 'Withering Wasteland') || (me.regionName == 'Central Core' && pl.regionName == 'Withering Wasteland')) y = -y;
        }
    
        const followData = { x: Math.floor(getN(x)), y: Math.floor(getN(y)), updated: true };
        return followData.x || followData.y ? followData : { updated: false };
    }

    onClickFollow(_this: any) {
        const player = client.utils.getPlayerDataFromCM();
        if (this.followPlayer.player == player.id) { this.followPlayer.player = NaN; this.followPlayer.playerName = ""; client.user.mouseDown = null; client.chat.addMessages([new ChatMessage(`You are unfollowing`)]); return; }
        else { this.followPlayer.player = player.id; this.followPlayer.playerName = player.name; client.chat.addMessages([new ChatMessage(`You are following ${this.followPlayer.playerName}`)]); }
    
        const   me = client.user.self.entity,
                pl = client.user.globalEntities[player.id];
        if (!pl) { this.followPlayer.player = NaN; client.chat.addMessages([new ChatMessage(`You are unfollowing`)]); return; }
        
        if (me.regionName !== pl.regionName && Object.keys(MAPStoABR).includes(pl.regionName)) client.user.chatMessages.push(`/warp ${(MAPStoABR as any)[pl.regionName]}`);
    }
    
    editPositionOnFollowCandy(md: { x: number, y: number }) {
        if (md) return md;
        const me = client.user.self.entity;
        let candy = client.user.entities[this.followCandy.candy];
        
        if (!candy) {
            const newCandy = Object.entries(client.user.entities as Record<number, any>).filter(e => e[1].entityType == 139).sort((e1, e2) => { return Math.sqrt((e1[1].x - me.x)**2 + (e1[1].y - me.y)**2) - Math.sqrt((e2[1].x - me.x)**2 + (e2[1].y - me.y)**2); })[0];
            if (!newCandy) return { x: 0, y: 0, updated: true };
            else {
                this.followCandy.candy = parseInt(newCandy[0]);
                candy = newCandy[1];
            }
        }
        
        let x = candy.x - me.x,
            y = candy.y - me.y;
        const d = Math.sqrt(x**2 + y**2);
        const getN = (c: number) => { if (d > 50) return c / d * 200; return c * 2; }
        
        const followData = { x: Math.floor(getN(x)), y: Math.floor(getN(y)), updated: true };
        return followData.x || followData.y ? followData : { x: 0, y: 0, updated: true };
    }

    editPositionOnFollowPellet(md: { x: number, y: number }) {
        if (md) return md;
        const me = client.user.self.entity;
        let pellet = client.user.entities[this.followPellet.pellet];
        
        if (!pellet) {
            const newPellet = Object.entries(client.user.entities as Record<number, any>).filter(e => e[1].entityType == 1).sort((e1, e2) => { return Math.sqrt((e1[1].x - me.x)**2 + (e1[1].y - me.y)**2) - Math.sqrt((e2[1].x - me.x)**2 + (e2[1].y - me.y)**2); })[0];
            if (!newPellet) return { x: 0, y: 0, updated: true }
            else {
                this.followPellet.pellet = parseInt(newPellet[0]);
                pellet = newPellet[1];
            }
        }
        
        let x = pellet.x - me.x,
        y = pellet.y - me.y;
        const d = Math.sqrt(x**2 + y**2);
        const getN = (c: number) => {if (d > 50) return c / d * 200; return c * 2}
        
        const followData = { x: Math.floor(getN(x)), y: Math.floor(getN(y)), updated: true };
        return followData.x || followData.y ? followData : undefined;
    }
    
    getLabelFollow(_this: any) { try { if (client.user.name === _this.props.name) return ''; return _this.props.name === this.followPlayer.playerName ? 'Un Follow' : 'Follow' } catch { return ''; } }
}