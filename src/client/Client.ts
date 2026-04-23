import Settings from "./Settings";
import Replacer from "@injector/Replacer";
import type Injector from "@injector/Injector";
import type { SettingsSchema } from "@shared/types/Settings.type";
import { LOCAL_STORAGE_SETTINGS_KEY } from "@/constants";
import Logger from "@shared/util/logger/Logger";

export default class Client<S extends SettingsSchema> {
    public settings: Settings<S>;
    get settingsState() { return this.settings.state; }

    public logger: Logger = Logger;
    
    private _replacers: Set<Replacer> = new Set();

    constructor(settingsConfig: S) {
        this.settings = new Settings(settingsConfig, LOCAL_STORAGE_SETTINGS_KEY);
    }

    add<V extends Replacer>(replacer: V): this;
    add<K extends string, V extends Replacer>(key: K, value: V): this & Record<K, V>;
    add<K extends string, V extends Replacer>(key: K | V, value?: V): this | this & Record<K, V> {
        
        if (key instanceof Replacer) {
            this._replacers.add(key);
            return this;
        } else {
            (this as Record<K, V>)[key as K] = value as V;
            this._replacers.add(value as V);
            return this as this & Record<K, V>;
        }
    }

    initInjector<I extends Injector>(injector: I): I {
        for (const replacer of this._replacers) {
            injector.addReplacer(replacer);
        }

        return injector;
    }

    init() {
        this.settings.init();

        /* window._client = this; */
        Object.defineProperty(window, "_client", {
            get: () => this,
            set: () => {},
            enumerable: false,
            configurable: false
        });
    }
}