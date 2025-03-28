import { EditorsController } from "./editorsController";

export class JsEditor {
    public controller: EditorsController;
    public isFinished: boolean;
    public isInLoadProcess: boolean;
    public codeEditor: (code: string, src: string) => string;
    public matchSrc: (html: string) => string;
    public addTo: 'body' | 'head';
    public script!: HTMLScriptElement;

    constructor(matchSrc: (html: string) => string, codeEditor: (code: string, src: string) => string, controller: EditorsController, addTo: 'body' | 'head' = 'head') {
        this.controller = controller;
        this.codeEditor = codeEditor;
        this.matchSrc = matchSrc;
        this.isFinished = false;
        this.isInLoadProcess = false;
        this.addTo = addTo;
    }

    checkHtml(html: string) {
        const src = this.matchSrc(html);
        if (!src) return false;

        const xhr = new XMLHttpRequest();
        xhr.open('GET', src, true);
        xhr.onload = () => {
            this.isFinished = true;
            this.script = this.createScriptElement(this.codeEditor(xhr.response, src));
            this.controller.checkAllFinish();
        };
        xhr.send();
        
        return src;
    }

    createScriptElement = (code: string) => {
        const nScr = document.createElement("script"); nScr.id = `cde-${Math.floor(Math.random() * 100)}`;
        nScr.setAttribute("type", "module");
        nScr.innerHTML = code;
        return nScr;
    }

    getScriptElement() {
        return this.script;
    }
}