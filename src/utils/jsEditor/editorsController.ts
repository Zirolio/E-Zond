import { client } from "../../main";
import { JsEditor } from "./jsEditor";

export class EditorsController {
    private editors: Array<JsEditor> = [];
    private onAllFinish: (editors: Array<JsEditor>) => void;
    public isFinished: boolean = false;
    public html: string = "";

    constructor(onAllFinish: (editors: Array<JsEditor>) => void) {
        this.onAllFinish = onAllFinish;
    }

    registerEditor(editor: JsEditor) {
        this.editors.push(editor);
    }

    onHtmlLoaded(html: string) {
        this.editors.forEach(editor => {
            const src = editor.checkHtml(html);
            src && (html = html.replace(src, ""));
        });
        this.html = html;
    }

    async checkAllFinish() {
        // if (!client.defaultHtml) await new Promise(res => { const id = setInterval((): any => client.defaultHtml && ((clearInterval(id) as any) || true) && res(1), 1); });
        if (this.editors.map(editor => editor.isFinished).indexOf(false) == -1 && !this.isFinished) {
            this.isFinished = true;
            this.onAllFinish(this.editors);
        }
    }
}