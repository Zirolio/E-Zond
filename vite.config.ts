import { defineConfig } from 'vite';
import Manifest from './configs/manifest.json';
import path from 'path';
import buildPostProcessPlugin from './plugins/buildPostProcessPlugin';
import { readFileSync } from 'fs';

const Meta = readFileSync(path.join(__dirname, "./e-zond.meta.txt")).toString();
const SCRIPT_FILE_NAME = path.parse(Manifest.downloadURL).name;
const LOADER_FILE_NAME = path.parse(Manifest.loaderURL).name;


export default defineConfig(({ mode }) => {
    const isWatch = mode === "development";

    const input: Record<string, string> = {
        [SCRIPT_FILE_NAME]: 'src/main.ts'
    };
    
    if (!isWatch) {
        input[LOADER_FILE_NAME] = 'src/loader.ts';
    }

    return {
        plugins: [
            buildPostProcessPlugin(Meta, Manifest)
        ],
        build: {
            outDir: 'e-zond',
            rollupOptions: {
                input: input,
                output: {
                    entryFileNames: () => {
                        return "[name].js";
                    },
                }
            }
        },
        define: {
            'import.meta.env.SCRIPT_VERSION': JSON.stringify(Manifest.version),
            'import.meta.env.SCRIPT_NAME': JSON.stringify(Manifest.name.en),
        }
    }
});