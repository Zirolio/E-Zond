import { copyFileSync, writeFileSync } from "fs";
import path from "path";
import type { Plugin } from "vite";

interface Manifest {
    updateURL: string;
    downloadURL: string;
    loaderURL: string;
}

export default function buildPostProcessPlugin(meta: string, manifest: Manifest): Plugin {
    return {
        name: "build-post-process-plugin",
        generateBundle(_, bundle) {
            for (const file of Object.values(bundle)) {
                if (file.type === "chunk") {
                    if (file.fileName.includes(path.parse(manifest.loaderURL).name)) {
                        file.code = meta + "\n" + file.code;
                    }
                }
            }
        },
        writeBundle(config: any, _bundle: any) {
            let scriptMeta = meta + '\n';

            meta.match(/\%[\w$]+\%/g)?.forEach(a => scriptMeta = scriptMeta.replace(a, v => {
                let res: any = manifest;
                const path = v.slice(1, -1).split("$");
                path.forEach(e => res = res[e]);
                return res;
            }));

            writeFileSync(path.join(config.dir, `./${path.parse(manifest.updateURL).base}`), scriptMeta);
            copyFileSync(path.join(process.cwd(), './configs/manifest.json'), path.join(config.dir, `./manifest.json`));
            copyFileSync(path.join(process.cwd(), './configs/config.json'), path.join(config.dir, `./config.json`));
        }
    }
}