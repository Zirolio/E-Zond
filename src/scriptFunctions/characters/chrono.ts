import { CHRONO_BACKTRACK_COOLDOWN } from "../../utils/constants";
import { client } from "../../main";
import ScriptItem from "../../scriptItem";

interface ChronoShadow { x: number, y: number, id: number }
interface Aur {
    on: boolean;
    mis: number;
    useOn?: ChronoShadow;
}
interface Shadow {
    on: boolean;
    maxFrames: number;
    updateMaxFrames: boolean;
    chronoShadows: Array<ChronoShadow>;
}

export class Chrono extends ScriptItem {
    private __lastShadowID: number = 0;
    public aur: Aur = {
        on: false,
        mis: 2,
        useOn: undefined
    };
    public shadow: Shadow = {
        on: false,
        maxFrames: CHRONO_BACKTRACK_COOLDOWN * 60,
        updateMaxFrames: true,
        chronoShadows: []
    };

    autoUseRes(dt: number = client.user.self.entity.deathTimer) {
        return;
        // if (this.shadow.updateMaxFrames) this.shadow.maxFrames = 175 * ((Math.floor(client.counters.pps) || 60) / 60);
        if (client.user.heroInfoCard.heroType !== 9 || dt / 1000 <= 56.5) this.aur.useOn = undefined;
        else {
            if (!this.aur.useOn) { this.aur.useOn = this.shadow.chronoShadows.slice(-1)[0]; }
            if (!this.shadow.chronoShadows.filter(s => s.id == this.aur.useOn!.id - this.aur.mis)[0] && client.autoUse.chekCanUse(client.user.heroInfoCard.abilityOne, true)) {
                client.inputsEditor.pressKeys.push(10);
                this.aur.useOn = undefined;
            }
        }
    }

    onNewArea(msg: any) {
        this.aur.useOn = undefined;
        this.__lastShadowID = 0;
        this.shadow.chronoShadows = [];

        msg.entities.push({
            id: "chronoShadow",
            entityType: 10,
            brightness: 0.24,
            x: 0,
            y: 0
        });
        // console.log(msg)
        // window._client.user.entities[-window._client.user.selfId]
    }

    private callCount: number = 0;
    private lastLogTime: number = Date.now();

    updateChronoShadow() {
        if (this.shadow.updateMaxFrames) {
            this.callCount++;
            const now = Date.now();
            if (now - this.lastLogTime >= 1000) {
                this.shadow.maxFrames = Math.floor((this.shadow.maxFrames + Math.floor(this.callCount * CHRONO_BACKTRACK_COOLDOWN)) / 2);
                this.callCount = 0;
                this.lastLogTime = now;
            }
        }

        // if (1) return;
        const entity = client.user.self.entity;
        if (!entity || entity.heroType !== 9) return;
    
        
        this.shadow.chronoShadows.push({ x: entity.x, y: entity.y, id: this.__lastShadowID++ });
        if (this.shadow.chronoShadows.length > (this.shadow.maxFrames + 20)) this.shadow.chronoShadows.shift();
        let shadow: ChronoShadow | undefined = this.shadow.chronoShadows[0 && Math.floor((this.shadow.maxFrames + 20) - 60 * CHRONO_BACKTRACK_COOLDOWN)];
    
        if (this.shadow.on && !client.user.heroInfoCard.abilityOne.cooldown && client.user.heroInfoCard.abilityOne.level && entity.energy >= 30) {
            if (client.user.entities.chronoShadow && shadow) {
                client.user.entities.chronoShadow.x = shadow.x;
                client.user.entities.chronoShadow.y = shadow.y;
                client.user.entities.chronoShadow.isDestroyed = false;
                client.user.entities.chronoShadow.radius = entity.radius;
            }
            /* msg.entities.push({
                x: shadow.x,
                y: shadow.y,
                id: -client.user.self.id,
                brightness: 0.24,
                radius: entity.radius,
                entityType: 10,
            }); */
        } else {
            client.user.entities.chronoShadow.isDestroyed = true;
            /* msg.entities.push({
                id: -client.user.self.id,
                removed: true
            }); */
        }
    }

    updateChronoShadow_(msg: any) {
        return;
        const entity = client.user.self.entity;
        if (!entity || entity.heroType !== 9) return;
    
        if (msg.area) { this.__lastShadowID = 0; this.shadow.chronoShadows = []; return; }
    
        this.shadow.chronoShadows.push({ x: entity.x, y: entity.y, id: this.__lastShadowID++ });
        if (this.shadow.chronoShadows.length > this.shadow.maxFrames) this.shadow.chronoShadows.shift();
    
        if (this.shadow.on && !client.user.heroInfoCard.abilityOne.cooldown && client.user.heroInfoCard.abilityOne.level && entity.energy >= 30) {
            const shadow = this.shadow.chronoShadows[0];
            msg.entities.push({
                x: shadow.x,
                y: shadow.y,
                id: -client.user.self.id,
                brightness: 0.24,
                radius: entity.radius,
                entityType: 10,
            });
        } else {
            msg.entities.push({
                id: -client.user.self.id,
                removed: true
            });
        }
    }
}