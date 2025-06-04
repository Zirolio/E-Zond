import { client } from "../main";
import { HTML_CSS_VERSION, SETTINGS_INFO } from "./constants";
import SETTINGS_STYLES from "../../dist/main.css?raw";
import SETTINGS_HTML from "../../dist/settingsAndHelp.html?raw";

interface OptionData {
    id: string;
    type: string;
    value: boolean | number;
    default: boolean | number;
}

export class Settings {
    public options: Record<string, OptionData> = {};
    public settings!: HTMLDivElement;
    public shadow!: ShadowRoot;

    constructor() {
        // Get params
        client.ballsVisibilityHuck_DEFYC = client.ballsVisibilityHuck ? ['rgba(237, 230, 88, 0.4)', 'rgba(240, 132, 31, 0.4)'] : ['#ede658', '#f0841f'];

        /* if (localStorage.getItem('friends') === null) client.storage.set('friends', JSON.stringify([]));
        if (localStorage.getItem('ballsOpacity') === null) client.storage.set('ballsOpacity', 1);
        if (localStorage.getItem('minShadow') === null) client.storage.set('minShadow', 0);
        if (localStorage.getItem('Zoom') === null) client.storage.set('Zoom', 1);
        if (localStorage.getItem('aur') === null) client.storage.set('aur', false);
        if (localStorage.getItem('reaperShadow') === null) client.storage.set('reaperShadow', false);
        if (localStorage.getItem('crossCursor') === null) client.storage.set('crossCursor', false);
        if (localStorage.getItem('ballsVisibilityHuck') === null) client.storage.set('ballsVisibilityHuck', false);
        if (localStorage.getItem('chatMessages') === null) client.storage.set('chatMessages', true);
        if (localStorage.getItem('deathsC') === null) client.storage.set('deathsC', false);
        if (localStorage.getItem('pps') === null) client.storage.set('pps', false);
        if (localStorage.getItem('antiAFK') === null) client.storage.set('antiAFK', false);
        if (localStorage.getItem('ChronoShadow') === null) client.storage.set('ChronoShadow', false);
        if (localStorage.getItem('AreaShadow') === null) client.storage.set('AreaShadow', true);
        if (localStorage.getItem('ballsOnMiniMap') === null) client.storage.set('ballsOnMiniMap', false);
        if (localStorage.getItem('necroCooldowns') === null) client.storage.set('necroCooldowns', false);
        if (localStorage.getItem('snowballAIM') === null) client.storage.set('snowballAIM', false);
        if (localStorage.getItem('echelonAIM') === null) client.storage.set('echelonAIM', false);
        if (localStorage.getItem('necroAIM') === null) client.storage.set('necroAIM', false);
        if (localStorage.getItem('ramesesAIM') === null) client.storage.set('ramesesAIM', false); */
        /* client.crossianCursor.on = false
        client.characters.chrono.aur.on = false
        client.chat.chatMessages = true
        client.ballsVisibilityHuck.on = false
        client.counters.deathsC = false
        client.counters.ppsC = false
        client.antiAfk.on = false
        client.aim.snowballAIM.on = false
        client.aim.echelonAIM.on = false
        client.aim.necroAIM.on = false
        client.aim.ramesesAIM.on = false
        client.characters.reaper.shadow.on = false
        client.characters.chrono.shadow.on = false
        client.areaShadow.areaShadow = true
        client.miniMap.showBalls = false
        client.characters.necro.visualCooldowns.on = false
        client.camera.zoom.new = 1
        client.ballsVisibilityHuck.ballsOpacity = 1
        client.areaShadow.minShadow = 0 */
        
        this.registrOption(client.ballsVisibilityHuck,               'ballsOpacity',         'ballsOpacity',         1,      'num');
        this.registrOption(client.areaShadow,                        'minShadow',            'minAreaShadow',        0,      'num');
        this.registrOption(client.areaShadow,                        'playerLighting',       'playerLighting',       50,     'num');
        this.registrOption(client.camera.zoom,                       'new',                  'zoom',                 1,      'num');
        this.registrOption(client.ballsVisibilityHuck,               'on',                   'ballsVisibilityHuck',  false);
        this.registrOption(client.crossianCursor,                    'on',                   'crossianCursor',       false);
        this.registrOption(client.chat,                              'chatMessages',         'chatMessages',         true);
        this.registrOption(client.areaShadow,                        'areaShadow',           'areaShadow',           true);
        this.registrOption(client.miniMap,                           'showBalls',            'miniMapBalls',         false);
        this.registrOption(client.characters.chrono.aur,             'on',                   'aur',                  false);
        this.registrOption(client.characters.reaper.shadow,          'on',                   'reaperShadow',         false);
        this.registrOption(client.characters.chrono.shadow,          'on',                   'chronoShadow',         false);
        this.registrOption(client.aim.snowballAIM,                   'on',                   'snowballAIM',          false);
        this.registrOption(client.aim.echelonAIM,                    'on',                   'echelonAIM',           false);
        this.registrOption(client.aim.ramesesAIM,                    'on',                   'ramesesAIM',           false);
        this.registrOption(client.aim.necroAIM,                      'on',                   'necroAIM',             false);
        this.registrOption(client.characters.necro.visualCooldowns,  'on',                   'necroVisualCooldowns', false);
        this.registrOption(client.counters,                          'deathsC',              'deathsC',              false);
        this.registrOption(client.counters,                          'ppsC',                 'ppsC',                 false);
        this.registrOption(client.antiAfk,                           'on',                   'antiAFK',              false);
        
        /*client.crossCursor.on = client.storage.get('crossCursor');
        client.chrono.aur.on = client.storage.get('aur');
        client.chat.chatMessages = client.storage.get('chatMessages');
        client.ballsVisibilityHuck = client.storage.get('ballsVisibilityHuck');
        client.ballsVisibilityHuck_DEFYC = client.ballsVisibilityHuck ? ['rgba(237, 230, 88, 0.4)', 'rgba(240, 132, 31, 0.4)'] : ['#ede658', '#f0841f'];
        client.counters.deathsC = client.storage.get('deathsC');
        client.antiAFK = client.storage.get('antiAFK');
        client.snowballAIM.on = client.storage.get('snowballAIM');
        client.echelonAIM.on = client.storage.get('echelonAIM');
        client.necroAIM.on = client.storage.get('necroAIM');
        client.ramesesAIM.on = client.storage.get('ramesesAIM');
        client.reaper.reaperShadow = client.storage.get('reaperShadow');
        client.chrono.showChronoShadow = client.storage.get('ChronoShadow');
        client.shadow.showAreaShadow = client.storage.get('AreaShadow');
        client.ballsOnMiniMap = client.storage.get('ballsOnMiniMap');
        client.necroCooldowns.on = client.storage.get('necroCooldowns');
        client.zoom._new = client.storage.get('Zoom', 'num');
        client.ballsOpacity = client.storage.get('ballsOpacity', 'num');
        client.shadow.minShadow = client.storage.get('minShadow', 'num');*/

        // ----------
        this.createSettings();
        // client.settings = this;
    }

