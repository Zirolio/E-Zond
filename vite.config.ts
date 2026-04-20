import { defineConfig } from 'vite';
import Manifest from './configs/manifest.json';

const OUT_FILE_NAME = Manifest.downloadURL.split('/').slice(-1)[0];

export default defineConfig({
    plugins: [
    ],
    build: {
        outDir: 'e-zond',
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