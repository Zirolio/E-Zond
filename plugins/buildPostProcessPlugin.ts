import { copyFileSync, writeFileSync } from "fs";
import path from "path";
import type { Plugin } from "vite";

interface Manifest {
    updateURL: string;
    downloadURL: string;
    loaderURL: string;
    embdedURL: string;
}

export default function buildPostProcessPlugin(meta: string, manifest: Manifest): Plugin {
    const scriptBase = path.parse(manifest.downloadURL).base;
    const updateBase = path.parse(manifest.updateURL).base;
    const embdedBase = path.parse(manifest.embdedURL).base;

    let scriptMeta = meta + '\n';
    meta.match(/%[\w$]+%/g)?.forEach(a => scriptMeta = scriptMeta.replace(a, v => {
        // eslint-disable-next-line
        let res: any = manifest;
        const path = v.slice(1, -1).split("$");
        path.forEach(e => res = res[e]);
        return res;
    }));
    
    return {
        name: "build-post-process-plugin",
        generateBundle(_, bundle) {
            for (const file of Object.values(bundle)) {
                if (file.type === "chunk") {
                    if (file.fileName.includes(path.parse(manifest.loaderURL).name)) {
                        file.code = scriptMeta + file.code;
                    }
                }
            }
        },
        writeBundle(config, bundle) {
            if (config.dir) {
                writeFileSync(path.join(config.dir, `./${updateBase}`), scriptMeta);
                if (bundle[scriptBase].type === "chunk") {
                    writeFileSync(path.join(config.dir, `./${embdedBase}`), scriptMeta + bundle[scriptBase].code);
                }

                copyFileSync(path.join(process.cwd(), './configs/manifest.json'), path.join(config.dir, `./manifest.json`));
                copyFileSync(path.join(process.cwd(), './configs/config.json'), path.join(config.dir, `./config.json`));
            }
        }
    }
}