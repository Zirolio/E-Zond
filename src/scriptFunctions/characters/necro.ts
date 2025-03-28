import { client } from "../../main";
import ScriptItem from "../../scriptItem";

interface VisualCooldowns {
    on: boolean;
    storage: Record<string, number>;
}

export class Necro extends ScriptItem {
    visualCooldowns: VisualCooldowns = {
        on: false,
        storage: {},
    }
    // Фильтрувати только тех кто на этой арене

    onPreMessageProcess(msg: any) {
        this.updateNecroVisualCooldown(msg)
    }

    updateNecroVisualCooldown(msg: any) {
        this.visualCooldowns.storage = Object.fromEntries(Object.entries(this.visualCooldowns.storage).filter(e => e[0] in client.user.entities));
        const necrosData = msg.entities.filter((e: any) => client.user.globalEntities[e.id]?.heroType == 4 && e.abilityOne && "cooldown" in e.abilityOne/*  && typeof e.abilityOne.cooldown == "number" */);
        for (const necroData of necrosData) {
            this.visualCooldowns.storage[necroData.id as string] = necroData.abilityOne.cooldown;// + Math.PI / 2;
        }
    }

    drawNecroVisualCooldown(player: any, center: { x: number; y: number }, c: CanvasRenderingContext2D) {
        if (!client.characters.necro.visualCooldowns.on || player.heroType !== 4) return;

        const id = (Object.entries(client.user.globalEntities as Record<any, any>).filter(e => e[1].name == player.name)[0] || [])[0];
        const totalNecroResCd = 0.07500000298023224;
        const spect = client.camera.getSpect();
        if (id && spect && client.characters.necro.visualCooldowns.storage[id] && client.characters.necro.visualCooldowns.storage[id] !== 0) {
            c.beginPath();
            c.fillStyle = 'rgb(253, 240, 193, 0.55)';
            c.arc(player.x - spect.x + center.x, player.y - spect.y + center.y, player.radius, -Math.PI / 2, Math.PI * 2 * ((1 - client.characters.necro.visualCooldowns.storage[id] / totalNecroResCd) || 1) - Math.PI / 2, true);
            c.lineTo(player.x - spect.x + center.x, player.y - spect.y + center.y);
            c.closePath();
            c.fill();
        }
    }
}