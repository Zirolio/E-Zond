import Settings from "./Settings";
import Replacer from "@injector/Replacer";
import type Injector from "@injector/Injector";

export default class Client {
    // public camera: CameraReplacer = new CameraReplacer();
    public settings: Settings = new Settings();

    add<K extends string, V>(key: K, value: V): this & Record<K, V> {
        (this as Record<K, V>)[key] = value;
        return this as this & Record<K, V>;
    }

    init(injector: Injector) {
        Object.values(this).forEach(v => {
            if (v instanceof Replacer) injector.addReplacer(v);
        });

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