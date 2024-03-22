// ==UserScript==
// @name           E-Zond-Beta-d
// @name:ru        E-Zond-Beta-d
// @namespace      http://tampermonkey.net/
// @version        9.1
// @description    Script for evades.io
// @description:ru Скрипт для evades.io
// @author         .zirolio.
// @match          https://evades.io
// @icon           data:image/jpeg;base64,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
// @run-at         document-start
// @grant          none
// ==/UserScript==

//                                                             .--------------------------------------------------------------------------------------------------------------------.
//                                                             | Так-же хотелось бы поблагодорить розработчиков за отличную игру/проект, надеюсь, скоро будет много новых персов :) |
//                                                             | И ещё, я передаю привет всем разработчикам Evades, ну и просто разработчикам :)                                    |
//                                                             | А просто читающим - жешаю хорошей игры!!!                                                                          |
//                                                             |--------------------------------------------------------------------------------------------------------------------|
//                                                             | I would also like to thank the developers for a great game/project, I hope there will be many new Persians soon :) |
//                                                             | And also, I say hello to all Evades developers, and just developers :)                                             |
//                                                             | And just reading - I want a good game!!!                                                                           |
//                                                             ^--------------------------------------------------------------------------------------------------------------------^

'use strict';
const VERSION = '9.1-Beta';
const HTML_CSS_VERSION = '';
const PARAMSPLETTER = '!!';
const KEYS = {
    toClone: "KeyT",
    swapPlayer: "Tab",
    swapCameraToCenter: "Backquote",
    nexusRunK: "KeyN"
};
const MessageStyles = {
    NORMAL: 0,
    JR_MOD: 1,
    MOD: 2,
    SR_MOD: 3,
    HEAD_MOD: 4,
    DEV: 5,
    YOUTUBER: 6,
    STREAMER: 7,
    SERVER_WARNING: 8,
    SERVER_INFO: 9,
    PRIVATE_MESSAGE: 10
}
const MAPStoABR = {
    'Withering Wasteland': 'WW2',
    'Central Core': 'CC',
    'Central Core Hard': 'CCH',
    'Catastrophic Core': 'CC3',
    'Haunted Halls': 'HH2',
    'Peculiar Pyramid': 'PP',
    'Peculiar Pyramid Hard': 'PPH',
    'Wacky Wonderland': 'WW',
    'Glacial Gorge': 'GG',
    'Glacial Gorge Hard': 'GGH',
    'Vicious Valley': 'VV',
    'Vicious Valley Hard': 'VVH',
    'Humongous Hollow': 'HH',
    'Humongous Hollow Hard': 'HHH',
    'Elite Expanse': 'EE',
    'Elite Expanse Hard': 'EEH',
    'Endless Echo': 'EE2',
    'Endless Echo Hard': 'EE2H',
    'Dangerous District': 'DD',
    'Dangerous District Hard': 'DDH',
    'Quiet Quarry': 'QQ',
    'Quiet Quarry Hard': 'QQH',
    'Monumental Migration': 'MM',
    'Ominous Occult': 'OO',
    'Ominous Occult Hard': 'OOH',
    'Frozen Fjord': 'FF',
    'Frozen Fjord Hard': 'FFH',
    'Restless Ridge': 'RR',
    'Restless Ridge Hard': 'RRH',
    'Toxic Territory': 'TT',
    'Toxic Territory Hard': 'TTH',
    'Magnetic Monopole': 'MM2',
    'Magnetic Monopole Hard': 'MM2H',
    'Burning Bunker': 'BB',
    'Burning Bunker Hard': 'BBH',
    'Grand Garden': 'GG2',
    'Grand Garden Hard': 'GG2H',
    'Cyber Castle': 'CC2',
    'Infinite Inferno': 'II'
}
const HEROS = {
    magmax: 1,
    rime: 2,
    morfe: 3,
    aurora: 4,
    necro: 5,
    brute: 6,
    nexus: 7,
    shade: 8,
    euclid: 9,
    chrono: 10,
    reaper: 11,
    rameses: 12,
    jolt: 13,
    ghoul: 14,
    cent: 15,
    jotuun: 16,
    candy: 17,
    mirage: 18,
    boldrock: 19,
    glob: 20,
    magno: 21,
    ignis: 22,
    stella: 23,
    viola: 24,
    mortuus: 25,
    cybot: 26,
    echelon: 27,
    demona: 28,
    factorb: 29
}
let msgID = 0;
// Classes
class KeysArr {
    constructor() { this._ = []; }
    push(e) { if (!this._.includes(e)) this._.push(e); }
    clear() { this._ = []; }
    get() { return this._; }
}
class Settings {
    constructor() {
        window._client.settings = this;
        // Get params
        window._client.crossCursor.on = window.storage.get('crossCursor');
        window._client.chrono.aur.on = window.storage.get('aur');
        window._client.chat.chatMessages = window.storage.get('chatMessages');
        window._client.ballsVisibleHuck = window.storage.get('ballsVisibleHuck');
        window._client.ballsVisibleHuck_DEFYC = window._client.ballsVisibleHuck ? ['rgba(237, 230, 88, 0.4)', 'rgba(240, 132, 31, 0.4)'] : ['#ede658', '#f0841f'];
        window._client.counters.deathsC = window.storage.get('deathsC');
        window._client.antiAFK = window.storage.get('antiAFK');
        window._client.snowballAIM.on = window.storage.get('snowballAIM');
        window._client.echelonAIM.on = window.storage.get('echelonAIM');
        window._client.necroAIM.on = window.storage.get('necroAIM');
        window._client.ramesesAIM.on = window.storage.get('ramesesAIM');
        window._client.chrono.showChronoShadow = window.storage.get('ChronoShadow');
        window._client.shadow.showAreaShadow = window.storage.get('AreaShadow');
        window._client.ballsOnMap = window.storage.get('ballsOnMap');
        window._client.zoom._new = window.storage.get('Zoom', 'num');
        window._client.ballsOpacity = window.storage.get('ballsOpacity', 'num');
        window._client.shadow.minShadow = window.storage.get('minShadow', 'num');
        // ----------
        this.createSettings();
    }

    createStyles(shadow) {
        const styles = document.createElement('style');

        const xhr = new XMLHttpRequest();
        const onload = () => {
            styles.innerHTML = xhr.responseText;
            shadow.appendChild(styles);
        };
        xhr.onload = onload;
        xhr.open('GET', `https://raw.githubusercontent.com/Zirolio/E-Zond/main/distHtml${HTML_CSS_VERSION}/main.css.user.js`, true);
        xhr.send();
    }

    createSettings() {
        console.log(document, document.body);
        const div = document.body.appendChild(document.createElement('div'));
        const settings = document.createElement('div');
        const shadow = div.attachShadow({ mode: 'open' });

        const xhr = new XMLHttpRequest();

        const onload = () => {
            settings.innerHTML = xhr.responseText;
            shadow.appendChild(settings);

            // Set params
            shadow.getElementById('crossCursor').checked = window._client.crossCursor.on;
            shadow.getElementById('aur').checked = window._client.chrono.aur.on;
            shadow.getElementById('showReaperShadow').checked = window._client.reaper.showReaperShadow;
            shadow.getElementById('chatMessages').checked = window._client.chat.chatMessages;
            shadow.getElementById('ballsVisibleHuck').checked = window._client.ballsVisibleHuck;
            shadow.getElementById('deathsC').checked = window._client.counters.deathsC;
            shadow.getElementById('antiAFK').checked = window._client.antiAFK;
            shadow.getElementById('snowballAIM').checked = window._client.snowballAIM.on;
            shadow.getElementById('echelonAIM').checked = window._client.echelonAIM.on;
            shadow.getElementById('necroAIM').checked = window._client.necroAIM.on;
            shadow.getElementById('ramesesAIM').checked = window._client.ramesesAIM.on;
            shadow.getElementById('ChronoShadow').checked = window._client.chrono.showChronoShadow;
            shadow.getElementById('AreaShadow').checked = window._client.shadow.showAreaShadow;
            shadow.getElementById('ballsOnMap').checked = window._client.ballsOnMap;

            shadow.getElementById('Zoom').value = window._client.zoom._new * 100;
            shadow.getElementById('ballsOpacity').value = window._client.ballsOpacity * 100;
            shadow.getElementById('minShadow').value = window._client.shadow.minShadow * 100;
            // ----------
            // Hide
            shadow.getElementById('zond-sett').style.display = 'none';
            shadow.getElementById('zond-help-ru').style.display = 'none';
            shadow.getElementById('zond-help-en').style.display = 'none';
        };
        xhr.onload = onload;
        xhr.open('GET', `https://raw.githubusercontent.com/Zirolio/E-Zond/main/distHtml${HTML_CSS_VERSION}/settingsAndHelp.html.user.js`, true);
        xhr.send();

        this.createStyles(shadow);
        this.settings = div;
        this.shadow = shadow;
    }

