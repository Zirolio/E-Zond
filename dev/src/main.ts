import { app, BrowserWindow, Menu, session } from "electron";
import * as fs from "fs";
import * as path from "path";
import Manifest from "../../configs/manifest.json";

// Preload script
const eZond = fs.readFileSync(path.join(__dirname, `../../../../e-zond/${Manifest.downloadURL.split("/").slice(-1)[0]}`)).toString();

// Hide menu
Menu.setApplicationMenu(null);
app.whenReady().then(() => {
    const browserWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            session: session.fromPartition("e-zond.dev:session")
        }
    });

    // Listeners
    app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit());
    browserWindow.webContents.openDevTools();
    
    // Inject
    browserWindow.webContents.on("dom-ready", () => browserWindow.webContents.executeJavaScript(eZond));

    browserWindow.loadURL("https://evades.io");
});