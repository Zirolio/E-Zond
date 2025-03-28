import { EditorsController } from "./editorsController";

export class JsEditor_2 {
    public controller: EditorsController;
    public isFinished: boolean;
    public isInLoadProcess: boolean;
    public codeEditor: (code: string) => string;
    public matchElement: (element: HTMLScriptElement) => boolean;
    public replaceElementSrc: (html: string) => string;
    public addTo: 'body' | 'head';
    public script!: HTMLScriptElement;

    constructor(matchElement: (element: HTMLScriptElement) => boolean, replaceElementSrc: (html: string) => string, codeEditor: (code: string) => string, controller: EditorsController, addTo: 'body' | 'head' = 'head') {
        this.controller = controller;
        this.codeEditor = codeEditor;
        this.matchElement = matchElement;
        this.replaceElementSrc = replaceElementSrc;
        this.isFinished = false;
        this.isInLoadProcess = false;
        this.addTo = addTo;
    }

    checkElement(element: HTMLScriptElement) {
        if (this.matchElement(element) && !this.isFinished && !this.isInLoadProcess) {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', element.src, true);
            xhr.onload = () => {
                this.script = this.createScriptElement(this.codeEditor(xhr.response));
                this.isFinished = true;
                this.controller.checkAllFinish();
            };
            this.isInLoadProcess = true;
            xhr.send();
        }
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