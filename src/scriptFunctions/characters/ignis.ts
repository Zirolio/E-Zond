import { client } from "../../main";
import { ChatMessage } from "../chat";

export class Ignis {
    readonly timeToUse: number = 0.5;

    public player!: number;
    public playerName!: string;
    public nexusKD!: boolean;

    getLabelSetNexus(_this: any) {
        try {
            const player = client.utils.getPlayerDataFromCM(_this.props.name);
            if (client.user.name === _this.props.name || client.user.heroInfoCard.heroType !== 5 || player.heroType !== 5) return '';
            return player.name === this.playerName ? 'Unset Nexus' : 'Set Nexus';
        } catch { return ''; }
    }
    
    editKeysOnSetNexus() {
        if (this.nexusKD) client.inputsEditor.pressKeys.push(10);
        this.nexusKD = false;
    }

    onClickSetNexus(_this: any) {
        const player = client.utils.getPlayerDataFromCM();
        
        if (this.player == player.id) { this.player = NaN; this.playerName = ""; client.chat.addMessages([new ChatMessage(`You unset Nexus`)]); }
        else { this.player = player.id; this.playerName = player.name; client.chat.addMessages([new ChatMessage(`You set ${this.playerName} as Nexus`)]); }
        _this.props.hide();
    }
}