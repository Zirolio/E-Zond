import { client } from "../../main";
import { ChatMessage } from "../chat";

export class Nexus {
    public player: number = NaN;
    public playerName: string = "";
    public ignisKD: number = NaN;
    public nexusRun: boolean = false;

    getLabelSetIgnis(_this: any) {
        try {
            const player = client.utils.getPlayerDataFromCM(_this.props.name);
            if (client.user.name === _this.props.name || client.user.heroInfoCard.heroType !== 5 || player.heroType !== 21) return '';
            return player.name === this.playerName ? 'Unset Ignis' : 'Set Ignis';
        } catch { return ''; }
    }

    editKeysOnSetIgnis(_this: any) {
        if (this.ignisKD !== null && this.ignisKD - 2 <= 0.5) client.inputsEditor.pressKeys.push(10);
    }

    editPositionOnNexusRun(md: { x: number, y: number }) {
        if (md) return md;
        return { x: 8, y: 0, updated: true };
    }

    onClickSetIgnis(_this: any) {
        const player = client.utils.getPlayerDataFromCM();
        if (this.player == player.id) { this.player = NaN; this.playerName = ""; client.chat.addMessages([new ChatMessage(`You unset Ignis`)]); }
        else { this.player = player.id; this.playerName = player.name; client.chat.addMessages([new ChatMessage(`You set ${this.playerName} as Ignis`)]); }
        _this.props.hide();
    }
}