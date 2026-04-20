import { BrowserWindow, globalShortcut, ipcMain } from "electron";
import chokidar, { FSWatcher } from "chokidar";
import { readFile } from "fs/promises";
import path from "path";
import fs from "fs";


export default class MainWindow extends BrowserWindow {
    private watchFilepath: string;
    private watchFileName: string;
    private watcher!: FSWatcher;
    private script: string = "";

    constructor(watchFilepath: string) {
        super({
            title: "E-Zond dev window",
            webPreferences: {
                preload: path.join(__dirname, "./preload.js"),
                contextIsolation: true
            }
        });
        this.watchFilepath = watchFilepath;
        this.watchFileName = path.parse(this.watchFilepath).base;

        this.init();
    }

    private async init() {
        this.script = fs.readFileSync(this.watchFilepath, "utf-8");

        ipcMain.removeAllListeners("get-script-sync");
        ipcMain.on("get-script-sync", (event) => (event.returnValue = this.script));

        this.watcher = chokidar.watch(path.dirname(this.watchFilepath));
        this.watcher.on("all", async (event, filePath) => {
            // console.log("Changed:", event, "filePath:", filePath, filePath.endsWith(this.watchFileName));
            if (!filePath.endsWith(this.watchFileName)) return;

            this.script = await readFile(this.watchFilepath, "utf-8");
            console.log("\nScript changed!");
            this.loadURL("about:blank");
            this.loadURL("https://evades.io");
        });

        this.on("closed", () => this.watcher.close());
        this.loadURL("https://evades.io");
    }
}