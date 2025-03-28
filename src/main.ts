import Client from "./utils/client";
import { Friends } from "./utils/friends";
import EZondInit from "./utils/init";
import { EditorsController } from "./utils/jsEditor/editorsController";
import { Settings } from "./utils/settings";
import ScriptStyles from "./script.styles.css?raw";

window.stop(); document.documentElement.innerHTML = ""; document.head.appendChild(document.createElement('style')).innerHTML = "body { background: #222 }";

export const client: Client = new Client(document.location.href);

// editorsController.onHtmlLoaded.bind(editorsController)

if (document.location.href == "https://evades.io/") {
    const editorsController = new EditorsController(editors => {
        const ctx = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};
        delete (ctx as any)[client.parcelRequireProp];
    
        const _obsUi = new MutationObserver((ev) => {
            if (document.getElementsByClassName('changelog')[0] && !document.getElementById('frList__')) new Friends();
            if (document.getElementById('chat') && !document.getElementById('chat')!.hidden && !document.getElementById('chatScaleBtn')) client.chat.initChatScale();
        });
    
        document.documentElement.innerHTML = editorsController.html; document.head.appendChild(document.createElement('style')).innerHTML = "body { background: #222 }"; _obsUi.observe(document, {childList: true, subtree: true});
        for (const editor of editors) document[editor.addTo].appendChild(editor.getScriptElement());
    
        client.antiAfk.init();
        client.listeners.initDocumentListeners();
        client.settings = new Settings();
    
        document.head.appendChild(document.createElement('style')).innerHTML = ScriptStyles;// `.changelog { border-top-left-radius: 0px; } .box-ad { display: none } .ezond-dev { color: #31ffa8 } .ezond-script { color: #0f79fa } .ezond-nice-girl { color: #ed4792 } .ezond-idiot { color: #c25a00 } .ezond-nice-boy { color: #fc0362 } .ezond-warn { color: #f26f6f !important } .ezond-message { background-color: #4d4d4dbd; color: #aaa9a9; border-radius: 4px; padding: 2px; display: inline-block; } .ezond-nullptr { color: red; } ::-webkit-scrollbar { width: 6px; height: 6px; } ::-webkit-scrollbar-thumb { background-color: #6d6d6d; border-radius: 2px; } ::-webkit-scrollbar-track { background-color: rgba(0, 0, 0, 0); } * { scrollbar-width: thin; } *::-webkit-scrollbar { width: 6px; height: 6px; } *::-webkit-scrollbar-thumb { background-color: #6d6d6d; border-radius: 2px; } *::-webkit-scrollbar-track { background-color: rgba(0, 0, 0, 0); }`;
    });
    EZondInit.initGame('window._client', editorsController);
    client.run(editorsController.onHtmlLoaded.bind(editorsController));
} else if (document.location.href.startsWith("https://evades.io/profile")) { // Hahaha)
    const editorsController = new EditorsController(editors => {
        const ctx = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};
        delete (ctx as any)[client.parcelRequireProp];
    
        document.documentElement.innerHTML = editorsController.html; document.head.appendChild(document.createElement('style')).innerHTML = "body { background: #222 }";
        for (const editor of editors) document[editor.addTo].appendChild(editor.getScriptElement());
    });

    EZondInit.initProfile(editorsController);
    client.run(editorsController.onHtmlLoaded.bind(editorsController));
}
/*editorsController.registerEditor(new JsEditor(element => element.type == 'module' && element.src.match(/\/moderator_tools\.[0-9a-f]{8}\.js/g), html => html.replace(/(type="module" src=")?\/moderator_tools\.[0-9a-zA-Z]+\.js/g, (_) => `/${Math.floor(Math.random() * 1000)}.js`), code => {
    let compleeted = 0;
    code = code
        
    console.log(compleeted)
    return code;

}, editorsController));*/