    readValue(id: string, type: "num" | "bool" = "bool", defaultV: boolean | number = false) {
        const value = client.storage.get(id, type);
        if (type === "num" && Number.isNaN(value)) return defaultV;
        return value;
    }

    registrOption(target: any, optionKey: string, id: string, defaultV: boolean | number = false, type: "num" | "bool" = "bool", isStorageProperty: boolean = true) {
        if (isStorageProperty) {
            if (!client.storage.has(id)) client.storage.set(id, defaultV);
            /* if (id == "zoom") client.camera.zoom.updateZoom();
            else */
            target[optionKey] = this.readValue(id, type, defaultV);
        }

        Object.defineProperty(this.options, id, {
            get() { return { value: target[optionKey], type, id, default: defaultV }; },
            set(value) { isStorageProperty && client.storage.set(id, value); target[optionKey] = value; },
            // writable: true,
            enumerable: true,
            configurable: true
        });
    }

    createStyles(shadow: ShadowRoot) {
        const styles = document.createElement('style');
        styles.innerHTML = SETTINGS_STYLES;
        shadow.appendChild(styles);
    }

    createSettings() {
        const div = document.body.appendChild(document.createElement('div'));
        const settings = document.createElement('div');
        const shadow = div.attachShadow({ mode: 'open' });

        settings.innerHTML = SETTINGS_HTML;
        shadow.appendChild(settings);

        for (let i = 1; i <= 7; i++) shadow.getElementById(`c_abilitys${i}`)!.style.display = '';
        for (const [ id, optionData ] of Object.entries(this.options)) {
            const tag = shadow.getElementById(id) as HTMLSelectElement | HTMLInputElement;
            if (tag && optionData.type == "bool") (tag as HTMLInputElement).checked = optionData.value as boolean;
            else if (tag && optionData.type == "num") {
                tag.value = (optionData.value as number * (id !== "playerLighting" ? 100 : 1)).toString();
            }
            shadow.getElementById(`c_${id}`)!.style.display = '';

            if (id in SETTINGS_INFO) shadow.getElementById(`c_${id}`)!.title = (SETTINGS_INFO as any)[id];
        }

        // Hide
        shadow.getElementById('zond-sett')!.style.display = 'none';
        shadow.getElementById('zond-help-ru')!.style.display = 'none';
        shadow.getElementById('zond-help-en')!.style.display = 'none';

        this.createStyles(shadow);
        this.settings = div;
        this.shadow = shadow;

        // Set params
        /*shadow.getElementById('crossCursor').checked = client.crossCursor.on;
        shadow.getElementById('aur').checked = client.chrono.aur.on;
        shadow.getElementById('reaperShadow').checked = client.reaper.reaperShadow;
        shadow.getElementById('chatMessages').checked = client.chat.chatMessages;
        shadow.getElementById('ballsVisibilityHuck').checked = client.ballsVisibilityHuck;
        shadow.getElementById('deathsC').checked = client.counters.deathsC;
        shadow.getElementById('antiAFK').checked = client.antiAFK;
        shadow.getElementById('snowballAIM').checked = client.snowballAIM.on;
        shadow.getElementById('echelonAIM').checked = client.echelonAIM.on;
        shadow.getElementById('necroAIM').checked = client.necroAIM.on;
        shadow.getElementById('ramesesAIM').checked = client.ramesesAIM.on;
        shadow.getElementById('ChronoShadow').checked = client.chrono.showChronoShadow;
        shadow.getElementById('AreaShadow').checked = client.shadow.showAreaShadow;
        shadow.getElementById('ballsOnMiniMap').checked = client.ballsOnMiniMap;
        shadow.getElementById('necroCooldowns').checked = client.necroCooldowns.on;

        shadow.getElementById('Zoom').value = client.zoom._new * 100;
        shadow.getElementById('ballsOpacity').value = client.ballsOpacity * 100;
        shadow.getElementById('minShadow').value = client.shadow.minShadow * 100;*/
        // for (const option in client.settings.registrOption)
    }

