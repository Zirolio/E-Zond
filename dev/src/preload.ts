import { ipcRenderer } from "electron";

eval(ipcRenderer.sendSync("get-script-sync"));