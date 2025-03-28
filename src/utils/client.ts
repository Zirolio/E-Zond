import { Chat } from "../scriptFunctions/chat";
import { CrossianCursor } from "../scriptFunctions/crossianCursor";
import { Camera } from "../scriptFunctions/camera";
import { Friends } from "./friends";
import { Settings } from "./settings";
import { Storage } from "./storage";
import { InputsEditor } from "../scriptFunctions/inputsEditor";
import { AutoUse } from "../scriptFunctions/autoUse";
import { MiniMap } from "../scriptFunctions/miniMap";
import { AIM } from "../scriptFunctions/aim";
import { Follow } from "../scriptFunctions/follow";
import { Nexus } from "../scriptFunctions/characters/nexus";
import { AreaShadow } from "../scriptFunctions/areaShadow";
import { Chrono } from "../scriptFunctions/characters/chrono";
import { Necro } from "../scriptFunctions/characters/necro";
import { Reaper } from "../scriptFunctions/characters/reaper";
import { BallsVisibilityHuck } from "../scriptFunctions/ballsVisibilityHuck";
import { AntiAFK } from "../scriptFunctions/antiAfk";
import { Counters } from "./counters";
import { Ignis } from "../scriptFunctions/characters/ignis";
import { Listeners } from "../scriptFunctions/listeners";
import { REPO, VERSION } from "./constants";
import { FirstLoadVersion } from "./firstLoadVersion";
import { Requests } from "./requests";
import { React } from "./react";
import { Utils } from "./utils";
import LeaderBoard from "../scriptFunctions/leaderBoard";
import ScriptItem from "../scriptItem";

interface Player {
    id: number;
    name: string;
}

interface Characters {
    chrono: Chrono;
    necro: Necro;
    reaper: Reaper;
    ignis: Ignis;
    nexus: Nexus;
}

interface EvadesObjects {
    user?: any;
    camera?: any;
    workWGE?: any;
    baseData?: any;
    protobuf?: any;
    react?: any;
    lastAreaMessage?: any;
}

interface EvadesVarNames {
    jsx: string;
    socket: string;
}

export default class Client {
    public readonly items: Set<ScriptItem> = new Set();
    private readonly workUrl: string;

    public readonly version: string = VERSION;
    public manifest: any;
    public config: any;

    public isLastVersion: boolean = false;
    public defaultHtml: string = "";
    public parcelRequireProp!: string;
    public evadesVarNames: EvadesVarNames = { jsx: "", socket: "" };
    // public socketVarName!: string;
    // $89c2c39e9b59da7c$exports.jsx
    
    public fm: boolean = true;
    public flood: boolean = false;
    public loggedIn: boolean = false;
    
    public react: React = new React();
    // public leadreBoardAccessories: LeadreBoardAccessories = new LeadreBoardAccessories();
    public utils: Utils = new Utils();
    public requests: Requests = new Requests();
    public leaderBoard: LeaderBoard = new LeaderBoard();
    public firstLoad: FirstLoadVersion = new FirstLoadVersion();
    public crossianCursor: CrossianCursor = new CrossianCursor();
    public storage: Storage = new Storage();
    public camera: Camera = new Camera();
    public inputsEditor: InputsEditor = new InputsEditor();
    public autoUse: AutoUse = new AutoUse();
    public miniMap: MiniMap = new MiniMap();
    public follow: Follow = new Follow();
    public areaShadow: AreaShadow = new AreaShadow();
    public counters: Counters = new Counters();
    public aim: AIM = new AIM();
    public ballsVisibilityHuck: BallsVisibilityHuck = new BallsVisibilityHuck();
    public antiAfk: AntiAFK = new AntiAFK();
    public listeners: Listeners = new Listeners();
    public chat: Chat = new Chat();
    public characters: Characters = { chrono: new Chrono(), necro: new Necro(), reaper: new Reaper(), ignis: new Ignis(), nexus: new Nexus() };
    
    public settings!: Settings;
    public friends!: Friends;
    
    public evadesObjects: EvadesObjects = {};
    public player: Player = { name: "", id: NaN };
    public socketNow!: WebSocket;
    public ws!: WebSocket;
    
    public c!: CanvasRenderingContext2D;
    public canvas!: HTMLCanvasElement;
    public mouse: { x: number, y: number } = { x: 0, y: 0 };
    
    public playProcessFn!: Function;
    
    get baseData() { return this.evadesObjects.baseData; }
    get workWGE() { return this.evadesObjects.workWGE; };
    get user() { return this.evadesObjects.user; };
    get protobuf() { return this.evadesObjects.protobuf || {} }; set protobuf(value) { this.evadesObjects.protobuf = value; };
    get encode() { return this.protobuf.ClientPayload.encode; };
    get decode() { return this.protobuf.FramePayload.decode; };
    get lastAreaMessage() { return this.evadesObjects.lastAreaMessage; };
    get updateParam() { return this.listeners.onUpdateParam; };
    public drawDopElements: Function = () => {};
    
    public ballsVisibilityHuck_DEFYC: any = null;
    
    private onHtmlLoad!: (html: string) => void;
    constructor(url: string) {
        this.workUrl = url;
        if (this.storage.get("e-zond-version", "string") !== VERSION) {
            if (this.storage.get("e-zond-version", "string") !== null) this.firstLoad.isFirstLoad = true;
            this.storage.set("e-zond-version", VERSION);
        }
    }

    run(onHtmlLoad: (html: string) => void) {
        // INIT :)
        [...Object.values(this), ...Object.values(this.characters)].filter(item => item instanceof ScriptItem).forEach(value => this.items.add(value));
        
        this.onHtmlLoad = onHtmlLoad;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', this.workUrl, true);
        xhr.setRequestHeader('refer', 'https://www.google.com');
        xhr.onload = async() => {
            this.manifest = await fetch(`${REPO}/e-zond/manifest.json`).then(data => data.json());
            this.config = await fetch(`${REPO}/e-zond/config.json`).then(data => data.json());

            Object.defineProperty(window, "_client", {
                get: () => this,
                set: () => {},
                enumerable: false,
                configurable: false
            });
            
            this.isLastVersion = this.manifest.version == VERSION;
            this.defaultHtml = xhr.responseText;
            this.onHtmlLoad(this.defaultHtml);
        }
        xhr.send();
    }

    public getTimePlayed(playedSec: number) {
        return `Time played: ${Math.floor(Math.floor(playedSec / 60) / 60)}h ${Math.floor(playedSec / 60) % 60}m ${Math.floor(playedSec) % 60}s`
    }
    /* goCirkle: {
        on: false,
        angle: 0,
        R: 1,
        cirkle,
        steS: 20
    }, */
}