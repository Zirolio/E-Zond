import { Extension } from "typescript";
import { client } from "../main";
import { MESSAGES_STYLES, REPO } from "../utils/constants";
import { UpdateParamEvent } from "../utils/settings";
import ScriptItem from "../scriptItem";

export class Chat extends ScriptItem {
    private playersLightsStorage: Record<string, number> = {};
    public chatMessages: boolean = true;
    public add!: Function;

    onPostMessageProcess() {
        Object.keys(this.playersLightsStorage).forEach(name => {
            const entity = client.utils.getPlayerEntityByName(name, false);
            if (entity) entity.lightRadius = this.playersLightsStorage[name];
        });
    }

    onInputsEdit(msg: any): void {
        this.chatCommands(msg);
        
    }

    chatCommands(msg: any) {
        msg.message && document.getElementById('chat-window')!.scroll(0, document.getElementById('chat-window')!.scrollHeight);
        if (!msg.message || !msg.message.startsWith("=") || msg.message.match(/^=$/g)) return;
        
        const [commandName, ...args] = this.getMessageParams(msg.message);
        // =setPlLight ☪𝓩𝓲𝓻𝓸𝓵𝓲𝓸✩
        if (commandName == 'help') client.settings.show$hideHelp(args[0]);
        else if (commandName == 'addFr') client.friends.add(args.join(' '));
        else if (commandName == 'removeFr') client.friends.rm(args.join(' '));
        else if (commandName == 'clear') document.getElementById('chat-window')!.innerHTML = '';
        else if (commandName == 'reset') client.user.chatMessages.push("/reset random"), setTimeout(() => client.user.chatMessages.push("/warp random"), 300);
        else if (commandName == 'filter') this.chatFilterCommand(args);
        else if (commandName == 'setPlLight') this.setPlayerLightCommand(args);
        else if (['rc', 'reconnect'].includes(commandName)) this.reconnectCommand(args)
        msg.message = '';
    }

    getMessageParams(message: string) {
        let result: Array<string> = [], temp: string = "";
        for (const e of message.slice(1).split(/\s+/g)) {
            if (e.startsWith('"') && e.endsWith('"') && !temp) result.push(e.slice(1, -1));
            else if (e.startsWith('"') && !temp) temp = e + " ";
            else if (e.endsWith('"')) result.push((temp + e).slice(1, -1)), temp = "";
            else if (temp) temp += e + " ";
            else result.push(e);
        }
        return result;
    }
    
    addMessages(messages: Array<ChatMessage> = [], onlySendThis: boolean = false) {
        if (!client.chat.chatMessages && !onlySendThis) return;
        client.chat.add(client.user.globalEntities, { messages });
    }

    initChatScale() {
        const chatWindow = document.getElementById('chat-window')!, chatScale = 3; chatWindow.style.position = 'relative'; chatWindow.style.padding = '0px 0px 8px 0px'; chatWindow.style.height = 'calc(100% - 33px)';
        const btn = chatWindow.appendChild(document.createElement('div')) as HTMLDivElement, chatCostumStyles = document.head.appendChild(document.createElement('style')); chatCostumStyles.setAttribute('id', 'chatCostumStyles');
    
        (btn as any).style = `position: fixed; right: 4px; bottom: 4px; color: black; width: 20px; cursor: pointer; width: 20px; height: 20px;`;
        btn.style.backgroundImage = `url(${REPO}/resources/arrow.png)`;
        btn.style.transform = 'scale(0.7) translate(0px, -170%)';
        btn.id = 'chatScaleBtn';
        btn.onclick = () => {
            chatCostumStyles.innerHTML = chatCostumStyles.innerHTML ? '' : `#chat-window { width: ${300 * chatScale}px; height: ${165 * chatScale}px; } #chat { width: ${300 * chatScale}px; height: ${200 * chatScale}px; }`
            btn.style.transform = chatCostumStyles.innerHTML ? 'scale(0.7) translate(0px, -170%) rotate(180deg)' : 'scale(0.7) translate(0px, -170%)';
            chatWindow.scroll(0, chatWindow.scrollHeight);
        }
    }

    chatFilterCommand(args: Array<string>) {
        Array.from(document.querySelectorAll<HTMLSpanElement>('#chat-window>div.chat-message')).forEach(chatMessage => {
            const sender = (chatMessage.querySelector<HTMLSpanElement>('.chat-message-sender') || { innerText: undefined }).innerText;
            if (typeof sender !== 'undefined') {
                if (!args[0] || sender == args[0]) chatMessage.style.display = '';
                else chatMessage.style.display = 'none';
            }
        });
    }
    
    reconnectCommand(args: Array<string>) {
        if (args[0]) {
            const serverData = (args[0].match(/^([a-zA-Z]+?)(\d+?)$/s) || []).slice(1);
            if (serverData.length == 2 && !isNaN(parseInt(serverData[1]))) {
                const region = ['eu', 'na'].find(region => serverData[0].toLowerCase() == region);
                const server = Math.max(Math.min(parseInt(serverData[1]), 8), 1);
                if (region && server) {
                    client.ws.close();
                    client.fm = true;
                    client.playProcessFn(`https://${region == 'na' ? '' : 'eu.'}evades.io`, server - 1, 0);
                }
            }
        }
    }
    
    setPlayerLightCommand(args: Array<string>) {
        if (args[0] && client.settings.shadow.getElementById('playerLighting')?.style.display !== 'none') {
            const light = isNaN(parseInt(args[1])) ? 50 : Math.min(Math.max(parseInt(args[1]), 0), 800);
            
            if (args[0] !== client.player.name) {
                const entity = client.utils.getPlayerEntityByName(args[0]);
                if (entity) this.playersLightsStorage[entity.name] = entity.lightRadius = light, client.chat.addMessages([new ChatMessage(`Light by player ${entity.name} setted to 0`)]);
                else client.chat.addMessages([new ChatMessage(`Cannot find player ${entity.name} in game`)]);
            } else {
                const playerLightingSetting = client.settings.shadow.getElementById('playerLighting');
                (playerLightingSetting as HTMLInputElement).value = light.toString();
                client.settings.updateParam(new UpdateParamEvent("playerLighting", light));
            }
        }
    }
}


export class ChatMessage {
    static lastMessageID = 0;

    public id = ChatMessage.lastMessageID--;
    public sender: string; // E-Zond
    public text: string;
    public style: Array<number>;

    constructor(text: string = "", style: Array<number> = [MESSAGES_STYLES.SCRIPT_MESSAGE, MESSAGES_STYLES.SCRIPT_MESSAGE_SENDER], sender: string = '') {
        this.text = text || "";
        this.sender = sender;
        this.style = style;
    }
}