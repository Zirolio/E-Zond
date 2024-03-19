// ==UserScript==
// @name           E-Ui-Zond
// @name:ru        E-Ui-Zond
// @namespace      http://tampermonkey.net/
// @version        2
// @description    Ui script for evades.io
// @description:ru Ui скрипт для evades.io
// @author         .zirolio.
// @match          https://evades.io
// @icon           data:image/jpeg;base64,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
// @run-at         document-start
// @grant          none
// ==/UserScript==

'use strict';
const HTML_CSS_VERSION = '';
class Counters {
    constructor() {
        window._client.counters = this;
        this.deathsC = true;
        this.fpsC = true;
        this.deaths = 0;
        this.fps = 30;
        this.lastSend = 0;
        this.fpsUpdateF = 0;
    }

    draw(render) {
        const   text = [],
                x = 20,
                y = 240,
                h = 20;

        if (this.deathsC) text.push([`Deaths: ${this.deaths}`, () => '#ffffff']);
        if (this.fpsC) text.push([`FPS: ${this.fps}`, () => this.fps < 10 ? '#f00000' : this.fpls < 24 ? '#db7b2f' : '#00f000']);

        render.context.lineWidth = 3;
        render.context.font = "bold 15px Tahoma, Verdana, Segoe, sans-serif"
        render.context.textAlign = 'left';
        render.context.strokeStyle = '#000000';
        render.context.fillStyle = '#ffffff';

        for (let i = 0; i < text.length; i++) {
            const data = text[i];
            render.context.fillStyle = data[1]();
            render.context.strokeText(data[0], x, y + i * h);
            render.context.fillText(data[0], x, y + i * h);
        }
        render.context.lineWidth = 1;
    }
}
class Friends {
    constructor() {
        window._client.friends = this;
        this.createFriendsList();
    }

    onlineController(name, server, add=true) {
        const plb = this.shadow.getElementById(`${name}-online`);

        if (!add) plb && plb.remove();
        else if (!plb) {
            const ct = document.createElement('div');
            ct.className = 'px-3 pb-[0.5px] mb-1 flex justify-between border-b border-solid border-[#333] rounded-md last:border-none';
            ct.id = `${name}-online`;
            ct.innerHTML = `<span>${name}</span><span class="text-[hsl(172,69%,55%)] hover:text-[hsl(172,69%,36%)] hover:underline underline-offset-2 cursor-pointer" onclick="window._client.playProcessFn('${server.toLocaleLowerCase().slice(0, 2) == 'na' ? null : 'https://eu.evades.io'}', ${parseInt(server.toLocaleLowerCase().slice(2)) - 1}, 0)">${server}</span>`;
            this.shadow.getElementById('online').appendChild(ct);
        }
    }

    offlineController(name, add=true) {
        const plb = this.shadow.getElementById(`${name}-offline`);

        if (!add) plb && plb.remove();
        else if (!plb) {
            const ct = document.createElement('div');
            ct.className = 'px-3 pb-[0.5px] mb-1 flex justify-between border-b border-solid border-[#333] rounded-md last:border-none';
            ct.id = `${name}-offline`;
            ct.innerHTML = `<span>${name}</span>`;
            this.shadow.getElementById('offline').appendChild(ct);
        }
    }

    async update() {
        if (!window._client.user) {
            const onlinePl = await this.getConnectedPlayers(), friends = window.storage.get('friends', 'JSON');
            for (const friend of friends) {
                if (!Object.keys(onlinePl).includes(friend)) {
                    this.onlineController(friend, '', false);
                    this.offlineController(friend);
                } else {
                    this.onlineController(friend, onlinePl[friend]);
                    this.offlineController(friend, false);
                }
            }
            setTimeout(this.update.bind(this), 30 * 1000);
        }

    }

    async createStyles() {
        const styles = document.createElement('style');

        const xhr = new XMLHttpRequest();
        const onload = () => {
            styles.innerHTML = xhr.responseText;
            this.shadow.appendChild(styles);
        };
        xhr.onload = onload;
        xhr.open('GET', `https://raw.githubusercontent.com/Zirolio/E-Zond/main/distHtml${HTML_CSS_VERSION}/main.css.user.js`, true);
        xhr.send();
    }