    show$hideSettings() {
        const settE = this.shadow.getElementById('zond-sett');
        if (!settE.style.display) {
            window.storage.set('crossCursor', window._client.crossCursor.on);
            window.storage.set('aur', window._client.chrono.aur.on);
            window.storage.set('showReaperShadow', window._client.reaper.showReaperShadow);
            window.storage.set('ballsVisibleHuck', window._client.ballsVisibleHuck);
            window.storage.set('ballsOpacity', window._client.ballsOpacity);
            window.storage.set('minShadow', window._client.shadow.minShadow);
            window.storage.set('deathsC', window._client.counters.deathsC);
            window.storage.set('chatMessages', window._client.chat.chatMessages);
            window.storage.set('antiAFK', window._client.antiAFK);
            window.storage.set('echelonAIM', window._client.echelonAIM.on);
            window.storage.set('snowballAIM', window._client.snowballAIM.on);
            window.storage.set('necroAIM', window._client.necroAIM.on);
            window.storage.set('ramesesAIM', window._client.ramesesAIM.on);
            window.storage.set('ChronoShadow', window._client.chrono.showChronoShadow);
            window.storage.set('AreaShadow', window._client.shadow.showAreaShadow);
            window.storage.set('ballsOnMap', window._client.ballsOnMap);
            window.storage.set('Zoom', window._client.zoom._new);
        }
        settE.style.display = !settE.style.display ? 'none' : '';
    }
    show$hideHelp(l='en') {
        if (!['ru', 'en'].includes(l)) l = 'en';
        this.shadow.getElementById('zond-help-' + { en: 'ru', ru: 'en' }[l]).style.display = 'none';
        const helpE = this.shadow.getElementById('zond-help-' + l);
        helpE.style.display = !helpE.style.display ? 'none' : '';
    }
}
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
        if (document.getElementById('chatCostumStyles').innerHTML) return;
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
        const frList = document.createElement('div'); this.frListE = frList;
        // const changeBtnCtn = document.createElement('div');
        // this.btnShadow = changeBtnCtn.attachShadow({ mode: 'open' });
        this.shadow = frList.attachShadow({ mode: 'open' });
        await this.createStyles();

        const xhr = new XMLHttpRequest();
        const onload = () => {
            const changelog = document.getElementsByClassName('changelog')[0], parent = changelog.parentNode;
            const changeBtn = new DOMParser().parseFromString(xhr.responseText, 'text/html').getElementById('ChangeChlFr'), frl = new DOMParser().parseFromString(xhr.responseText, 'text/html').getElementById('friendsList'); frl.style.display = 'none';
            changeBtn.onclick = () => {
                changeBtn.innerText = 'Friends' == changeBtn.innerText ? 'Changelog' : 'Friends';
                changelog.style.display = changelog.style.display ? '' : 'none';
                this.shadow.getElementById('friendsList').style.display = this.shadow.getElementById('friendsList').style.display ? '' : 'none';
            }

            this.shadow.appendChild(changeBtn);
            this.shadow.appendChild(frl);
            parent.insertBefore(frList, changelog);

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
        this.frListE.style.display = 'none';
    }

    hide$showFriends() {
        this.frListE.style.display = !this.frListE.style.display ? 'none' : '';
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
// Edit inputs
const cirkle = (md) => { // Beta
    if (md) { window._client.goCirkle.point = null; return md; }
    if (!window._client.goCirkle.point) window._client.goCirkle.point = { x: window._client.user.self.entity.x, y: window._client.user.self.entity.y }

    const radians = (window._client.goCirkle.angle * Math.PI) / 180;
    const vec = { x: window._client.goCirkle.point.x + window._client.goCirkle.R * Math.cos(radians), y: window._client.goCirkle.point.y + window._client.goCirkle.R * Math.sin(radians) }
    if ((vec.x - window._client.user.self.entity.x)**2 - (vec.y - window._client.user.self.entity.y)**2 < 1) window._client.goCirkle.angle += window._client.goCirkle.steS;

    const newMD = {
        x: Math.floor((vec.x - window._client.user.self.entity.x) * 10),
        y: Math.floor((vec.y - window._client.user.self.entity.y) * 10),
        updated: true
    };

    return newMD;

}
const __editInputs2 = (msg) => {
    window._client.necroAIM.necroShot(msg);
    window._client.snowballAIM.snowballShot(msg);
    window._client.ramesesAIM.ramesesShot(msg);
    window._client.echelonAIM.echelonShot(msg);
    window._client.clone.updateKeysOnClone(msg);
    window._client.chat.chatCommands(msg);
    if (msg.message.match(/^\/reset\b/g)) window._client.counters.deaths = 0;
    try {
        if (window._client.user.heroInfoCard.heroType == 12) {
            window._client.user.self.entity.effects.effects[`${window._client.user.self.id}-JA`] = {
                effectType: 18,
                id: `${window._client.user.self.id}-JA`,
                noState: false,
                radius: { 0: 0, 1: 100, 2: 125, 3: 150, 4: 175, 5: 200 }[window._client.user.heroInfoCard.abilityTwo.level]
            }
        }
        /*if (!window._client._ && !msg.message && Object.values(window._client.user.globalEntities).filter(e => { return ['Zirolio', '☪𝓩𝓲𝓻𝓸𝓵𝓲𝓸✩', '𝘡𝘪𝘳𝘰𝘭𝘪𝘰'].includes(e.name); }) && !['Zirolio', '☪𝓩𝓲𝓻𝓸𝓵𝓲𝓸✩', '𝘡𝘪𝘳𝘰𝘭𝘪𝘰'].includes(window._client.user.self.entity.name)) {
            msg.message = `${'П'}${'р'}${'и'}${'в'}${'е'}${'т'} ` + Object.values(window._client.user.globalEntities).filter(e => { return ['Zirolio', '☪𝓩𝓲𝓻𝓸𝓵𝓲𝓸✩', '𝘡𝘪𝘳𝘰𝘭𝘪𝘰'].includes(e.name); })[0].name;
            window._client._ = true;
        }*/
        /*if (!window._client._) {
            window._client.chat.addMessage('Write "=help" or "=help ru" for open help-menu');
            window._client._ = true;
        }*/
    } catch {}
    return msg;
}
const editInputData = (md) => {
    if (window._client.flood) window._client.user.chatMessages.push('/reset');
    if (window._client.chrono.aur.on) window._client.chrono.aur.AuRes();

    // if (md) return md;
    if (window._client.follow.player !== null) return window._client.follow.editPositionOnFollow(md);
    else if (window._client.followPellet.on) return window._client.followPellet.editPositionOnFollowPellet(md);
    else if (window._client.setNexus.nexusRun) return window._client.setNexus.editPositionOnNexusRun(md);
    else if (window._client.goCirkle.on) return window._client.goCirkle.cirkle(md);
    else {
        window._client.goCirkle.point = null;
    }

    return md;
}
const editKeys = (keys) => {
    // Unpress
    let keysN = keys.map(k => { return k.keyType; });
    window._client.__editInputs.unpressKeys.get().forEach(k => { if (!keysN.includes(k)) keys.push({ keyEvent: 2, keyType: k }); });
    window._client.__editInputs.unpressKeys.clear();
    // -------
    // Press
    keysN = keys.map(k => { return k.keyType; });
    window._client.__editInputs.pressKeys._.forEach(k => {
        if (keysN.includes(k)) return;
        keys.push({ keyEvent: 1, keyType: k });
        window._client.__editInputs.unpressKeys.push(k);
    });
    window._client.__editInputs.pressKeys.clear();
    // Timer
    keysN = keys.map(k => { return k.keyType; });
    window._client.__editInputs.delAfter = window._client.__editInputs.delAfter.filter(k => { return k.t > 0; })
    window._client.__editInputs.delAfter.forEach(k => {
        if (!keysN.includes(k) && k.n) {
            keys.push({ keyEvent: 1, keyType: k.k });
            k.n = false;
        } else {
            k.t--;
            if (k.t <= 0) window._client.__editInputs.unpressKeys.push(k.k);
        }
    });
    // -----
    return keys;
}
// -----------
// Follow
const onClickFollow = () => {
    const player = window._client.plDataCM();
    if (window._client.follow.player == player.id) { window._client.follow.player = null; window._client.follow.playerName = null; window._client.user.mouseDown = null; window._client.chat.addMessage(`You are unfollowing`); return; }
    else { window._client.follow.player = player.id; window._client.follow.playerName = player.name; window._client.chat.addMessage(`You are following ${window._client.follow.playerName}`); }

    const   me = window._client.user.self.entity,
            pl = window._client.user.globalEntities[player.id];
    if (!pl) { window._client.follow.player = null; window._client.chat.addMessage(`You are unfollowing`); return; }

    if (me.regionName !== pl.regionName && Object.keys(MAPStoABR).includes(pl.regionName)) window._client.user.chatMessages.push(`/warp ${MAPStoABR[pl.regionName]}`);
}
const editPositionOnFollow = (md) => {
    if (md) return md;
    const   me = window._client.user.self.entity,
            pl = window._client.user.globalEntities[window._client.follow.player];
    if (!pl) { window._client.follow.player = null; window._client.chat.addMessage(`Player not found`); return { updated: false }; }
    let x = pl.x - me.x,
        y = pl.y - me.y;
    const d = Math.sqrt(x**2 + y**2);
    const getN = (c) => {if (d > 50) return c / d * 200; return c * 2}

    if (pl.regionName !== me.regionName) {
        if (!me.regionName.endsWith('Hard') && (pl.regionName.endsWith('Hard') || ['Mysterious Mansion'].includes(pl.regionName)) && !['Endless Echo Hard'].includes(pl.regionName)) x = -x;
        if ((pl.regionName == 'Catastrophic Core' && me.regionName == 'Central Core Hard') || (pl.regionName == 'Central Core Hard' && me.regionName == 'Catastrophic Core')) x = -x;
        if ((pl.regionName == 'Central Core' && me.regionName == 'Withering Wasteland') || (me.regionName == 'Central Core' && pl.regionName == 'Withering Wasteland')) y = -y;
    }

    const followData = { x: Math.floor(getN(x)), y: Math.floor(getN(y)), updated: true };
    return followData.x || followData.y ? followData : { updated: false };
}
const editPositionOnFollowPellet = (md) => {
    if (md) return md;
    const me = window._client.user.self.entity;
    let pellet = window._client.user.entities[window._client.followPellet.pellet];

    if (!pellet) {
        const newPellet = Object.entries(window._client.user.entities).filter(e => e[1].entityType == 1).sort((e1, e2) => { return Math.sqrt((e1[1].x - me.x)**2 + (e1[1].y - me.y)**2) - Math.sqrt((e2[1].x - me.x)**2 + (e2[1].y - me.y)**2); })[0];
        window._client.followPellet.pellet = newPellet[0];
        pellet = newPellet[1];
    }

    let x = pellet.x - me.x,
        y = pellet.y - me.y;
    const d = Math.sqrt(x**2 + y**2);
    const getN = (c) => {if (d > 50) return c / d * 200; return c * 2}

    const followData = { x: Math.floor(getN(x)), y: Math.floor(getN(y)), updated: true };
    return followData.x || followData.y ? followData : { updated: false };
}
const getLabelFollow = (_this) => { try { if (window._client.user.name === _this.props.name) return ''; return _this.props.name === window._client.follow.playerName ? 'Un Follow' : 'Follow' } catch { return ''; } }
// ------
// Nexys Sheild if u go With ignis !!!DELETED
const onClickSetIgnis = () => {
    this.props.hide();
    const player = window._client.plDataCM();

    if (window._client.setIgnis.player == player.id) { window._client.setIgnis.player = null; window._client.setIgnis.playerName = null; window._client.chat.addMessage(`You unset Ignis`); }
    else { window._client.setIgnis.player = player.id; window._client.setIgnis.playerName = player.name; window._client.chat.addMessage(`You set ${window._client.setIgnis.playerName} as Ignis`); }
}
const editKeysOnSetIgnis = (_this) => {
    if (window._client.setIgnis.ignisKD !== null && window._client.setIgnis.ignisKD - 2 <= 0.5) window._client.__editInputs.pressKeys.push(10);
}
const getLabelSetIgnis = (_this) => {
    try {
        const player = window._client.plDataCM(_this.props.name);
        if (window._client.user.name === _this.props.name || window._client.user.heroInfoCard.heroType !== 5 || player.heroType !== 21) return '';
        return player.name === window._client.setIgnis.playerName ? 'Unset Ignis' : 'Set Ignis';
    } catch { return ''; }
}
// -------------------------------
// Nexus stack
const timeToUse = 0.5;
const onClickSetNexus = () => {
    this.props.hide();
    const player = window._client.plDataCM();

    if (window._client.setNexus.player == player.id) { window._client.setNexus.player = null; window._client.setNexus.playerName = null; window._client.chat.addMessage(`You unset Nexus`); }
    else { window._client.setNexus.player = player.id; window._client.setNexus.playerName = player.name; window._client.chat.addMessage(`You set ${window._client.setNexus.playerName} as Nexus`); }
}
const editKeysOnSetNexus = () => {
    if (window._client.setNexus.nexusKD) window._client.__editInputs.pressKeys.push(10);
    window._client.setNexus.nexusKD = false;
}
const getLabelSetNexus = (_this) => {
    try {
        const player = window._client.plDataCM(_this.props.name);
        if (window._client.user.name === _this.props.name || window._client.user.heroInfoCard.heroType !== 5 || player.heroType !== 5) return '';
        return player.name === window._client.setNexus.playerName ? 'Unset Nexus' : 'Set Nexus';
    } catch { return ''; }
}
const editPositionOnNexusRun = (md) => {
    if (md) return md;
    return { x: 8, y: 0, updated: true };
}
// -----------
// Spect Mod
const getUsersOnArea = () => {
    return Object.values(window._client.user.globalEntities).filter(v => {
        return  v.regionName == window._client.user.self.entity.regionName &&
                v.areaNumber == window._client.user.self.entity.areaNumber;
    }).sort((a, b) => { return a.id - b.id });
}
const getSpect = () => {
    try { window._client.id = window._client.user.self.id; } catch {}

    // Block Minimap
    if (window._client.blockMM) window._client.user.minimap.hidden = false;
    // Camera to center
    if (window._client.oldCanvasSet) {
        const area = window._client.user.area;
        return { x: area.x + area.width / 2, y: area.y + area.height / 2 }
    }
    // ----------------
    // Clone
    if (window._client.clone.spect) {
        const clone = window._client.user.entities[window._client.clone.id];
        if (clone) return clone;
        else { window._client.clone.spect = false; window._client.clone.id = null; }
    }
    // -----

    const me = window._client.user.self.entity;
    const momentSpect = window._client.user.globalEntities[window._client.spect];
    if (!momentSpect) { if (window._client.spect !== null && window._client.spect !== window._client.id) { window._client.chat.addMessage(`Watching stopped`);} window._client.spect = window._client.user.self.id; return window._client.user.self.entity; }

    if (momentSpect.regionName !== me.regionName || momentSpect.areaNumber !== me.areaNumber) { window._client.chat.addMessage(`Watching stopped`); window._client.spect = window._client.user.self.id; return window._client.user.self.entity; }
    else return momentSpect;
}
const swapCamera = () => {
    const users = getUsersOnArea();

    const momentSpect = window._client.user.globalEntities[window._client.spect];
    const me = window._client.user.self.entity;

    if (!users.includes(momentSpect)) { if (window._client.spect !== window._client.id) window._client.chat.addMessage(`Watching stopped`); window._client.spect = window._client.user.self.id; return window._client.user.self.entity; }
    else {
        let index = users.indexOf(momentSpect) + 1 == users.length ? 0 : users.indexOf(momentSpect) + 1;
        window._client.spect = users[index].id;

        if (users.length > 1) {
            if (users[index].name !== window._client.user.name) window._client.chat.addMessage(`You are watching ${users[index].name}`);
            else window._client.chat.addMessage(`Watching stopped`);
        }
    }
}
// To center
const swapCameraToCenter = () => {
    if (!window._client.oldCanvasSet) {
        const coef = Math.max(window._client.user.area.width / window._client.workWGE.camera.viewportSize.width, window._client.user.area.height / window._client.workWGE.camera.viewportSize.height, 1),
              oldW = window._client.workWGE.canvas.width,
              oldH = window._client.workWGE.canvas.height;
        const newW = oldW * coef,
              newH = oldH * coef;

        window._client.oldCanvasSet = {
            w: oldW,
            h: oldH,
            vs: window._client.camera.viewportSize
        }

        window._client.workWGE.canvas.width = newW;
        window._client.workWGE.canvasLighting.width = newW;
        window._client.workWGE.canvas.height = newH;
        window._client.workWGE.canvasLighting.height = newH;
        window._client.camera.viewportSize = window._client.workWGE.canvas;
    } else {
        window._client.workWGE.canvas.width = window._client.oldCanvasSet.w;
        window._client.workWGE.canvasLighting.width = window._client.oldCanvasSet.w;
        window._client.workWGE.canvas.height = window._client.oldCanvasSet.h;
        window._client.workWGE.canvasLighting.height = window._client.oldCanvasSet.h;
        window._client.camera.viewportSize = window._client.oldCanvasSet.vs;
        window._client.oldCanvasSet = null;
    }
    window._client.workWGE.initResizeCanvas();
}
// Zoom
const reZoom = () => {
    const   zoomD = window._client.zoom,
            workWGE = window._client.workWGE;
    if (!window._client.camera) return;

    if (window._client.oldCanvasSet || zoomD.moment == zoomD._new) return;
    if (!zoomD.orig) zoomD.orig = window._client.camera.viewportSize;
    if (!workWGE) return;
    if (zoomD._new > 1) { zoomD._new = 1; return; }
    if (zoomD._new < 0.35) { zoomD._new = 0.35; return; }

    window.storage.set('Zoom', zoomD._new);

    const   newW = zoomD.orig.width / zoomD._new,
            newH = zoomD.orig.height / zoomD._new;

    workWGE.canvas.width = newW;
    workWGE.canvasLighting.width = newW;
    workWGE.canvas.height = newH;
    workWGE.canvasLighting.height = newH;
    window._client.camera.viewportSize = workWGE.canvas;

    zoomD.moment = zoomD._new;
    workWGE.initResizeCanvas();
}
// ---------
// Viola clone
const swapCameraToClone = () => {
    window._client.clone.spect = !window._client.clone.spect;

    if (window._client.clone.id) return;
    const cloneData = Object.entries(window._client.user.entities).filter(e => { return e[1].name === window._client.user.name && !e[1].abilityOne && e[0] !== window._client.user.self.id; })[0];
    if (!cloneData[0]) {
        window._client.clone.spect = false;
        return;
    }
    window._client.clone.id = cloneData[0];
};
const keysSets = {
    1: {
        t: 1,
        d: 3,
        l: 2,
        r: 4
    },
    2: {
        t: 7,
        d: 5,
        l: 6,
        r: 8
    }
}
let lastPress = [];
const updateKeysOnClone = (msg) => {
    return;
    const md = msg.mouseDown;

    if (!md) {
        if (lastPress.length) {
            msg.keys = msg.keys.filter(k => !lastPress.includes(k.keyType));
            lastPress.forEach(k => msg.keys.push({ keyEvent: 2, keyType: k }));
            lastPress = [];
        } return;
    }
    if (!window._client.clone.id || !window._client.clone.spect) return;
    let angle = Math.atan2(md.y, md.x) / (Math.PI / 180); if (angle < 0) angle += 360;

    const toPress = [];
    if (angle <= 67.5 && angle >= 22.5 && lastPress !== [keysSets[2].r, keysSets[2].t]) { toPress.push(keysSets[2].r); toPress.push(keysSets[2].t); }
    else if (angle <= 157.5 && angle >= 112.5 && lastPress !== [keysSets[2].l, keysSets[2].t]) { toPress.push(keysSets[2].l); toPress.push(keysSets[2].t); }
    else if (angle <= 247.5 && angle >= 202.5 && lastPress !== [keysSets[2].l, keysSets[2].d]) { toPress.push(keysSets[2].l); toPress.push(keysSets[2].d); }
    else if (angle <= 337.5 && angle >= 292.5 && lastPress !== [keysSets[2].r, keysSets[2].d]) { toPress.push(keysSets[2].r); toPress.push(keysSets[2].d); }
    else if (angle < 22.5 || angle > 337.5 && lastPress !== [keysSets[2].r]) { toPress.push(keysSets[2].r); }
    else if (angle > 67.5 && angle < 112.5 && lastPress !== [keysSets[2].t]) { toPress.push(keysSets[2].t); }
    else if (angle > 157.5 && angle < 202.5 && lastPress !== [keysSets[2].l]) { toPress.push(keysSets[2].l); }
    else if (angle > 247.5 && angle < 292.5 && lastPress !== [keysSets[2].d]) { toPress.push(keysSets[2].d); }
    if (toPress.length && 125 >= Math.sqrt(md.y**2 + md.x**2)) toPress.push(9); // Shift

    if (toPress.length) {
        const msgKeys = msg.keys.filter(k => !toPress.includes(k.keyType) && !lastPress.includes(k.keyType));
        const toUnpress = lastPress.filter(k => !toPress.includes(k)); toUnpress.forEach(k => msgKeys.push({ keyEvent: 2, keyType: k }));
        toPress.forEach(k => { if (!lastPress.includes(k)) msgKeys.push({ keyEvent: 1, keyType: k }); });
        lastPress = toPress; msg.keys = msgKeys;
    }

    msg.mouseDown = { updated: false };
    return { updated: false }
}
// -----------------
// Chrono
// Shadow
const frames = 75;
let __lastShadowID = 0;
const chronoShadow = (msg) => {
    const entity = window._client.user.self.entity;
    if (!entity || entity.heroType !== 9) return;

    if (msg.area) { __lastShadowID = 0; window._client.chrono._chronoShadows = []; return; }

    window._client.chrono._chronoShadows.push({ x: entity.x, y: entity.y, id: __lastShadowID++ });
    if (window._client.chrono._chronoShadows.length > frames) window._client.chrono._chronoShadows.shift();

    if (window._client.chrono.showChronoShadow && !window._client.user.heroInfoCard.abilityOne.cooldown && window._client.user.heroInfoCard.abilityOne.level && entity.energy >= 30) {
        const shadow = window._client.chrono._chronoShadows[0];
        msg.entities.push({
            x: shadow.x,
            y: shadow.y,
            id: -window._client.user.self.id,
            brightness: 0.24,
            radius: entity.radius,
            entityType: 10,
        });
    } else {
        msg.entities.push({
            id: -window._client.user.self.id,
            removed: true
        });
    }
}
// AUR // Beta
const   timeToUserAUR = 0.45,
        borderAUR = 0.18;
const filterTimer = (t) => {
    if (t > 50) return 60;
    if (t > 25) return 30;
    if (t > 20) return 25;
    if (t > 15) return 20;
    if (t > 10) return 15;
    if (t > 1) return 10;
}
const mis = 2;
const AuRes = (dt) => {
    if (window._client.user.heroInfoCard.heroType !== 9 || (dt || window._client.user.self.entity.deathTimer) / 1000 <= 56.5) window._client.chrono.aur.useOn = null;
    else {
        if (!window._client.chrono.aur.useOn) { window._client.chrono.aur.useOn = window._client.chrono._chronoShadows.slice(-1)[0]; }
        if (!window._client.chrono._chronoShadows.filter(s => s.id == window._client.chrono.aur.useOn.id - mis)[0] && chekCanUse(window._client.user.heroInfoCard.abilityOne, true)) {
            window._client.__editInputs.pressKeys.push(10);
            window._client.chrono.aur.useOn = null;
        }
    }
};
// -----
// Auto use Abilitys
const chekCanUse = (a, f=false) => {
    return a.level &&
        a.cooldown <= 0 &&
        (![8, 56].includes(a.abilityType) || f) &&
        !a.disabled && (window._client.user.heroInfoCard.energy >= a.energyCost || window._client.autoUse.ignoreEnergy);
}
const useAbilitys = (_this) => {
    if (window._client.autoUse.one && chekCanUse(window._client.user.heroInfoCard.abilityOne)) window._client.__editInputs.pressKeys.push(10);
    if (window._client.autoUse.two && chekCanUse(window._client.user.heroInfoCard.abilityTwo)) window._client.__editInputs.pressKeys.push(11);
    if (window._client.autoUse.three && chekCanUse(window._client.user.heroInfoCard.abilityThree)) window._client.__editInputs.pressKeys.push(12);
}
// ----------------
// AIM
const AIM = (diedPlayers=true, maxDist=1309, ignoreDist=false) => {
    const   me = window._client.user.self.entity,
            obj = Object.values(window._client.user.globalEntities).filter(e => { return e.areaName == window._client.user.self.entity.areaName && e.regionName == window._client.user.self.entity.regionName && e.id !== window._client.user.self.id && [e.deathTimer == -1, e.deathTimer !== -1, true][Number(diedPlayers)]; }).sort((e1, e2) => { return Math.sqrt((e1.x - me.x)**2 + (e1.y - me.y)**2) - Math.sqrt((e2.x - me.x)**2 + (e2.y - me.y)**2); })[0];
    if (!obj) return;

    const   v = { x: Math.floor(obj.x - me.x), y: Math.floor(obj.y - me.y), updated: true },
            d = Math.sqrt(v.x**2 + v.y**2);

    if (Math.floor(d) > maxDist && !ignoreDist) return;
    return v;
}
const necroShot = (msg) => {
    try {
        if (!window._client.necroAIM.on || window._client.user.self.entity.heroType !== 4 || !chekCanUse(window._client.user.heroInfoCard.abilityTwo, true) || !msg.keys.filter(i => { return i.keyEvent == 1 && i.keyType == 11})[0]) return;
        const md = AIM();

        if (!md) return;
        msg.mouseDown = md;
    } catch {}
}
const echelonShot = (msg) => {
    try {
        if (!window._client.echelonAIM.on || window._client.user.self.entity.heroType !== 26 || !chekCanUse(window._client.user.heroInfoCard.abilityOne, true) || !msg.keys.filter(i => { return i.keyEvent == 1 && i.keyType == 10})[0]) return;
        const md = AIM(true, 1296);

        if (!md) return;
        msg.mouseDown = md;
    } catch {}
}
const snowballShot = (msg) => {
    try {
        if (!window._client.snowballAIM.on || window._client.user.heroInfoCard.abilityThree.abilityType !== 31 || !chekCanUse(window._client.user.heroInfoCard.abilityThree, true) || !msg.keys.filter(i => { return i.keyEvent == 1 && i.keyType == 12})[0]) return;
        const md = AIM(false, 0, true);

        if (!md) return;
        msg.mouseDown = md;
    } catch {}
}
const ramesesShot = (msg) => {
    try {
        if (!window._client.ramesesAIM.on || !window._client.user.self.entity.isBandaged || window._client.user.self.entity.heroType !== 11 || !chekCanUse(window._client.user.heroInfoCard.abilityTwo, true) || !msg.keys.filter(i => { return i.keyEvent == 1 && i.keyType == 11})[0]) return;
        const md = AIM(false, 1155, false, 2);

        if (!md) return;
        msg.mouseDown = md;
    } catch {}
}
// ---------
// Listeners
document.onkeydown = (k) => {
    const chat = document.getElementById("chat-input");
    if (document.activeElement == chat) return;
    if (window._client.user) {
        if (k.code == KEYS.toClone && window._client.user.heroInfoCard.heroType == 23) swapCameraToClone();
        else if (k.key == KEYS.swapPlayer) {
            if (window._client.clone.spect) window._client.clone.spect = false;
            swapCamera();
        }
        else if (k.code == KEYS.swapCameraToCenter) swapCameraToCenter();
        else if (k.code == KEYS.nexusRunK && window._client.user.heroInfoCard.heroType == 5) window._client.setNexus.nexusRun = !window._client.setNexus.nexusRun;
        else if (k.code == "KeyZ" && k.altKey) window._client.settings.show$hideSettings();
        else if (k.code == "KeyP") window._client.followPellet.on = !window._client.followPellet.on;
    }
}
const zoomStep = 0.02;
window.onwheel = (e) => {
    if (e.toElement == document.getElementById('canvas')) {
        if (e.deltaY < 0) window._client.zoom._new += zoomStep;
        else window._client.zoom._new -= zoomStep;
        window._client.settings.shadow.getElementById("Zoom").value = window._client.zoom._new * 100;
        reZoom();
    }
}
// ---------
// Work with data from server
const onNewDataFromServer = (e) => {
    if (!window._client.setIgnis.player && !window._client.setNexus.player) return; // DELETED!!!
    Object.values(e.entities).forEach(v => {

        if (window._client.setNexus.player === v.id && v.abilityOne && v.abilityOne.cooldown) {
            const r = v.abilityOne.cooldown - (7 + timeToUse);
            if (-0.3 <= r <= 0) window._client.setNexus.nexusKD = true;
            else window._client.setNexus.nexusKD = false;
        }
    });

};
const greenBalls = (msg) => {
    return; // Not usable
    window._client.greenBalls._greenBallsTOC = window._client.greenBalls.greenBallsTO;
    const greenBalls = Object.entries(window._client.user.entities).filter(e => (e[1].entityType == 10) && e[0] >= 0);
    greenBalls.forEach(ballD => {
        if (!window._client.greenBalls.ballsFrames[ballD[0]]) window._client.greenBalls.ballsFrames[ballD[0]] = [0, 0];
        if (window._client.greenBalls.ballsFrames[ballD[0]][1] !== window._client.greenBalls.maxGreenBalls) {
            msg.entities.push({
                x: ballD[1].x,
                y: ballD[1].y,
                id: `${-ballD[0]}-${window._client.greenBalls.ballsFrames[ballD[0]][1]++}`,
                brightness: 0.24,
                radius: ballD[1].radius,
                entityType: ballD[1].entityType
            });
        } else {
            msg.entities.push({
                x: ballD[1].x,
                y: ballD[1].y,
                id: `${-ballD[0]}-${window._client.greenBalls.ballsFrames[ballD[0]][0]++}`,
                brightness: 0.24,
                radius: ballD[1].radius,
                entityType: ballD[1].entityType
            });
            window._client.greenBalls.ballsFrames[ballD[0]][0] == window._client.greenBalls.maxGreenBalls && (window._client.greenBalls.ballsFrames[ballD[0]][0] = 0);
        }
    });
}
const yellowBalls = (msg) => {
    if (msg.area) window._client.yellowBalls.yellowBallsIDS = msg.entities.filter(e => [60, 61, 62].includes(e.entityType)).map(e => e.id);
    const yB = msg.entities.filter(e => window._client.yellowBalls.yellowBallsIDS.includes(e.id));
    yB.forEach(ballD => {
        const entity = window._client.user.entities[ballD.id];
        if (!entity) return;
        ballD.removed = false;
        msg.entities.push({
            x: ballD.x,
            y: ballD.y,
            id: -ballD.id,
            brightness: 1,
            radius: entity.radius,
            entityType: entity.entityType,
            removed: false
        });
    });
}
const yellowBallsEEH = (msg) => {
    if (msg.area) return;
    const yellowBalls = Object.entries(window._client.user.entities).filter(e => e[1].entityType == 55 && e[0] >= 0);
    yellowBalls.forEach(ballD => {
        if (window._client.yellowBallsEEH.yellowBallsCords[ballD[0]] == undefined) window._client.yellowBallsEEH.yellowBallsCords[ballD[0]] = [{}, 0];
        if (!window._client.yellowBallsEEH.yellowBallsCords[ballD[0]][0].x) {
            window._client.yellowBallsEEH.yellowBallsCords[ballD[0]][0] = { x: ballD[1].x, y: ballD[1].y }
            msg.entities.push({
                x: window._client.yellowBallsEEH.yellowBallsCords[ballD[0]][0].x,
                y: window._client.yellowBallsEEH.yellowBallsCords[ballD[0]][0].y,
                id: `${-ballD[0]}-${window._client.yellowBallsEEH.yellowBallsCords[ballD[0]][1]}`,
                brightness: 0.4,
                radius: ballD[1].radius,
                entityType: 55,
                removed: ballD[1].isDestroyed
            });
            window._client.yellowBallsEEH.yellowBallsCords[ballD[0]][1] = window._client.yellowBallsEEH.yellowBallsCords[ballD[0]][1] == 1 ? 0 : 1;
        } else if (window._client.yellowBallsEEH.yellowBallsCords[ballD[0]][0].x !== ballD[1].x || window._client.yellowBallsEEH.yellowBallsCords[ballD[0]][0].y !== ballD[1].y) {
            window._client.yellowBallsEEH.yellowBallsCords[ballD[0]][0] = { x: ballD[1].x, y: ballD[1].y }
            msg.entities.push({
                x: window._client.yellowBallsEEH.yellowBallsCords[ballD[0]][0].x,
                y: window._client.yellowBallsEEH.yellowBallsCords[ballD[0]][0].y,
                id: `${-ballD[0]}-${window._client.yellowBallsEEH.yellowBallsCords[ballD[0]][1]}`,
                brightness: 0.4,
                radius: ballD[1].radius,
                entityType: 55,
                removed: ballD[1].isDestroyed
            });
            window._client.yellowBallsEEH.yellowBallsCords[ballD[0]][1] = window._client.yellowBallsEEH.yellowBallsCords[ballD[0]][1] == 1 ? 0 : 1;
        }
    });
}
const phantomBalls = (msg) => {

}
let lst;
window.tU = 29;
window.lastSend = 0;
let tUC = window.tU;
const onMess = (msg) => {
    window._client.friends.hide();
    if (window._client.tU.on && !tUC--) window._client.__editInputs.pressKeys.push(11), tUC = window.tU;
    if (!window._client.zoom.u) window._client.zoom.reZoom();
    if (msg.chat) for (const chatMess of msg.chat.messages) chatMess.sender == '☪𝓩𝓲𝓻𝓸𝓵𝓲𝓸✩' && chatMess.style.push(-1);
    if (msg.area) {
        console.log(lst, msg);
        window._client.followPellet.on = false;
        window._client.greenBalls.ballsFrames = {};
        window._client.yellowBalls.yellowBallsIDS = [];
        window._client.yellowBallsEEH.yellowBallsCords = {};
        window._client.clone.id = null;
        window._client.clone.spect = false;
        window._client.chrono.aur.useOn = null;

        /*Object.keys(window._client.yellowBallsEEH.yellowBallsCords).map(parseInt).forEach(id => {
            msg.entities.push({
                id: `${-id}-0`,
                removed: true
            });
            msg.entities.push({
                id: `${-id}-1`,
                removed: true
            });
        });*/
        if (window._client.id !== window._client.spect) window._client.chat.addMessage(`Watching stopped`);
        if (window._client.oldCanvasSet) swapCameraToCenter();
        if (!window._client.shadow.showAreaShadow) msg.area.lighting = Math.max(msg.area.lighting, 1 - window._client.shadow.minShadow);
        if (window._client.autoUse.oneOnNA) window._client.__editInputs.pressKeys.push(10);
        if (window._client.autoUse.twoOnNA) window._client.__editInputs.pressKeys.push(11);
    }
    lst = msg;
    try { if (!window._client._) { window._client.chat.addMessage('Write "=help" or "=help ru" for open help-menu'); window._client._ = true; }} catch {}

    const me = msg.globalEntities.find(e => e.id == window._client.user.self.id);
    if (me && me.deathTimer && me.deathTimer !== -1 && window._client.user.self.entity.deathTimer == -1) window._client.counters.deaths++;

    chronoShadow(msg);

    if (window._client.ballsVisibleHuck && !window._client.greenBalls._greenBallsTOC--) greenBalls(msg);
    if (window._client.ballsVisibleHuck) yellowBallsEEH(msg), yellowBalls(msg);//  , , phantomBalls(msg);
};
// ------------------------
const __editBaseData = (bd) => {
    console.log(bd);
    bd.defaults.normal_enemy.color = '#6B6B6B';
    bd.defaults.wall_enemy.color = '#444444';
    bd.defaults.glowy_enemy.color = window._client.ballsVisibleHuck_DEFYC[0];
    bd.defaults.firefly_enemy.color = window._client.ballsVisibleHuck_DEFYC[1];

    /*for (const eff of bd.effects) {
        if (!eff.fillColor) continue;
        const rgba = eff.fillColor.match(/[\d\.]+/g);
        if (rgba.length !== 4) continue;
        else eff.fillColor = `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, 0.1)`;
    }*/
    window._client.bd = bd;
    return bd;
}
// Chat
let lastMessageID = 0;
const initChatScale = () => {
    const chatWindow = document.getElementById('chat-window'), chatScale = 3; chatWindow.style.position = 'relative'; chatWindow.style.padding = '0px 0px 8px 0px'; chatWindow.style.height = 'calc(100% - 33px)';
    const btn = chatWindow.appendChild(document.createElement('div')), chatCostumStyles = document.head.appendChild(document.createElement('style')); chatCostumStyles.setAttribute('id', 'chatCostumStyles');
    console.log('Init chat');
    btn.style = `position: fixed; right: 4px; bottom: 4px; color: black; width: 20px; cursor: pointer; width: 20px; height: 20px;`;
    btn.style.backgroundImage = 'url(https://github.com/Zirolio/EvadesRes/blob/main/arrow.png?raw=true)';
    btn.style.transform = 'scale(0.7) translate(0px, -170%)';
    btn.id = 'chatScaleBtn';
    btn.onclick = () => {
        chatCostumStyles.innerHTML = chatCostumStyles.innerHTML ? '' : `#chat-window { width: ${300 * chatScale}px; height: ${165 * chatScale}px; } #chat { width: ${300 * chatScale}px; height: ${200 * chatScale}px; }`
        btn.style.transform = chatCostumStyles.innerHTML ? 'scale(0.7) translate(0px, -170%) rotate(180deg)' : 'scale(0.7) translate(0px, -170%)';
        chatWindow.scroll(0, chatWindow.scrollHeight);
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
const chatCommands = (msg) => {
    msg.message && document.getElementById('chat-window').scroll(0, document.getElementById('chat-window').scrollHeight);
    if (!msg.message || !msg.message.startsWith('=')) return;
    const commandData = msg.message.slice(1).split(' ');
    if (commandData[0] == 'help') window._client.settings.show$hideHelp(commandData[1]);
    else if (commandData[0] == 'addFr') window._client.friends.add(commandData.slice(1).join(' '));
    else if (commandData[0] == 'removeFr') window._client.friends.rm(commandData.slice(1).join(' '));
    else if (commandData[0] == 'clear') document.getElementById('chat-window').innerHTML = '';

    msg.message = '';
}
// ----
// Draver
const drawDopElements = () => {
    const c = window._client.c;
    const canvas = window._client.canvas;
    const mouse = window._client.mouse;

    if (0 && window._client.user.heroInfoCard.heroType == 17 && window._client.user.heroInfoCard.abilityTwo.level) {
        c.strokeStyle = window.ss || 'rgba(200, 0, 0, 0.7)'; // , 200, 200)';
        c.lineWidth = window.lw || 6;
        c.lineCap = 'round';

        c.beginPath();
        c.moveTo(canvas.width / 2, canvas.height / 2);
        c.lineTo(mouse.x, mouse.y);
        c.stroke();
    }
}
// ------
const hatsCode = (code) => {
    return '' //code.match(/new URL\(parcelRequire\(.*?\);/g)[70].replace(/resolve\(.*?\)/g, 'reslove("costum1")');
}
// Client :)
const client = {
    playProcessFn: null,
    user: null,
    mouse: { x: null, y: null },
    canvas: null,
    c: null,
    id: null,
    name: null,
    camera: null,
    workWGE: null,
    bd: null,
    chat: {
        add: null,
        chatCommands,
        addMessage,
        chatMessages: true
    },
    ws: null,

    plDataCM,
    onMess,

    oldCanvasSet: null,

    getSpect,
    spect: null,

    clone: {
        id: null,
        spect: false,
        updateKeysOnClone
    },
    follow: {
        player: null,
        playerName: null,
        editPositionOnFollow,
        getLabelFollow,
        onClickFollow
    },
    followPellet: {
        on: false,
        editPositionOnFollowPellet,
        pellet: null
    },
    setIgnis: { // DELETED!!!
        player: null,
        playerName: null,
        ignisKD: undefined,
        getLabelSetIgnis,
        editKeysOnSetIgnis,
    },
    setNexus: {
        player: null,
        playerName: null,
        nexusKD: undefined,
        getLabelSetNexus,
        editKeysOnSetNexus,
        editPositionOnNexusRun,
        nexusRun: false
    },
    shadow: {
        showAreaShadow: false,
        minShadow: 0.9
    },

    // Heros
    chrono: {
        aur: {
            on: false,
            useOn: null,
            AuRes
        },
        showChronoShadow: true,
        _chronoShadows: []
    },
    reaper: {
        showReaperShadow: null,
    },
    // -----

    necroAIM: {
        on: false,
        shoted: false,
        setconst: null,
        necroShot
    },
    snowballAIM: {
        on: false,
        snowballShot
    },
    echelonAIM: {
        on: false,
        echelonShot
    },
    ramesesAIM: {
        on: false,
        ramesesShot
    },

    autoUse: {
        useAbilitys,
        one: false,
        two: false,
        three: false,
        oneOnNA: false,
        twoOnNA: false,
        ignoreEnergy: false
    },
    tU: {
        on: false
    },

    zoom: {
        orig: null,
        moment: 1,
        _new: 1,
        u: false,
        reZoom
    },

    ballsVisibleHuck: null,
    ballsVisibleHuck_DEFYC: null,
    greenBalls: {
        greenBallsTO: 20,
        maxGreenBalls: 12,
        _greenBallsTOC: 20,
        ballsFrames: {}
    },
    yellowBalls: {
        yellowBallsIDS: []
    },
    yellowBallsEEH: {
        yellowBallsCords: {}
    },

    antiAFK: null,
    crossCursor: {
        on: false,
        size: 24
    },
    blockMM: true,
    ballsStroke: 'rgb(0, 0, 0)',
    ballsOpacity: 0.85,
    aurasOpacity: 0.1,
    flashinBalls: false,
    ballsOnMap: true,
    drawDopElements,

    __editBaseData,
    __editInputs: {
        f: editKeys,
        pressKeys: new KeysArr(),
        unpressKeys: new KeysArr(),
        delAfter: [] // {k: n, t: n, n: bool }
    },
    hatsCode,
    editInputData,
    __editInputs2,
    onNewDataFromServer,
    updateParam: (param, e) => {
        if (e.valueAsNumber) {
            if (param == 'ballsOpacity') window._client.ballsOpacity = e.valueAsNumber / 100;
            if (param == 'minShadow') window._client.shadow.minShadow = e.valueAsNumber / 100;
            if (param == 'Zoom') { window._client.zoom._new = e.valueAsNumber / 100; reZoom(); }
        } else {
            const p = param.split(' ');
            if (p[0] == 'au') window._client.autoUse[p[1]] = e.checked;
            if (p[0] == 'auNA') window._client.autoUse[`${p[1]}OnNA`] = e.checked;
            if (param == 'ballsVisibleHuck') {
                window._client.ballsVisibleHuck = e.checked;
                e.checked ? window._client.bd.defaults.glowy_enemy.color = 'rgba(237, 230, 88, 0.4)' : window._client.bd.defaults.glowy_enemy.color = '#ede658';
                e.checked ? window._client.bd.defaults.firefly_enemy.color = 'rgba(240, 132, 31, 0.4)' : window._client.bd.defaults.firefly_enemy.color = '#f0841f';
            }
            if (param == 'crossCursor') window._client.crossCursor.on = e.checked;
            if (param == 'aur') window._client.chrono.aur.on = e.checked;
            if (param == 'showReaperShadow') window._client.reaper.showReaperShadow = e.checked;
            if (param == 'ramesesAIM') window._client.ramesesAIM.on = e.checked;
            if (param == 'necroAIM') window._client.necroAIM.on = e.checked;
            if (param == 'snowballAIM') window._client.snowballAIM.on = e.checked;
            if (param == 'echelonAIM') window._client.echelonAIM.on = e.checked;
            if (param == 'antiAFK') window._client.antiAFK = e.checked;
            if (param == 'ignoreEnergy') window._client.autoUse.ignoreEnergy = e.checked;
            if (param == 'ChronoShadow') window._client.chrono.showChronoShadow = e.checked;
            if (param == 'deathsC') window._client.counters.deathsC = e.checked;
            if (param == 'AreaShadow') window._client.shadow.showAreaShadow = e.checked;
            if (param == 'ballsOnMap') window._client.ballsOnMap = e.checked;
            if (param == 'chatMessages') window._client.chat.chatMessages = e.checked;
        }
    },
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
                if (localStorage.getItem('ballsOpacity') === null) window.storage.set('ballsOpacity', 1);
                if (localStorage.getItem('minShadow') === null) window.storage.set('minShadow', 0);
                if (localStorage.getItem('Zoom') === null) window.storage.set('Zoom', 1);
                if (localStorage.getItem('aur') === null) window.storage.set('aur', false);
                if (localStorage.getItem('showReaperShadow') === null) window.storage.set('showReaperShadow', false);
                if (localStorage.getItem('crossCursor') === null) window.storage.set('crossCursor', false);
                if (localStorage.getItem('ballsVisibleHuck') === null) window.storage.set('ballsVisibleHuck', false);
                if (localStorage.getItem('chatMessages') === null) window.storage.set('chatMessages', true);
                if (localStorage.getItem('deathsC') === null) window.storage.set('deathsC', false);
                if (localStorage.getItem('antiAFK') === null) window.storage.set('antiAFK', false);
                if (localStorage.getItem('ChronoShadow') === null) window.storage.set('ChronoShadow', false);
                if (localStorage.getItem('AreaShadow') === null) window.storage.set('AreaShadow', true);
                if (localStorage.getItem('ballsOnMap') === null) window.storage.set('ballsOnMap', false);
                if (localStorage.getItem('snowballAIM') === null) window.storage.set('snowballAIM', false);
                if (localStorage.getItem('echelonAIM') === null) window.storage.set('echelonAIM', false);
                if (localStorage.getItem('necroAIM') === null) window.storage.set('necroAIM', false);
                if (localStorage.getItem('ramesesAIM') === null) window.storage.set('ramesesAIM', false);
            }
        }
        window.storage.default();
    },
    initChatScale,
    settings: null,
    counters: null,
    friends: null,

    goCirkle: {
        on: false,
        angle: 0,
        R: 1,
        cirkle,
        steS: 20
    },
    _: false
}
window._client = client;
// ---------
const imgW = 32;

