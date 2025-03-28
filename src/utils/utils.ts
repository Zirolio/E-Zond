import { client } from "../main";

export class Utils {
    getPlayerDataFromCM(name?: string) {
        const teg = document.getElementsByClassName('player-contextmenu-header')[0]!;
        if (!teg) return {};
        if (!name) name = teg.innerHTML;
        return Object.values(client.user.globalEntities as Record<any, any>).find(e => { return e.name == name });
    }

    getPlayerEntityByName(name: string, global: boolean = true) {
        const entity = Object.values((global ? client.user.globalEntities : client.user.entities) as Record<any, any>).find(e => e.name == name && (e.isPlayer || global));
        return entity || undefined;
    }

    editBaseData(bd: any) {
        bd.defaults.normal_enemy.color = '#6B6B6B';
        bd.defaults.wall_enemy.color = '#444444';
        bd.defaults.glowy_enemy.color = client.ballsVisibilityHuck_DEFYC[0];
        bd.defaults.firefly_enemy.color = client.ballsVisibilityHuck_DEFYC[1];
    
        /*for (const eff of bd.effects) {
            if (!eff.fillColor) continue;
            const rgba = eff.fillColor.match(/[\d\.]+/g);
            if (rgba.length !== 4) continue;
            else eff.fillColor = `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, 0.1)`;
        }*/
        client.evadesObjects.baseData = bd;
        return bd;
    }

    countCallsPerSecond(fn: CallableFunction) {
        let callCount = 0;
        let lastLogTime = Date.now();
    
        const wrappedFunction = (...args: any[]) => {
            callCount++;
            const now = Date.now();
            if (now - lastLogTime >= 1000) {
                console.log(`Вызовы в секунду: ${callCount}`);
                callCount = 0;
                lastLogTime = now;
            }
            return fn(...args);
        };
    
        return wrappedFunction;
    }
}