    onUpdateParam(option: string | Record<string, string | number>, tag: HTMLInputElement) {
        this.updateParam(new UpdateParamEvent(option, isNaN(tag.valueAsNumber) ? tag.checked : tag.valueAsNumber));
    }

    updateParam(event: UpdateParamEvent) {
        // console.log(tag.valueAsNumber ? tag.valueAsNumber / 100 : tag.checked);
        if (typeof event.option == "string" && client.settings.options[event.option]) {
            (client.settings.options as any)[event.option] = !isNaN(event.valueAsNumber) ? event.valueAsNumber / (event.option !== "playerLighting" ? 100 : 1) : event.checked;
        } else if (typeof event.option == "object") {
            if (event.option.type == 'au') (client.autoUse as any)[event.option.abilityNumber] = event.checked;
            if (event.option.type == 'auNA') (client.autoUse as any)[`${event.option.abilityNumber}OnNA`] = event.checked;
        }
        
        // if (option == 'zoom') client.camera.zoom.reZoom();
        else if (event.option == 'ballsVisibilityHuck') {
            event.checked ? client.baseData.defaults.glowy_enemy.color = 'rgba(237, 230, 88, 0.4)' : client.baseData.defaults.glowy_enemy.color = '#ede658';
            event.checked ? client.baseData.defaults.firefly_enemy.color = 'rgba(240, 132, 31, 0.4)' : client.baseData.defaults.firefly_enemy.color = '#f0841f';
        }
    }

    show$hideSettings() {
        const settE = this.shadow.getElementById('zond-sett')!;
        settE.style.display = !settE.style.display ? 'none' : '';
    }

    show$hideHelp(leanguage: string = 'en') {
        if (!['ru', 'en'].includes(leanguage)) leanguage = 'en';
        this.shadow.getElementById('zond-help-' + { en: 'ru', ru: 'en' }[leanguage])!.style.display = 'none';
        const helpE = this.shadow.getElementById('zond-help-' + leanguage);
        helpE!.style.display = !helpE!.style.display ? 'none' : '';
    }
}


export class UpdateParamEvent {
    readonly option: string | Record<string, string | number>;
    readonly value: boolean | number;

    get valueAsNumber() { return parseFloat(this.value as any); }
    get checked() { return Boolean(this.value); }

    constructor(option: string | Record<string, string | number>, value: boolean | number) {
        this.option = option;
        this.value = value;
    }
}