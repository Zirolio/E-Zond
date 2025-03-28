import { client } from "../../main";
import { JsEditor } from "./jsEditor.ts";

export class EditorsController_2 {
    private observer: MutationObserver;
    private editors: Array<JsEditor> = [];
    private onAllFinish: (editors: Array<JsEditor>) => void;
    public isFinished: boolean = false;

    constructor(onAllFinish: (editors: Array<JsEditor>) => void) {
        this.onAllFinish = onAllFinish;
        this.observer = new MutationObserver((ev) => {
            const scripts = Array.from(document.getElementsByTagName('script'));
            scripts.forEach(element => this.editors.forEach(editor => editor.checkElement(element)));
        });
        this.observer.observe(document, {childList: true, subtree: true});
    }

    registerEditor(editor: JsEditor) {
        this.editors.push(editor);
    }

    async checkAllFinish() {
        if (this.editors.map(editor => editor.isFinished).indexOf(false) == -1 && !this.isFinished) {
            this.isFinished = true;
            if (!client.defaultHtml) await new Promise(res => { const id = setInterval((): any => client.defaultHtml && ((clearInterval(id) as any) || true) && res(1), 1); });
            this.onAllFinish(this.editors);
            this.observer.disconnect();
        }
    }
}