    async createFriendsList() {
        const frList = document.createElement('div'), div = document.createElement('div'); this.frListE = frList;
        this.shadow = frList.attachShadow({ mode: 'open' });
        await this.createStyles();

        const xhr = new XMLHttpRequest();
        const onload = () => {
            div.innerHTML = xhr.responseText;
            this.shadow.appendChild(div);
            for (const friend of window.storage.get('friends', 'JSON')) this.offlineController(friend);
            this.update();
        };
        xhr.onload = onload;
        xhr.open('GET', `https://raw.githubusercontent.com/Zirolio/E-Zond/main/distHtml${HTML_CSS_VERSION}/friends.html.user.js`, true);
        xhr.send();


        const e = document.getElementsByClassName('hall-of-fame')[0].parentElement;
        e.parentElement.insertBefore(frList, e);
    }

    async getConnectedPlayers() {
        return await new Promise(reslove => {
            const xhr = new XMLHttpRequest();
            xhr.onload = () => {
                const res = JSON.parse(xhr.responseText), onlineList = {};

                const na = res.local, eu = Object.values(res.remotes)[0];
                for (let i = 0; i < na.length; i++) for (const plName of na[i][0].online) onlineList[plName] = `NA${i + 1}`;
                for (let i = 0; i < eu.length; i++) for (const plName of eu[i][0].online) onlineList[plName] = `EU${i + 1}`;

                reslove(onlineList);
            }
            xhr.open('GET', 'https://evades.io/api/game/list', true);
            xhr.send();
        });
    }

    hide() {
        const friendsCt = this.shadow.getElementById('friendsList');
        friendsCt.style.display = 'none';
    }

    hide$showFriends() {
        const friendsCt = this.shadow.getElementById('friendsList');
        friendsCt.style.display = !friendsCt.style.display ? 'none' : '';
    }

    getLabelAddFriends(_this) {
        if (window._client.user.name === _this.props.name) return '';
        const friends = window.storage.get('friends', 'JSON');
        return friends.includes(_this.props.name) ? 'Remove friend' : 'Add friend';
    }

