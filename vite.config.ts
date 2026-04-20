import { defineConfig } from 'vite';
import { copyFileSync, readFileSync, writeFileSync } from 'fs';
import * as path from 'path';

import Manifest from './configs/manifest.json';

const OUT_FILE_NAME = Manifest.downloadURL.split("/").slice(-1)[0];

const addScriptMetaPlugin: (meta: string) => any = (meta: string) => ({
    name: 'add-annotation',
    writeBundle(config: any, bundle: any) {
        let scriptMeta = meta + '\n';

        meta.match(/\%[\w$]+\%/g)?.forEach(a => scriptMeta = scriptMeta.replace(a, v => {
            let res: any = Manifest;
            const path = v.slice(1, -1).split("$");
            path.forEach(e => res = res[e]);
            return res;
        }));

        writeFileSync(path.join(config.dir, `./${Manifest.updateURL.split("/").slice(-1)[0]}`), scriptMeta);
        writeFileSync(path.join(config.dir, `./e-zond.loader.user.js`), `${scriptMeta}\n${readFileSync(path.join(__dirname, './src/e-zond.loader.user.js'))}`);
        copyFileSync(path.join(__dirname, './configs/manifest.json'), path.join(config.dir, `./manifest.json`));
        copyFileSync(path.join(__dirname, './configs/config.json'), path.join(config.dir, `./config.json`));
    }
});

export default defineConfig({
    plugins: [
        // cssModulesPlugin(),
        addScriptMetaPlugin(readFileSync(path.join(__dirname, "./src/e-zond.meta.txt")).toString())
    ],
    build: {
        minify: "terser",
        assetsInlineLimit: 0,
        outDir: 'e-zond',
        assetsDir: '.',
        emptyOutDir: false,
        rollupOptions: {
            input: {
                main: 'src/main.ts'
            },
            output: {
                entryFileNames: OUT_FILE_NAME,
            }
        }
    },
    define: {
        'import.meta.env.VERSION': JSON.stringify(Manifest.version)
    }
});