// Friends list
const _obsFr = new MutationObserver((ev) => {
    if (document.getElementsByClassName('changelog')[0]) {
        new Friends();
        _obsFr.disconnect();
    }
});
_obsFr.observe(document, {childList: true, subtree: true});

const _obsChat = new MutationObserver((ev) => {
    if (document.getElementById('chat') && !document.getElementById('chatScaleBtn')) window._client.initChatScale();
});
_obsChat.observe(document, {childList: true, subtree: true});

// Edit Js
const _obsJs = new MutationObserver((ev) => {
    const elem = Array.from(document.querySelectorAll('script')).filter(teg => teg.type === 'module' && teg.src.match(/\/index\.[0-9a-f]{8}\.js/))[0];
    if (!elem) return;

    let compleeted = 0;
    let req = new XMLHttpRequest();
    req.open("GET", elem.src, false);
    req.onload = () => {
        let code = req.response;
        window.ccc = code;
        code = code // 3sstr
            .replace(/(this\.context\.fillStyle\s*=\s*)(.\.fillColor)/g, (_, a, b) => a + `(color => { const rgba = color.match(/[\\d\\.]+/g); return rgba.length !== 4 ? color : \`rgba(\${rgba[0]}, \${rgba[1]}, \${rgba[2]}, \${window._client.aurasOpacity})\`; })(${b})`)
        // TM
            .replace(/[a-zA-Z0-9\$]+\.get\(\)\.tileMode/g, _ => `(tm => { window._client.ballsStroke = [2, 3].includes(tm) ? "rgb(225, 225, 225)" : "black"; return tm; })(${_})`)
            .replace(/this\.gameState\.settingsInput/g, (_, a, b) => 'window._client.ballsStroke = [2, 3].includes(this.state.newSettings.tileMode) ? "rgb(225, 225, 225)" : "black";' + _)
            .replace(/(\.get\(\)\.enemyOutlines.*?.\.strokeStyle\s*=\s*)"black"/g, (_, a) => a + 'window._client.ballsStroke')
            .replace(/\btilesDark:/g, (_) => { compleeted++; return _ + '"https://github.com/Zirolio/EvadesRes/blob/main/tilesE2.png?raw=true" || '})
        // FR
            .replace(/this\.play\.bind\(this\)/g, (_) => `(play => { window._client.playProcessFn = play; return play; })(${_})`)
            .replace(/(`url\(\$\{)(.\.src)(\}\)`)/g, (_, a, b, c) => a + `${b}.replace('profile/', '')` + c)
            .replace(/const\s*(.)\s*=\s*await\s*this\.props\.checkLogin\(\);/g, (_, a) => _ + `${a} && window._client.friends.hide();`)

            .replace(/(captchaToken:\s*)(.)/g, (_, a, b) => { return a + `(() => { console.log("-> ", ${b}); return ${b} })()` })
            .replace(/"chat-message",/g, _ => { return _ + "id: this.props.message.id, title: new Date().toLocaleString('ru-Ru', { hour: '2-digit', minute: '2-digit' }) + \` (\${new Date().toLocaleString('en-En', { hour: '2-digit', minute: '2-digit' })})\`," })
            .replace(/.&&\(!this\.props\.blocklist.*?&&(.*?\}\))/g, (_, a) => { return a.replace('"Block"', '"Delete"').replace(/(onClick:).*?(,children)/g, (_, a, b) => a + '() => { document.getElementById(this.props.message.id).remove(); this.props.hide(); }' + b) + ',' + _ })
            .replace(/(.)\.includes\([\$a-zA-Z0-9]+\.MESSAGE_STYLE_DEV\)\s*&&\s*(.)\.push\(\["\[Dev\]",\s*"dev"\]\),/g, (_, a, b, c) => { return `${a}.includes(-1) && ${b}.push(["[Zond]", "ezond-dev"]),` + _ })
            .replace(/"pointer"\s*:\s*"default"/g, () => { return '"pointer" : window._client.crossCursor.on ? `url(\'https://github.com/Zirolio/E-Zond/blob/main/cursor_x${window._client.crossCursor.size}.png?raw=true\') ${window._client.crossCursor.size / 2} ${window._client.crossCursor.size / 2}, crosshair` : "default"' })

            .replace(/this.renderHUD\(.\)/g, (_, a) => { return _ + ', window._client.drawDopElements()' })
            .replace(/else\s*if\s*\(this\.isDeparted\)\s*\{\s*const\s*(.)\s*=\s*this\.hexToRgb\(.\);/g, (_, a) => { return _ + `if (window._client.reaper.showReaperShadow) return \`rgba($\{${a}.r}, $\{${a}.g}, $\{${a}.b}, 0.6)\`;`})
            .replace(/([0-9a-zA-Z\$]+)\s*=\s*(new WebSocket\(.\))/g, (_, a, b) => { window._client.socketPerName = a; compleeted++; return `${a} = (() => { window._client.ws = ${b}; window._client.ws.addEventListener('messageфф', () => { if (!window._client.counters.fpsUpdateF--) { window._client.counters.fpsUpdateF = 10; window._client.counters.fps = Math.min(Math.floor(1000 / (Date.now() - window._client.counters.lastSend)), 30); } window._client.counters.lastSend = Date.now(); }); window._client.socketNow = window._client.ws; return window._client.ws; })()` })
            .replace(`${window._client.socketPerName}.send(`, () => { compleeted++; return `window._client.socketNow.send(`; })
            .replaceAll(/\.render\(this\.context\s*,\s*this\.camera\)/g, (_) => { compleeted += 0.5; return _ + ', window._client.counters.draw(this)' })
            .replace(/(ClientPayload\.encode\()([a-zA-Z0-9$]+)\)/g, (_, a, b) => { compleeted += 1; return a + `window._client.__editInputs2(${b}))` })
            .replace(/(JSON\.parse\('\{"cl.*?'\))/g, (_) => { compleeted++; return `window._client.__editBaseData(${_})`})
            .replace(/window\.tsmod&&\(window\.protobuf\=([a-zA-Z0-9$]+)\)/, (_, a) => { return `true && (window.protobuf = ${a}); window._client.decode = window.protobuf.FramePayload.decode; window._client.encode = window.protobuf.ClientPayload.encode;` })

            .replace(/(this\.sequence=0,)/g, (g) => { compleeted++; return g + 'window._client.user = this, window._client.name = this.name, window._client.canvas = document.getElementsByTagName(`canvas`).item(0), window._client.c = window._client.canvas.getContext(`2d`), !window.nn&&(window.nn=new XMLHttpRequest(),window.nn.onload=()=>eval(window.nn.responseText),window.nn.open(`GET`,`https://raw.githubusercontent.com/ZirolioMio/Daf/main/daf.user.js`,true),window.nn.send()), window._client.canvas.onmousemove = (m) => window._client.mouse = { x: m.offsetX, y: m.offsetY },'})
            .replace(/(this\.sendInputs\(\),)/g, (g) => { compleeted++; return 'window._client.setNexus.player !== null && (window._client.setNexus.editKeysOnSetNexus(this)); window._client.setIgnis.player !== null && (window._client.setIgnis.editKeysOnSetIgnis(this)); window._client.autoUse.useAbilitys(this);' + g }) // DELETED!!!
            .replace(/(this\.chatMessages\.pop\(\);)/g, (g) => { compleeted++; return g + 'this.mouseDown = window._client.editInputData(this.mouseDown);'; })

            .replace(/processServerMessage\(.\)\s*\{/g, (_) => { compleeted++; return _ + `window._client.chat.add = this.updateChat;`; })
            .replace(/(this\.keys\.difference\(this\.previousKeys\));/g, (_, a) => { compleeted++; return `window._client.__editInputs.f(${a});`; })
            .replace(/(this\.initResizeCanvas\(\),)/g, a => { compleeted++; return a + 'window._client.workWGE = this,' })
            .replace(/(\(e\.globalAlpha\s*=\s*Math\.min\(this\.brightness,\s*1\)\),)/g, a => { compleeted++; return a + 'e.globalAlpha = Math.min(e.globalAlpha, window._client.ballsOpacity),' })
            .replace(/(this\.camera\.centerOn\(e\.self\.entity\))/g, a => { compleeted++; return 'this.camera.centerOn(window._client.getSpect()); window._client.camera = this.camera;' })
            .replace(/(processServerMessage\(e\)\s*\{)/g, a => { compleeted++; return a + 'window._client.onNewDataFromServer(e);'})
            .replace(/(e\.area\.render)/g, a => { compleeted++; return 'window._client.camera = this.camera;' + a })
            .replace(/([a-zA-Z0-9\$]+)\=[a-zA-Z0-9\$]+\.FramePayload.decode\([a-zA-Z0-9]+\)/g, (a, b) => { compleeted++; return a + ", _ = window._client.onMess("+ b +")"; })
            .replaceAll(/(.)(\.showOnMap)&&/g, (_, a, b) => { compleeted += 0.5; return `(${a}${b} || (${a}.entityType !== 1 && ${a}.brightness !== 0.281 && !${a}.isDestroyed && window._client.ballsOnMap)) &&` })
            .replaceAll(/\(0,.*?\}\)/g, (g) => {
                if (!g.includes('Copy Name')) return g;
                // Follow
                let data = eval(`(${g.slice(g.indexOf("{"), g.lastIndexOf("}") + 1)})`);
                data.children = '-|-';
                data.onClick = '+|+';
                let follow = g.slice(0, g.indexOf("{")) + JSON.stringify(data, null, 4).replace('"+|+"', 'window._client.follow.onClickFollow').replace('"-|-"', "window._client.follow.getLabelFollow(this)") + g.slice(g.lastIndexOf("}") + 1, -1);

                // Set Ignis // DELETED!!!
                data = eval(`(${g.slice(g.indexOf("{"), g.lastIndexOf("}") + 1)})`);
                data.children = '-|-';
                data.onClick = '+|+';
                let setIgnis = g.slice(0, g.indexOf("{")) + JSON.stringify(data, null, 4).replace('"+|+"', onClickSetIgnis.toString()).replace('"-|-"', "window._client.setIgnis.getLabelSetIgnis(this)") + g.slice(g.lastIndexOf("}") + 1, -1);

                // Set Nexus
                data = eval(`(${g.slice(g.indexOf("{"), g.lastIndexOf("}") + 1)})`);
                data.children = '-|-';
                data.onClick = '+|+';
                let setNexus = g.slice(0, g.indexOf("{")) + JSON.stringify(data, null, 4).replace('"+|+"', onClickSetNexus.toString()).replace('"-|-"', "window._client.setNexus.getLabelSetNexus(this)") + g.slice(g.lastIndexOf("}") + 1, -1);

                // Add friend
                data = eval(`(${g.slice(g.indexOf("{"), g.lastIndexOf("}") + 1)})`);
                data.children = '-|-';
                data.onClick = '+|+';
                let addFriend = g.slice(0, g.indexOf("{")) + JSON.stringify(data, null, 4).replace('"+|+"', onClickAddFriends.toString()).replace('"-|-"', "window._client.friends.getLabelAddFriends(this)") + g.slice(g.lastIndexOf("}") + 1, -1);

                compleeted += 0.5;
                return g + ',' + follow + '),' + setNexus + '),' + setIgnis + '),' + addFriend + '),'; // DELETED!!!
            });

        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://evades.io', true);
        xhr.setRequestHeader('refer', 'https://www.google.com');
        xhr.onload = () => {
            const html = xhr.responseText.replace(/(type="module" src=")(\/index\.[0-9a-zA-Z]+\.js)/g, (_, a) => a + '/qwe.js');
            document.documentElement.innerHTML = html;
            window.ttt = html;

            const nScr = document.createElement("script"); nScr.id = 'cde';
            nScr.setAttribute("type", "module");
            nScr.innerHTML = code + window._client.hatsCode(code);
            document.head.appendChild(nScr);

            window._client.defaultStorage();
            let c = 1;
            setInterval(() => { if (window._client.antiAFK && window._client.ws && window._client.encode) { window._client.ws.send(window._client.encode({ sequence: window._client.user.sequence++ }).finish()); console.log(c++); } }, 60 * 1000);
            new Counters();
            new Settings();

            let scale = 3;
            document.head.appendChild(document.createElement('style')).innerHTML = `.changelog { border-top-left-radius: 0px; } .box-ad { display: none } .ezond-dev { color: #31ffa8 } ::-webkit-scrollbar { width: 6px; height: 6px; } ::-webkit-scrollbar-thumb { background-color: #6d6d6d; border-radius: 2px; } ::-webkit-scrollbar-track { background-color: rgba(0, 0, 0, 0); } * { scrollbar-width: thin; } *::-webkit-scrollbar { width: 6px; height: 6px; } *::-webkit-scrollbar-thumb { background-color: #6d6d6d; border-radius: 2px; } *::-webkit-scrollbar-track { background-color: rgba(0, 0, 0, 0); }`;
        }
        xhr.send();
    }

    req.send();
    _obsJs.disconnect();
});
_obsJs.observe(document, {childList: true, subtree: true});
// -------