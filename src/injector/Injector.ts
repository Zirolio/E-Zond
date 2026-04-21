import Logger from "@/shared/util/Logger";
import Replacer from "./Replacer";

interface ScriptConf {
    src: string;
    script: string;
    isModule: boolean;
}

interface CreatorConf {
    html: string;
    scripts: ScriptConf[];
}

export default class Injector {
    private replacers: Set<Replacer> = new Set();
    private matchScript: (scriptURL: string) => boolean;

    constructor(match: (scriptURL: string) => boolean) {
        this.matchScript = match;
    }

    addReplacer(replacer: Replacer) {
        this.replacers.add(replacer);
    }

    private replace(script: string) {
        for (const replacer of this.replacers) {
            let isReplaced = false;
            for (const { searchValue, replace } of replacer.replacerItems) {
                script = script.replace(searchValue, (substring: string, ...args: object[]) => {
                    isReplaced = true;
                    const replaced = replace(substring, ...args);
                    Logger.info(`Replaced "${substring}" to "${replaced}"`);

                    return replaced;
                });

                if (!isReplaced) {
                    Logger.error(`Could not replaced ${replacer}, "${searchValue}", "${replace}"`);
                }
            }
        }

        return script;
    }

    async init(
        postEditProcess: ((html: string, scripts: ScriptConf[]) => CreatorConf) = (html, scripts) => ({ html, scripts })
    ) {
        let html = await fetch(location.href, { credentials: "include" }).then(r => r.text());

        const scriptConfigs: ScriptConf[] = [];
        const scripts = html.matchAll(/<script[^>]+?src="(.*?)"[^>]*?><\/script>/g);

        for (const [script] of scripts) {
            if (this.matchScript(script)) {
                html = html.replace(script, "");

                const isModule = !!script.match(/type="module"/g);
                const src = script.match(/src="(.*?)"/)![1];
                const scriptCode = await (await fetch(src)).text();
                const replacedScriptCode = this.replace(scriptCode);

                scriptConfigs.push({
                    src: src,
                    script: replacedScriptCode,
                    isModule
                });
            }
        }

        this.create(postEditProcess(html, scriptConfigs))
    }
    
    private create({ html, scripts }: CreatorConf) {
        document.documentElement.innerHTML = html;

        for (const { script, isModule } of scripts) {
            const scriptElement = document.createElement("script");
            if (isModule) scriptElement.type = "module";
            scriptElement.textContent = script;
            console.log(scriptElement)
            document.body.appendChild(scriptElement);
        }
    }
}