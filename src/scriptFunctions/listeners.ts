import { client } from "../main";
import { MESSAGES_STYLES, REPO, SCRIPT_KEYS } from "../utils/constants";
import { ChatMessage } from "./chat";

export class Listeners {
    private _newAreaTimer: number = -1;
    // constructor() { this.initDocumentListeners(); }
    get onUpdateParam() { return client.settings.onUpdateParam.bind(client.settings); }

    get onFirstLoadScriptVersionStart() { return client.firstLoad.onStart.bind(client.firstLoad); }
    get onFirstLoadScriptVersionGameStart() { return client.firstLoad.onGameStart.bind(client.firstLoad); }

    onLoad() {
        const startMessages = [];
        !client.isLastVersion && startMessages.push(new ChatMessage('E-Zond updated! Please reload tab for more stability, with love, Zirolio', [MESSAGES_STYLES.SCRIPT_WARNING_MESSAGE, MESSAGES_STYLES.SCRIPT_MESSAGE_SENDER]));
        startMessages.push(new ChatMessage('Write "=help" or "=help ru" for open help-menu'));
        client.player.name !== "☪𝓩𝓲𝓻𝓸𝓵𝓲𝓸✩" && startMessages.push(new ChatMessage('Hello my friend, if you have any ideas for this script or find bugs - write to me in discord: ".zirolio.". Good luck in the game to you!', [MESSAGES_STYLES.PRIVATE_MESSAGE, MESSAGES_STYLES.ZIROLIO, MESSAGES_STYLES.SCRIPT_MESSAGE_SENDER], "☪𝓩𝓲𝓻𝓸𝓵𝓲𝓸✩:"));
        if (client.player.name !== "☪𝓩𝓲𝓻𝓸𝓵𝓲𝓸✩" && Math.random() < 0.275) startMessages.push(new ChatMessage('Also, you can check this: https://zixof-io.onrender.com', [MESSAGES_STYLES.PRIVATE_MESSAGE, MESSAGES_STYLES.SCRIPT_MESSAGE_SENDER], "P.S.:"));
        client.chat.addMessages(startMessages, true);
    }

    onNewDataFromServer(e: any) {
        if (!client.characters.nexus.player && !client.characters.ignis.player) return; // DELETED!!!
        Object.values(e.entities as Record<any, any>).forEach(v => {
            if (client.characters.ignis.player === v.id && v.abilityOne && v.abilityOne.cooldown) {
                const r = v.abilityOne.cooldown - (7 + client.characters.ignis.timeToUse);
                if (-0.3 >= r && r >= 0) client.characters.ignis.nexusKD = true;
                else client.characters.ignis.nexusKD = false;
            }
        });
    }

    onDrawPlayer(player: any) {
        const center = { x: client.canvas.width / 2, y: client.canvas.height / 2 }, c = client.c;
        client.characters.necro.drawNecroVisualCooldown(player, center, c);
    }

    onWebSocketMess(event: any) {
        if (Date.now() - client.counters.lastPPSUpdate >= 1000) {
            client.counters.lastPPSUpdate = Date.now();
            client.counters.pps = client.counters.packets;
            client.counters.packets = 0;
        }
        client.counters.packets++;
    }

    onPostDrawEntities() {
        const center = { x: client.canvas.width / 2, y: client.canvas.height / 2 }, c = client.c;
        if (client.characters.reaper.shadow.on && client.user.heroInfoCard.heroType == 10 && client.user.self.entity.isDeparted && client.user.heroInfoCard.abilityTwo.level && client.user.heroInfoCard.abilityTwo.cooldown) { // ???
            const cd = client.user.heroInfoCard.abilityTwo.totalCooldown * 1000, cdC = client.user.heroInfoCard.abilityTwo.cooldown * 1000, lvl = client.user.heroInfoCard.abilityTwo.level, abilityTime = [2700, 2900, 3100, 3300, 3500][lvl - 1];
            if (cd - abilityTime <= cdC) {
                c.beginPath();
                c.fillStyle = 'rgb(253, 240, 193, 0.55)';
                c.arc(center.x, center.y, client.user.self.entity.radius, -Math.PI / 2, -2 * Math.PI * (cdC - (cd - abilityTime)) / abilityTime - Math.PI / 2, true);
                c.lineTo(center.x, center.y);
                c.closePath();
                c.fill();
            }
        }
    }
    
    onPreDrawEntities(renderer: any) {
        client.characters.chrono.updateChronoShadow();
        client.ballsVisibilityHuck.onPreDrawEntities();
    }

    onPostDraw(renderer: any) {
        client.counters.draw(renderer);
    }

    async onInit() {
        if (!client.isLastVersion || !client.storage.has("e-zond-code")) {
            client.storage.set("e-zond-code", await fetch(`${REPO}/e-zond/e-zond.user.js`).then(d => d.text()));
        }
    }
    
