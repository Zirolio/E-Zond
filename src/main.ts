import CameraReplacer from "@client/replacers/CameraReplacer";
import Injector from "./injector/Injector";
import Client from "@client/Client";
import GameObjectsReplacer from "@client/replacers/GameObjectsReplacer";
import { SETTINGS_SCHEMA } from "./constants";
import Logger from "@shared/util/logger/Logger";

export const client = new Client(SETTINGS_SCHEMA)
    .add("camera", new CameraReplacer())
    // .add("")
    .add("gameObjects", new GameObjectsReplacer())

function main() {
    window.stop();
    document.documentElement.innerHTML = "";
    document.head.appendChild(document.createElement('style')).innerHTML = "body { background: #222 }";
    
    if (location.origin + location.pathname === "https://evades.io/") {
        const injector = client.initInjector(new Injector((script) => {
            return !!script.match(/type="module".*?src="(\/index\.[a-zA-Z0-9]+?\.js)"/g)
        }));
        
        client.initInjector(injector);

        Logger.logo();
        injector.init((html, scripts) => {
            for (const script of scripts) {
                const parcelRequireProp = script.script.match(/parcelRequire\w+/g)?.[0];
                if (parcelRequireProp) {
                    const ctx = "undefined" != typeof globalThis ?
                        globalThis : "undefined" != typeof self ?
                        self : "undefined" != typeof window ? window : {};
                    delete (ctx as Record<string, unknown>)[parcelRequireProp];
                }

                if (script.isModule && script.src.match(/\/index\.[a-zA-Z0-9]+?\.js/g)) {
                    script.script = `console.log(...window._client.logger.getInjectedConfig());` + `import.meta.url = "${location.origin + script.src}";` + script.script;
                }
            }

            return {
                html,
                scripts
            }
        }).then(() => {
            client.init();
        });
    }
}

if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", main);
} else {
    main();
}