import { app, BrowserWindow, globalShortcut, Menu } from "electron";
import MainWindow from "./MainWindow";
import path from "path";

const filePath = path.resolve(process.cwd(), process.env.FILE_PATH);

function createWindow() {
    const window = new MainWindow(filePath);
}

app.whenReady().then(() => {
    Menu.setApplicationMenu(null);
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    })
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});