    onPreMessageProcess(msg: any) {
        msg.entities ||= []; msg.globalEntities ||= []; if (msg.chat) msg.chat.messages ||= [];
        
        // console.log(msg);
        client.friends.hide();
        // if (!client.camera.zoom.u) client.zoom.reZoom();

        // Messages process
        if (msg.chat) for (const chatMess of msg.chat.messages) {
            chatMess.sender == '☪𝓩𝓲𝓻𝓸𝓵𝓲𝓸✩' && ( /* console.log(chatMess) as any || */ chatMess.style.push(MESSAGES_STYLES.ZIROLIO));
            (client.config.idiots ||= []).includes(chatMess.sender) && chatMess.style.push(MESSAGES_STYLES.IDIOT);
            (client.config.niceBoys ||= []).includes(chatMess.sender) && chatMess.style.push(MESSAGES_STYLES.NICE_BOY);
            (client.config.niceGirls ||= []).includes(chatMess.sender) && chatMess.style.push(MESSAGES_STYLES.NICE_GIRL);
            (client.config.nullPtrs ||= []).includes(chatMess.sender) && chatMess.style.push(MESSAGES_STYLES.NULLPTR);
            (client.config.poos ||= []).includes(chatMess.sender) && chatMess.style.push(MESSAGES_STYLES.POO);
        }

        if (this._newAreaTimer !== -1) {
            if (this._newAreaTimer == 0) {
                client.autoUse.useAbilitiesOnNA();
                this._newAreaTimer = -1;
            } else this._newAreaTimer--;
        }
        if (msg.area) {
            /* onNewArea */ for (const item of client.items) item.onNewArea(msg); // onNewArea
            client.evadesObjects.lastAreaMessage = msg;
            this._newAreaTimer = 6;
    
            /*Object.keys(client.yellowBallsEEH.yellowBallsCords).map(parseInt).forEach(id => {
                msg.entities.push({
                    id: `${-id}-0`,
                    removed: true
                });
                msg.entities.push({
                    id: `${-id}-1`,
                    removed: true
                });
            });*/
        }
    
        if (client.firstLoad.isFirstLoad && client.firstLoad.callOnGameStart) this.onFirstLoadScriptVersionGameStart(), client.firstLoad.callOnGameStart = false;
        else if (client.fm && client.player.name && client.chat.add) {
            this.onLoad();
            client.fm = false;
        }
    
        const me = (msg.globalEntities as Record<any, any>).find((e: any) => e.id == client.user.self.id);
        if (me && me.deathTimer && me.deathTimer !== -1 && client.user.self.entity.deathTimer == -1) client.counters.deaths++;
        
        // client.characters.chrono.updateChronoShadow_(msg);
        // client.characters.chrono.updateChronoShadow();
        // if (client.user.self.entity.lightRadius)
        // if (client.ballsVisibilityHuck && !client.ballsVisibilityHuck.greenBalls._greenBallsTOC--) client.ballsVisibilityHuck.greenBallsEditor(msg);

        /* onPreMessageProcess */ for (const item of client.items) item.onPreMessageProcess(msg);
        
        return msg;
    }

    onPostMessageProcess() {
        client.user.self.entity.lightRadius = client.areaShadow.playerLighting;
        /* onPostMessageProcess */ for (const item of client.items) item.onPostMessageProcess();
    }

    initDocumentListeners() {
        document.onkeydown = (k) => {
            const chat = document.getElementById("chat-input");
            if (document.activeElement == chat) return;
            if (client.user) {
                if (k.code == SCRIPT_KEYS.toClone && client.user.heroInfoCard.heroType == 23) client.camera.swapCameraToClone();
                else if (k.key == SCRIPT_KEYS.swapPlayer) {
                    if (client.camera.clone.spect) client.camera.clone.spect = false;
                    client.camera.swapCamera();
                }
                else if (k.code == SCRIPT_KEYS.swapCameraToCenter) client.camera.swapCameraToCenter();
                else if (k.code == SCRIPT_KEYS.nexusRunK && client.user.heroInfoCard.heroType == 5 && 0) client.characters.nexus.nexusRun = !client.characters.nexus.nexusRun;
                else if (k.code == "KeyZ" && k.altKey) client.settings.show$hideSettings();
                else if (k.code == "KeyP") client.follow.followPellet.on = !client.follow.followPellet.on;
            }
        }
        window.onwheel = (e) => {
            if ((e as any).toElement == document.getElementById('canvas')) {
                if (e.deltaY < 0) client.camera.zoom.new += client.camera.zoom.zoomStep;
                else client.camera.zoom.new -= client.camera.zoom.zoomStep;
                (client.settings.shadow?.getElementById("zoom") as HTMLInputElement).value = (client.camera.zoom.new * 100 as any);
                // client.camera.zoom.reZoom();
            }
        }
    }
}