import { Script } from "vm";
import { client } from "../main";
import { ChatMessage } from "./chat";
import { Zoom } from "./zoom";
import ScriptItem from "../scriptItem";

interface ViolaClone {
    id: number;
    spect: boolean;
    updateKeysOnClone: Function;
}

export class Camera extends ScriptItem {
    public spectId!: number;
    public zoom: Zoom = new Zoom();
    public oldCanvasSet?: { w: number, h: number, vs: number } = undefined;
    
    public clone: ViolaClone = {
        id: NaN,
        spect: false,
        updateKeysOnClone: () => {}
    }

    onNewArea(msg: any): void {
        this.clone.id = NaN;
        this.clone.spect = false;

        if (client.player.id !== this.spectId && !client.fm) client.chat.addMessages([new ChatMessage(`Watching stopped`)]);
        if (this.oldCanvasSet) this.swapCameraToCenter();
    }

    getSpect() {
        try {
            if (client.player.id !== client.user.self.id) {
                if (this.spectId == client.player.id) this.spectId = client.user.self.id;
                client.player.id = client.user.self.id;
            }
        } catch {}
    
        // Block Minimap
        if (client.miniMap.showOnly) client.user.minimap.hidden = false;

        // Camera to center
        if (this.oldCanvasSet) {
            const area = client.user.area;
            return { x: area.x + area.width / 2, y: area.y + area.height / 2 }
        }
        // ----------------

        // Clone
        if (this.clone.spect) {
            const clone = client.user.entities[this.clone.id];
            if (clone) return clone;
            else { this.clone.spect = false; this.clone.id = NaN; }
        }
        // -----
    
        const me = client.user.self.entity;
        const momentSpect = client.user.globalEntities[this.spectId];
        if (!momentSpect) { if (this.spectId && this.spectId !== client.player.id) { client.chat.addMessages([new ChatMessage(`Watching stopped`)]);} this.spectId = client.user.self.id; return client.user.self.entity; }
    
        if (momentSpect.regionName !== me.regionName || momentSpect.areaNumber !== me.areaNumber) { client.chat.addMessages([new ChatMessage(`Watching stopped`)]); this.spectId = client.user.self.id; return client.user.self.entity; }
        else return momentSpect;
    }

    swapCameraToCenter() {
        if (!this.oldCanvasSet) {
            const coef = Math.max(client.user.area.width / client.workWGE.camera.viewportSize.width, client.user.area.height / client.workWGE.camera.viewportSize.height, 1);
            const oldW = client.workWGE.canvas.width;
            const oldH = client.workWGE.canvas.height;
            const newW = oldW * coef;
            const newH = oldH * coef;
    
            this.oldCanvasSet = {
                w: oldW,
                h: oldH,
                vs: client.evadesObjects.camera.viewportSize
            }
    
            client.workWGE.canvas.width = newW;
            client.workWGE.canvasLighting.width = newW;
            client.workWGE.canvas.height = newH;
            client.workWGE.canvasLighting.height = newH;
            client.evadesObjects.camera.viewportSize = client.workWGE.canvas;
        } else {
            client.workWGE.canvas.width = this.oldCanvasSet.w;
            client.workWGE.canvasLighting.width = this.oldCanvasSet.w;
            client.workWGE.canvas.height = this.oldCanvasSet.h;
            client.workWGE.canvasLighting.height = this.oldCanvasSet.h;
            client.evadesObjects.camera.viewportSize = this.oldCanvasSet.vs;
            this.oldCanvasSet = undefined;
        }
        this.zoom.resizeEnd();
    }

    swapCameraToClone() {
        this.clone.spect = !this.clone.spect;
    
        if (this.clone.id) return;
        const cloneData = Object.entries(client.user.entities as Record<any, any>).filter(e => { return e[1].name === client.user.name && !e[1].abilityOne && e[0] !== client.user.self.id; })[0];
        if (!cloneData[0]) {
            this.clone.spect = false;
            return;
        }
        this.clone.id = parseInt(cloneData[0]);
    };

    swapCamera() {
        const users = this.getUsersOnArea();
    
        const momentSpect = (client.user.globalEntities as Record<any, any>)[this.spectId];
        const me = client.user.self.entity;
    
        if (!users.includes(momentSpect)) { if (this.spectId !== client.player.id) client.chat.addMessages([new ChatMessage(`Watching stopped`)]); this.spectId = client.user.self.id; return client.user.self.entity; }
        else {
            let index = users.indexOf(momentSpect) + 1 == users.length ? 0 : users.indexOf(momentSpect) + 1;
            this.spectId = users[index]!.id as number;
    
            if (users.length > 1) {
                if (users[index].name !== client.user.name) client.chat.addMessages([new ChatMessage(`You are watching ${users[index].name}`)]);
                else client.chat.addMessages([new ChatMessage(`Watching stopped`)]);
            }
        }
    }

    getUsersOnArea() {
        return Object.values(client.user.globalEntities as Record<any, any>).filter(v => {
            return  v.regionName == client.user.self.entity.regionName &&
                    v.areaNumber == client.user.self.entity.areaNumber;
        }).sort((a, b) => { return a.id - b.id });
    }
}