import { client } from "../main";
import ScriptItem from "../scriptItem";

interface GreenBalls {
    greenBallsTO: 20;
    maxGreenBalls: 12;
    _greenBallsTOC: 20;
    lastRender: number;
    mainTime: number;
    ballsFrames: Record<string, Array<{ x: number, y: number, color: string, lifetime: number }>>;
}
interface PhantomBalls {
    phantomBallsIDS: Array<any>;
}
interface YellowBallsEEH {
    yellowBallsCords:  Record<string, Array<number | { x: number, y: number }>>;
}

export class BallsVisibilityHuck extends ScriptItem {
    public ballsStroke: string = 'rgb(0, 0, 0)';
    public ballsOpacity: number = 0.85;
    public aurasOpacity: number = 0.1;
    public flashinBalls: boolean = false;
    
    public on: boolean = false; // Only for greenBalls yellowBalls yellowBallsEEH

    public greenBalls: GreenBalls =  {
        greenBallsTO: 20,
        maxGreenBalls: 12,
        _greenBallsTOC: 20,
        mainTime: 400,
        lastRender: 0,
        ballsFrames: {}
    }

    public phantomBalls: PhantomBalls =  {
        phantomBallsIDS: []
    }

    public yellowBallsEEH: YellowBallsEEH =  {
        yellowBallsCords: {}
    }

    onNewArea(msg: any) {
        this.greenBalls.ballsFrames = {};
        this.phantomBalls.phantomBallsIDS = [];
        this.yellowBallsEEH.yellowBallsCords = {};
        this.phantomBalls.phantomBallsIDS = (msg.entities as Record<any, any>).filter((e: any) => [60, 61, 62, 63].includes(e.entityType)).map((e: any) => e.id);
    }

    onPreMessageProcess(msg: any) {
        if (this.on) {
            this.phantomBallsEditor(msg);
            this.yellowBallsEEHEditor(msg);
        }
        /* if (this.on) {
            msg.entities.forEach((entity: any) => {
                /* if (typeof entity.brightness === "number") *\/ entity.brightness = 1;
                console.log(client.user, client.user?.entities, client.user?.entities[entity.type], client.user?.entities[entity.type]?.entityType);
                if (client.user?.entities[entity.type]?.entityType == 60 && entity.removed) {
                    entity.removed = false;
                }
            });
            if (msg.entities.find((e: any) => e.id == (window as any).asd)) console.log(msg.entities.find((e: any) => e.id == (window as any).asd));
        }*/
    }

    onPreDrawEntities() {
        const spect = client.camera.getSpect();
        if (this.greenBalls.lastRender == 0) this.greenBalls.lastRender = Date.now();
        const delta = Date.now() - this.greenBalls.lastRender;
        this.greenBalls.lastRender = Date.now(); // New date
        const center = { x: client.canvas.width / 2, y: client.canvas.height / 2 }, ctx = client.c;

        if (this.on) {
            // It's bad already
            this.greenBallsEditor(spect, delta, center, ctx);
        }
    }

    greenBallsEditor(spect: any, delta: number, center: { x: number, y: number }, ctx: CanvasRenderingContext2D) {
        ctx.save();
        const greenBalls = Object.entries(client.user.entities as Record<any, any>).filter(e => [10, 19].includes(e[1].entityType) /*  && parseInt(e[0]) >= 0 */);
        greenBalls.forEach(([id, entity]) => {
            const entityFrames = (this.greenBalls.ballsFrames[id] ||= [{ x: entity.x, y: entity.y, color: `${entity.color}a0`, lifetime: 0 }]);
            const speed = Math.sqrt((entity.x - entityFrames[entityFrames.length - 1].x)**2 + (entity.y - entityFrames[entityFrames.length - 1].y)**2);
            
            this.greenBalls.ballsFrames[id].push({ x: entity.x, y: entity.y, color: `${entity.color}a0`, lifetime: this.greenBalls.mainTime * speed / 1.96 });
            
            if (entityFrames.length >= 2) {

                let sliceIndex = 0;
    
                ctx.beginPath();
                ctx.strokeStyle = "#869e0f";
                ctx.lineWidth = 6;
                ctx.moveTo(entityFrames[0].x - spect.x + center.x, entityFrames[0].y - spect.y + center.y);
                for (let id = 0; id < entityFrames.length; id++) {
                    entityFrames[id].lifetime -= delta; // FPS?
                    if (entityFrames[id].lifetime <= 0) sliceIndex = id;
                    if (id != 0) {
                        ctx.lineTo(entityFrames[id].x - spect.x + center.x, entityFrames[id].y - spect.y + center.y);
                    }
                }
                ctx.stroke();
                if (this.greenBalls.ballsFrames[id][0].lifetime <= 0) this.greenBalls.ballsFrames[id].shift();
                // this.greenBalls.ballsFrames[id] = entityFrames.slice(sliceIndex);
            }
        });
        // console.log(entityFrames.length);
        ctx.restore();
    }