    add(name) {
        const friends = window.storage.get('friends', 'JSON');
        if (!friends.includes(name)) {
            friends.push(name);
            window.storage.set('friends', JSON.stringify(friends));
            window._client.chat.addMessage(`Friend ${name} added`);
        }
    }
    rm(name) {
        const friends = window.storage.get('friends', 'JSON');
        if (friends.includes(name)) {
            window.storage.set('friends', JSON.stringify(friends.filter(_name => _name !== name)));
            window._client.chat.addMessage(`Friend ${name} removed`);
        }
    }
}
// --------
// Add friend
const onClickAddFriends = () => {
    const player = window._client.plDataCM();
    let friends = window.storage.get('friends', 'JSON');
    if (friends.includes(player.name)) { friends = friends.filter(name => name !== player.name); window._client.chat.addMessage(`Friend ${name} removed`); }
    else { window._client.chat.addMessage(`Friend ${name} added`); friends.push(player.name); }
    window.storage.set('friends', JSON.stringify(friends));
    this.props.hide();
}
// ----------
// Player id and name from Context menu
const plDataCM = (name) => {
    const teg = document.getElementsByClassName('player-contextmenu-header')[0]
    if (!teg) return {};
    if (!name) name = teg.getInnerHTML();
    return Object.values(window._client.user.globalEntities).find(e => { return e.name == name });
}
// ------------------------------------
const workWithInputs = (msg) => {
    if (msg.message.match(/^\/reset\b/g)) window._client.counters.deaths = 0;
    return msg;
}
const onMess = (msg) => {
    window._client.friends.hide();
    if (msg.chat) for (const chatMess of msg.chat.messages) chatMess.sender == '☪𝓩𝓲𝓻𝓸𝓵𝓲𝓸✩' && chatMess.style.push(-1);
    const me = msg.globalEntities.find(e => e.id == window._client.user.self.id);
    if (me && me.deathTimer && me.deathTimer !== -1 && window._client.user.self.entity.deathTimer == -1) window._client.counters.deaths++;
};
// ------------------------
// Chat
let lastMessageID = 0;
const initChatScale = () => {
    const chatWindow = document.getElementById('chat-window'), chatScale = 3; chatWindow.style.position = 'relative'; chatWindow.style.padding = '0px 0px 8px 0px'; chatWindow.style.height = 'calc(100% - 33px)';
    const btn = chatWindow.appendChild(document.createElement('div')), chatCostumStyles = document.head.appendChild(document.createElement('style'));
    btn.style = `position: fixed; right: 4px; bottom: 0px; color: black; width: 20px; cursor: pointer; width: 20px; height: 20px;`;
    btn.style.backgroundImage = 'url(https://github.com/Zirolio/EvadesRes/blob/main/arrow.png?raw=true)';
    btn.style.transform = 'scale(0.7) translate(0px, -170%)';
    btn.onclick = () => {
        chatCostumStyles.innerHTML = chatCostumStyles.innerHTML ? '' : `#chat-window { width: ${300 * chatScale}px; height: ${165 * chatScale}px; } #chat { width: ${300 * chatScale}px; height: ${200 * chatScale}px; }`
        btn.style.transform = chatCostumStyles.innerHTML ? 'scale(0.7) translate(0px, -170%) rotate(180deg)' : 'scale(0.7) translate(0px, -170%)';
    }
}
const addMessage = (text, style=[9]) => {
    if (!window._client.chat.chatMessages) return;
    window._client.chat.add(window._client.user.globalEntities, {
        messages: [{
            id: lastMessageID--,
            sender: 'E-Zond',
            style,
            text
        }]
    });
}
// ----
// Client :)
const client = {
    ws: null,
    name: null,
    playProcessFn: null,
    user: null,
    chat: {
        add: null,
        addMessage,
        chatMessages: true
    },
    ws: null,

    plDataCM,
    workWithInputs,
    onMess,

    crossCursor: {
        on: false,
        size: 24
    },
    initChatScale,
    counters: null,
    friends: null,
    defaultStorage: () => {
        window.storage = {
            get: (key, t='bool') => {
                let res = localStorage.getItem(key);
                if (t === 'bool') return res === "true" ? true : false;
                if (t === 'num') return Number(res);
                if (t === 'JSON') return JSON.parse(res);
                return res;
            },
            set: (key, value) => {
                localStorage.setItem(key, String(value));
                return value;
            },
            default: () => {
                if (localStorage.getItem('friends') === null) window.storage.set('friends', JSON.stringify([]));
            }
        }
        window.storage.default();
    },
}
window._client = client;
// ---------
const imgW = 32;
// Friends list
const _obsChat = new MutationObserver((ev) => {
    if (document.getElementById('chat')) {
        window._client.initChatScale();
        _obsChat.disconnect();
    }
});
_obsChat.observe(document, {childList: true, subtree: true});
const _obsFr = new MutationObserver((ev) => {
    if (document.getElementsByClassName('hall-of-fame')[0]) {
        new Friends();
        _obsFr.disconnect();
    }
});
_obsFr.observe(document, {childList: true, subtree: true});
// Edit Js
const _obsJs = new MutationObserver((ev) => {
    const elem = Array.from(document.querySelectorAll('script')).filter(teg => teg.type === 'module' && teg.src.match(/\/index\.[0-9a-f]{8}\.js/))[0];
    if (!elem) return;
    let req = new XMLHttpRequest();
    req.open("GET", elem.src, false);
    req.onload = () => {
        let code = req.response;
        code = code
            .replace(/(this\.sequence=0,)/g, (g) => { return g + 'window._client.user = this,'})
            .replace(/(ClientPayload\.encode\()([a-zA-Z0-9$]+)\)/g, (_, a, b) => { return a + `window._client.workWithInputs(${b}))` })
        // TM
            .replace(/[a-zA-Z0-9\$]+\.get\(\)\.tileMode/g, _ => `(tm => { window._client.ballsStroke = [2, 3].includes(tm) ? "rgb(225, 225, 225)" : "black"; return tm; })(${_})`)
            .replace(/this\.gameState\.settingsInput/g, (_, a, b) => 'window._client.ballsStroke = [2, 3].includes(this.state.newSettings.tileMode) ? "rgb(225, 225, 225)" : "black";' + _)
            .replace(/(\.get\(\)\.enemyOutlines.*?.\.strokeStyle\s*=\s*)"black"/g, (_, a) => a + 'window._client.ballsStroke')
            .replace(/\btilesDark:/g, (_) => { return _ + '"https://github.com/Zirolio/EvadesRes/blob/main/tilesE2.png?raw=true" || '})
        // FR
            .replace(/this\.play\.bind\(this\)/g, (_) => `(play => { window._client.playProcessFn = play; return play; })(${_})`)
            .replace(/(`url\(\$\{)(.\.src)(\}\)`)/g, (_, a, b, c) => a + `${b}.replace('profile/', '')` + c)
            .replace(/const\s*(.)\s*=\s*await\s*this\.props\.checkLogin\(\);/g, (_, a) => _ + `${a} && window._client.friends.hide();`)

            .replace(/"chat-message",/g, _ => { return _ + "id: this.props.message.id, title: new Date().toLocaleString('ru-Ru', { hour: '2-digit', minute: '2-digit' }) + \` (\${new Date().toLocaleString('en-En', { hour: '2-digit', minute: '2-digit' })})\`," })
            .replace(/(.)\.includes\([\$a-zA-Z0-9]+\.MESSAGE_STYLE_DEV\)\s*&&\s*(.)\.push\(\["\[Dev\]",\s*"dev"\]\),/g, (_, a, b, c) => { return `${a}.includes(-1) && ${b}.push(["[Zond-Ui]", "ezond-dev"]),` + _ })
            .replace(/"pointer"\s*:\s*"default"/g, () => { return '"pointer" : window._client.crossCursor.on ? `url(\'https://github.com/Zirolio/E-Zond/blob/main/cursor_x${window._client.crossCursor.size}.png?raw=true\') ${window._client.crossCursor.size / 2} ${window._client.crossCursor.size / 2}, crosshair` : "default"' })

            .replaceAll(/\.render\(this\.context\s*,\s*this\.camera\)/g, (_) => { return _ + ', window._client.counters.draw(this)' })
            .replace(/window\.tsmod&&\(window\.protobuf\=([a-zA-Z0-9$]+)\)/, (_, a) => { return `true && (window.protobuf = ${a}); window._client.decode = window.protobuf.FramePayload.decode; window._client.encode = window.protobuf.ClientPayload.encode;` })
            .replace(/([0-9a-zA-Z\$]+)\s*=\s*(new WebSocket\(.\))/g, (_, a, b) => { return `${a} = (ws => { window._client.ws = ws; ws.addEventListener('message', () => { if (!window._client.counters.fpsUpdateF--) { window._client.counters.fpsUpdateF = 10; window._client.counters.fps = Math.min(Math.floor(1000 / (Date.now() - window._client.counters.lastSend)), 30); } window._client.counters.lastSend = Date.now(); }); return ws; })(${b})` })
            .replace(/(this\.sequence=0,)/g, (g) => { return g + 'window._client.user = this, window._client.name = this.name,'})

            .replace(/processServerMessage\(.\)\s*\{/g, (_) => { return _ + `window._client.chat.add = this.updateChat;`; })
            .replace(/([a-zA-Z0-9\$]+)\=[a-zA-Z0-9\$]+\.FramePayload.decode\([a-zA-Z0-9]+\)/g, (a, b) => { return a + ", _ = window._client.onMess("+ b +")"; })
            .replaceAll(/\(0,.*?\}\)/g, (g) => {
                if (!g.includes('Copy Name')) return g;
                // Add friend
                let data = eval(`(${g.slice(g.indexOf("{"), g.lastIndexOf("}") + 1)})`);
                data.children = '-|-';
                data.onClick = '+|+';
                let addFriend = g.slice(0, g.indexOf("{")) + JSON.stringify(data, null, 4).replace('"+|+"', onClickAddFriends.toString()).replace('"-|-"', "window._client.friends.getLabelAddFriends(this)") + g.slice(g.lastIndexOf("}") + 1, -1);

                return g + ',' + addFriend + '),';
            });

        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://evades.io', true);
        xhr.setRequestHeader('refer', 'https://www.google.com');
        xhr.onload = () => {
            const html = xhr.responseText.replace(/(type="module" src=")(\/index\.[0-9a-zA-Z]+\.js)/g, (_, a) => a + '/qwe.js');
            document.documentElement.innerHTML = html;

            const nScr = document.createElement("script"); nScr.id = 'cde';
            nScr.setAttribute("type", "module");
            nScr.innerHTML = code;
            document.head.appendChild(nScr);

            window._client.defaultStorage();
            setInterval(() => { if (window._client.ws && window._client.encode) { window._client.ws.send(window._client.encode({ sequence: window._client.user.sequence++ }).finish()); } }, 60 * 1000); // 60
            new Counters();
            document.head.appendChild(document.createElement('style')).innerHTML = `.ezond-dev { color: #31ffa8 } ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-thumb { background-color: #6d6d6d; border-radius: 2px; } ::-webkit-scrollbar-track { background-color: rgba(0, 0, 0, 0); } * { scrollbar-width: thin; } *::-webkit-scrollbar { width: 6px; } *::-webkit-scrollbar-thumb { background-color: #6d6d6d; border-radius: 2px; } *::-webkit-scrollbar-track { background-color: rgba(0, 0, 0, 0); }`;
        }
        xhr.send();
    }

    req.send();
    _obsJs.disconnect();
});
_obsJs.observe(document, {childList: true, subtree: true});
// -------