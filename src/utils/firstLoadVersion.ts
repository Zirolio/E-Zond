import { ChatMessage } from "../scriptFunctions/chat";
import { client } from "../main";
import { FIRST_LOAD_MESSAGE, MESSAGES_STYLES, REPO } from "./constants";

export class FirstLoadVersion {
    public callOnGameStart: boolean = false;
    private _isFirstLoad: boolean = false;
    set isFirstLoad(value: boolean) { if (value) { this.onStart(); this._isFirstLoad = this.callOnGameStart = true; } }
    get isFirstLoad() { return this._isFirstLoad; }

    async onStart() {
        
    }

    onGameStart() {
        if (FIRST_LOAD_MESSAGE.length) client.chat.addMessages([new ChatMessage(FIRST_LOAD_MESSAGE, [MESSAGES_STYLES.PRIVATE_MESSAGE, MESSAGES_STYLES.SCRIPT_MESSAGE_SENDER])]);
    }
}