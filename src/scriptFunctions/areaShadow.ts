import { client } from "../main";
import ScriptItem from "../scriptItem";

export class AreaShadow extends ScriptItem {
    public defaultLighting: number = 0;

    private _areaShadow: boolean = true;
    get areaShadow() { return this._areaShadow; }
    set areaShadow(value) {
        if (client.user) {
            client.user.area.lighting = value ? Math.min(1 - this.minShadow, this.defaultLighting) : 1;
        }
        this._areaShadow = value;
    }

    private _minShadow: number = 0;
    get minShadow() { return this._minShadow; }
    set minShadow(value) {
        if (client.user && this._areaShadow) client.user.area.lighting = Math.min(1 - value, this.defaultLighting);
        this._minShadow = value;
    }

    private _playerLighting: number = 50;
    get playerLighting() { return this._playerLighting; }
    set playerLighting(value) {
        if (client.user && client.user.self.entity) client.user.self.entity.lightRadius = value;
        this._playerLighting = value;
    }

    onNewArea(msg: any): void {
        this.defaultLighting = msg.area.lighting;
        if (!this.areaShadow) msg.area.lighting = 1;
        else {
            msg.area.lighting = Math.min(1 - this.minShadow, msg.area.lighting);
        }
    }
}