    phantomBallsEditor(msg: any) {
        const pB = (msg.entities as Record<any, any>).filter((e: any) => this.phantomBalls.phantomBallsIDS.includes(e.id));
        pB.forEach((ballD: any) => {
            ballD.removed = false;
            ballD.brightness = 1;
        });
        // const entity = client.user.entities[ballD.id];
        // if (!entity) return;
        /* msg.entities.push({
            x: ballD.x,
            y: ballD.y,
            id: -ballD.id,
            brightness: 1,
            radius: entity.radius,
            entityType: entity.entityType,
            removed: false
        }); */
    }

    yellowBallsEEHEditor(msg: any) {
        if (msg.area) return;
        const yellowBalls = Object.entries(client.user.entities as Record<any, any>).filter(e => e[1].entityType == 55 && parseInt(e[0]) >= 0);
        yellowBalls.forEach((ballD: any) => {
            if (this.yellowBallsEEH.yellowBallsCords[ballD[0]] == undefined) this.yellowBallsEEH.yellowBallsCords[ballD[0]] = [{ x: NaN, y: NaN }, 0];
            if (!(this.yellowBallsEEH.yellowBallsCords[ballD[0]][0] as { x: number, y: number }).x) {
                this.yellowBallsEEH.yellowBallsCords[ballD[0]][0] = { x: ballD[1].x, y: ballD[1].y };
                msg.entities.push({
                    x: (this.yellowBallsEEH.yellowBallsCords[ballD[0]][0] as { x: number, y: number }).x,
                    y: (this.yellowBallsEEH.yellowBallsCords[ballD[0]][0] as { x: number, y: number }).y,
                    id: `${-ballD[0]}-${this.yellowBallsEEH.yellowBallsCords[ballD[0]][1]}`,
                    brightness: 0.4,
                    radius: ballD[1].radius,
                    entityType: 55,
                    removed: ballD[1].isDestroyed
                });
                this.yellowBallsEEH.yellowBallsCords[ballD[0]][1] = this.yellowBallsEEH.yellowBallsCords[ballD[0]][1] == 1 ? 0 : 1;
            } else if ((this.yellowBallsEEH.yellowBallsCords[ballD[0]][0] as { x: number, y: number }).x !== ballD[1].x || (this.yellowBallsEEH.yellowBallsCords[ballD[0]][0] as { x: number, y: number }).y !== ballD[1].y) {
                this.yellowBallsEEH.yellowBallsCords[ballD[0]][0] = { x: ballD[1].x, y: ballD[1].y };
                msg.entities.push({
                    x: (this.yellowBallsEEH.yellowBallsCords[ballD[0]][0] as { x: number, y: number }).x,
                    y: (this.yellowBallsEEH.yellowBallsCords[ballD[0]][0] as { x: number, y: number }).y,
                    id: `${-ballD[0]}-${this.yellowBallsEEH.yellowBallsCords[ballD[0]][1]}`,
                    brightness: 0.4,
                    radius: ballD[1].radius,
                    entityType: 55,
                    removed: ballD[1].isDestroyed
                });
                this.yellowBallsEEH.yellowBallsCords[ballD[0]][1] = this.yellowBallsEEH.yellowBallsCords[ballD[0]][1] == 1 ? 0 : 1;
            }
        });
    }
}