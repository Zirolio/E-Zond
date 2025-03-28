import { client } from "../main";
import ScriptItem from "../scriptItem";
import Vec2 from "../utils/vec2";

interface NecroAIM {
    on: boolean;
    shoted: boolean;
}

interface SnowballAIM {
    on: boolean;
}

interface EchelonAIM {
    on: boolean;
}

interface RamesesAIM {
    on: boolean;
}

interface DodgeBot {
    on: boolean;
}

interface AimConfig {
    diedPlayers?: boolean;
    maxDist?: number;
}

export class AIM extends ScriptItem {
    public necroAIM: NecroAIM = { on: false, shoted: false };
    public snowballAIM: SnowballAIM = { on: false};
    public echelonAIM: EchelonAIM = { on: false};
    public ramesesAIM: RamesesAIM = { on: false};
    public dodgeBot: DodgeBot = { on: false };

    private gcd(a: number, b: number) {
        let temp: number;
        while (b !== 0) {
            temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }


    aim(config: AimConfig = {}) {
        const { diedPlayers, maxDist } = config as AimConfig;

        const me = client.user.self.entity;
        const obj = Object.values(client.user.globalEntities as Record<any, any>).filter((e: any) => {
            return e.areaName == client.user.self.entity.areaName &&
                e.regionName == client.user.self.entity.regionName &&
                e.id !== client.user.self.id &&
                (typeof diedPlayers !== 'boolean' || (diedPlayers ? e.deathTimer !== -1 : e.deathTimer == -1));
        }).sort((e1: { x: number, y: number }, e2: { x: number, y: number }) => {
            return Math.sqrt((e1.x - me.x)**2 + (e1.y - me.y)**2) - Math.sqrt((e2.x - me.x)**2 + (e2.y - me.y)**2);
        })[0];

        if (!obj) return;
        const   vec = [Math.floor(obj.x - me.x), Math.floor(obj.y - me.y)],
                vecGcd = this.gcd(Math.abs(vec[0]), Math.abs(vec[1])),
                dist = Math.sqrt(vec[0]**2 + vec[1]**2);
        
        const v = { x: Math.floor(vec[0] / vecGcd), y: Math.floor(vec[1] / vecGcd), updated: true };

        if (typeof maxDist == 'number' && Math.floor(dist) > maxDist) return;
        return v;
    }

    necroShot(msg: any) {
        try {
            if (!this.necroAIM.on || client.user.self.entity.heroType !== 4 || !client.autoUse.chekCanUse(client.user.heroInfoCard.abilityTwo, true) || !msg.keys.filter((i: any) => { return i.keyEvent == 1 && i.keyType == 11})[0]) return;
            const md = this.aim({ diedPlayers: true, maxDist: 1309 });

            if (!md) return;
            msg.mouseDown = md;
        } catch {}
    }

    echelonShot(msg: any) {
        try {
            if (!this.echelonAIM.on || client.user.self.entity.heroType !== 26 || !client.autoUse.chekCanUse(client.user.heroInfoCard.abilityOne, true) || !msg.keys.filter((i: any) => { return i.keyEvent == 1 && i.keyType == 10})[0]) return;
            const md = this.aim({ diedPlayers: true, maxDist: 1296 });

            if (!md) return;
            msg.mouseDown = md;
        } catch {}
    }

    snowballShot(msg: any) {
        try {
            if (!this.snowballAIM.on || client.user.heroInfoCard.abilityThree.abilityType !== 31 || !client.autoUse.chekCanUse(client.user.heroInfoCard.abilityThree, true) || !msg.keys.filter((i: any) => { return i.keyEvent == 1 && i.keyType == 12})[0]) return;
            const md = this.aim({ diedPlayers: false });

            if (!md) return;
            msg.mouseDown = md;
        } catch {}
    }

    ramesesShot(msg: any) {
        try {
            if (!this.ramesesAIM.on || !client.user.self.entity.isBandaged || client.user.self.entity.heroType !== 11 || !client.autoUse.chekCanUse(client.user.heroInfoCard.abilityTwo, true) || !msg.keys.filter((i: any) => { return i.keyEvent == 1 && i.keyType == 11})[0]) return;
            const md = this.aim({ diedPlayers: true, maxDist: 1155 });

            if (!md) return;
            msg.mouseDown = md;
        } catch {}
    }

    dodge(msg: any) {
        try {
            if (!this.dodgeBot.on || typeof client.user.self.entity === 'undefined' || msg.mouseDown === null) return;
            const playerRadius = client.user.self.entity.radius;
            const playerPosition = new Vec2(client.user.self.entity);
            const mousePosition = new Vec2(msg.mouseDown);
            const direction = new Vec2(mousePosition); const defL = direction.normalize();

            for (const entity of Object.values<any>(client.user.entities)) {
                if (!entity.isEnemy || entity.isDestroyed || entity.isHarmless || entity.radius == 0 || typeof entity.x == 'undefined' || typeof entity.y == 'undefined') continue;
                const enemyRadius = entity.radius;
                const enemyPosition = new Vec2(entity);
                const vecToEntity = enemyPosition.sub(playerPosition);
                const distanceToEntity = vecToEntity.length();

                // TODO
            }
            msg.mouseDown = direction.mulLocal(mousePosition.length()).floorLocal().toObject({ updated: true });
            /*if (distanceToEntity > entity.radius + client.user.self.entity.radius + 25) continue;
            const perpendicular = new Vec2(-vecToEntity.y, vecToEntity.x);
            perpendicular.normalize();

            direction.addLocal(perpendicular);*/


            
            /*const playerRadius: number = client.user.self.entity.radius;
            const dodgeForces: Array<{ forceDirection: Vec2, force: number }> = [];

            for (const entity of Object.values<any>(client.user.entities)) {
                if (!entity.isEnemy || entity.isDestroyed || entity.isHarmless || entity.radius == 0 || typeof entity.x == 'undefined' || typeof entity.y == 'undefined') continue;
                
                const entityPosition = new Vec2(entity);
                const entityRadius = entity.radius;
                const distance = entityPosition.distance(playerPosition);


                const vecToEntity = entityPosition.sub(playerPosition);
                const angleToEntity = vecToEntity.absAngle();
                const perpendicular = new Vec2(-vecToEntity.x, vecToEntity.y)
                    .mulLocal(mouseAngle > angleToEntity ? -1 : 1)
                    .normalize()
                    .mulLocal(entityRadius + playerRadius + 10);
                
                const forceAngle = vecToEntity.add(perpendicular).absAngle() - mouseAngle;
                
                dodgeForces.push({ forceDirection: Vec2.fromAngle(forceAngle), force: (entityRadius + playerRadius + 50 - distance) / 50 });
            }
            
            if (dodgeForces.length) {
                mousePosition.normalize();

                console.log(dodgeForces)
                for (const dodgeForce of dodgeForces) {
                    mousePosition.addLocal(dodgeForce.forceDirection.mul(-dodgeForce.force)); // dodgeForce.force
                }
                mousePosition.mulLocal(100);
                mousePosition.floorLocal();
                
                msg.mouseDown = mousePosition.toObject({ updated: true });
            }*/
        } catch (e) { console.log(e); }
    }

    onInputsEdit(msg: any): void {
        this.necroShot(msg);
        this.snowballShot(msg);
        this.ramesesShot(msg);
        this.echelonShot(msg);
        this.dodge(msg);
    }
}