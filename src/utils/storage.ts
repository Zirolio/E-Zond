import { VERSION } from "./constants";

export class Storage {
    constructor() {
        this.default();
    }

    get(key: string, t: 'bool' | 'num' | 'JSON' | 'string' = 'bool') {
        let res = localStorage.getItem(key);
        if (t === 'bool') return res === "true" ? true : false;
        else if (t === 'num') return Number(res);
        else if (t === 'JSON') return JSON.parse(res || "{}");
        else return res;
    }

    set(key: string, value: Object) {
        localStorage.setItem(key, String(value));
        return value;
    }

    has(key: string) {
        return localStorage.getItem(key) !== null;
    }

    default() {
        if (localStorage.getItem('friends') === null) this.set('friends', JSON.stringify([]));
        if (localStorage.getItem('ballsOpacity') === null) this.set('ballsOpacity', 1);
        if (localStorage.getItem('minShadow') === null) this.set('minShadow', 0);
        if (localStorage.getItem('Zoom') === null) this.set('Zoom', 1);
        if (localStorage.getItem('aur') === null) this.set('aur', false);
        if (localStorage.getItem('reaperShadow') === null) this.set('reaperShadow', false);
        if (localStorage.getItem('crossCursor') === null) this.set('crossCursor', false);
        if (localStorage.getItem('ballsVisibilityHuck') === null) this.set('ballsVisibilityHuck', false);
        if (localStorage.getItem('chatMessages') === null) this.set('chatMessages', true);
        if (localStorage.getItem('deathsC') === null) this.set('deathsC', false);
        if (localStorage.getItem('pps') === null) this.set('pps', false);
        if (localStorage.getItem('antiAFK') === null) this.set('antiAFK', false);
        if (localStorage.getItem('ChronoShadow') === null) this.set('ChronoShadow', false);
        if (localStorage.getItem('AreaShadow') === null) this.set('AreaShadow', true);
        if (localStorage.getItem('ballsOnMiniMap') === null) this.set('ballsOnMiniMap', false);
        if (localStorage.getItem('necroCooldowns') === null) this.set('necroCooldowns', false);
        if (localStorage.getItem('snowballAIM') === null) this.set('snowballAIM', false);
        if (localStorage.getItem('echelonAIM') === null) this.set('echelonAIM', false);
        if (localStorage.getItem('necroAIM') === null) this.set('necroAIM', false);
        if (localStorage.getItem('ramesesAIM') === null) this.set('ramesesAIM', false);
        if (localStorage.getItem('e-zond-version') === null) this.set('e-zond-version', "");
    }
}

