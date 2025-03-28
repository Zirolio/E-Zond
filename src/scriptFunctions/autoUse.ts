import { client } from "../main"
import ScriptItem from "../scriptItem";

export class AutoUse extends ScriptItem {
    public one: boolean = false;
    public two: boolean = false;
    public three: boolean = false;

    public oneOnNA: boolean = false;
    public twoOnNA: boolean = false;
    public threeOnNA: boolean = false;
    public spaceOnNA: boolean = false;
    
    public ignoreEnergy: boolean = false;

    useAbilitiesOnNA() {
        if (this.oneOnNA) client.inputsEditor.pressKeys.push(10);
        if (this.twoOnNA) client.inputsEditor.pressKeys.push(11);
        if (this.threeOnNA) client.inputsEditor.pressKeys.push(12);
        if (this.spaceOnNA) client.inputsEditor.pressKeys.push(13);
    }

    useAbilities(_this: any) {
        if (this.one && this.chekCanUse(client.user.heroInfoCard.abilityOne)) client.inputsEditor.pressKeys.push(10);
        if (this.two && this.chekCanUse(client.user.heroInfoCard.abilityTwo)) client.inputsEditor.pressKeys.push(11);
        if (this.three && this.chekCanUse(client.user.heroInfoCard.abilityThree)) client.inputsEditor.pressKeys.push(12);
    }

    chekCanUse(a: any, ignoreType: boolean = false) {
        return a.level &&
            a.cooldown <= 0 &&
            (![8, 56].includes(a.abilityType) || ignoreType) &&
            !a.disabled && (client.user.heroInfoCard.energy >= a.energyCost || client.autoUse.ignoreEnergy);
    }
}