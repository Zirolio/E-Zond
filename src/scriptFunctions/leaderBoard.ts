import { client } from "../main";
import ScriptItem from "../scriptItem";

export default class LeaderBoard extends ScriptItem {
    public deadthsCache: Record<string, number> = {};

    onPreMessageProcess(msg: any) {
        if (!msg.area) {
            (msg.globalEntities as Array<any>).forEach(entity => {
                if (client.user.globalEntities[entity.id] && entity.deathTimer && entity.deathTimer !== -1 && client.user.globalEntities[entity.id].deathTimer == -1) this.deadthsCache[client.user.globalEntities[entity.id].name] = (this.deadthsCache[client.user.globalEntities[entity.id].name] || 0) + 1;
            });
        }
        // const me = (msg.globalEntities as Record<any, any>).find((e: any) => e.id == client.user.self.id);
        // if (me && me.deathTimer && me.deathTimer !== -1 && client.user.self.entity.deathTimer == -1) client.counters.deaths++;
    }
}