import { client } from "../main";
import { ChatMessage } from "../scriptFunctions/chat";
import { HTML_CSS_VERSION } from "./constants";
import FRIENDS_CSS from "../../dist/main.css?raw";
import FRIENDS_HTML from "../../dist/friends.html?raw";

export class Friends {
    public stop: boolean = false;
    private shadow!: ShadowRoot;
    private frListContainer!: HTMLDivElement;
    private frList!: HTMLDivElement;
    private changelog!: HTMLDivElement;
    private changeBtn!: HTMLButtonElement;

    constructor() {
        if (client.friends) client.friends.stop = true;
        client.friends = this;
        this.createFriendsList();
    }

    onlineController(name: string, server: string, add: boolean = true) {
        if (this.stop) return;
        const plb = this.shadow.getElementById(`${name}-online`);

        if (!add) plb && plb.remove();
        else if (!plb) {
            const ct = document.createElement('div');
            ct.className = 'px-3 pb-[0.5px] mb-1 flex justify-between border-b border-solid border-[#333] rounded-md last:border-none';
            ct.id = `${name}-online`;
            ct.innerHTML = `<a href="https://evades.io/profile/${name}" class="hover:underline" target="_blank">${name}</a><span class="text-[hsl(172,69%,55%)] hover:text-[hsl(172,69%,36%)] hover:underline underline-offset-2 cursor-pointer" onclick="window._client.playProcessFn('https://${server.toLocaleLowerCase().slice(0, 2) == 'na' ? '' : 'eu.'}evades.io', ${parseInt(server.toLocaleLowerCase().slice(2)) - 1}, 0)">${server}</span>`;
            this.shadow.getElementById('online')!.appendChild(ct);
        }
    }

    offlineController(name: string, add: boolean = true) {
        if (this.stop) return;
        const plb = this.shadow.getElementById(`${name}-offline`);

        if (!add) plb && plb.remove();
        else if (!plb) {
            const ct = document.createElement('div');
            ct.className = 'px-3 pb-[0.5px] mb-1 flex justify-between border-b border-solid border-[#333] rounded-md last:border-none';
            ct.id = `${name}-offline`;
            ct.innerHTML = `<a href="https://evades.io/profile/${name}" class="hover:underline" target="_blank">${name}</a>`;
            this.shadow.getElementById('offline')!.appendChild(ct);
        }
    }

    async update() {
        if (this.stop) return;
        if (!client.user) {
            const onlinePl = await this.getConnectedPlayers(), friends = client.storage.get('friends', 'JSON');
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
        styles.innerHTML = FRIENDS_CSS;
        this.shadow.appendChild(styles);
    }

    async createFriendsList() {
        const frListContainer = document.createElement('div')!; this.frListContainer = frListContainer;
        frListContainer.id = 'frList__';
        // const changeBtnCtn = document.createElement('div');
        // this.btnShadow = changeBtnCtn.attachShadow({ mode: 'open' });
        this.shadow = frListContainer.attachShadow({ mode: 'open' });
        await this.createStyles();

        this.changelog = document.getElementsByClassName('changelog')[0] as HTMLDivElement
        const parent = this.changelog.parentNode!;

        // const changeBtn = document.createElement("button"); changeBtn.id = "changeChlFr";
        this.changeBtn = new DOMParser().parseFromString(FRIENDS_HTML, 'text/html').getElementById('changeChlFr') as HTMLButtonElement;
        this.changeBtn.style = "position: absolute; transform: translateY(-100%); border: 1px solid #585858; border-top-left-radius: 20px; border-top-right-radius: 20px; color: #ffebc0; padding-left: 0.5rem; padding-right: 0.5rem; user-select: none; background-color: transparent;";
        // changeBtn.style = "position: absolute; border-top-left-radius: 20px; border: 1px solid #585858; border-top-right-radius: 20px; color: #ffebc0; padding-left: 0.5rem; padding-right: 0.5rem; user-select: none;";
        
        this.frList = new DOMParser().parseFromString(FRIENDS_HTML, 'text/html').getElementById('friendsList')! as HTMLDivElement; this.frList.style.display = 'none';
        this.changeBtn.onclick = () => {
            this.changeBtn.innerText = 'Friends' == this.changeBtn.innerText ? 'Changelog' : 'Friends';
            this.changelog.style.display = this.changelog.style.display == "none" ? '' : 'none';
            this.frList.style.display = this.changelog.style.display == "none" ? '' : 'none';

            /* if (this.changelog.style.display == "none") {
                parent.removeChild(this.changeBtn);
                this.shadow.insertBefore(this.changeBtn, this.frList);
            } else {
                this.frListContainer.removeChild(this.changeBtn);
                parent.appendChild(this.changeBtn);
            } */
            // this.onResize();
        }

        this.shadow.appendChild(this.frList);
        this.shadow.appendChild(this.changeBtn);
        parent.insertBefore(frListContainer, this.changelog);
        // parent.insertBefore(this.changeBtn, frListContainer);

        for (const friend of client.storage.get('friends', 'JSON')) this.offlineController(friend);
        this.update();
        
        // this.changelog.parentElement!.insertBefore(frListContainer, this.changelog);
        this.changeBtn.onclick(new MouseEvent('click'));
        window.addEventListener("resize", this.onResize.bind(this)); this.onResize();
    }

    onResize() {
        const container = (this.changelog.style.display !== "none" ? this.changelog : this.frList);
        const containerRect = container.getBoundingClientRect();
        this.changeBtn.style.left = `${containerRect.left}px`;
        this.changeBtn.style.top = `${containerRect.top}px`;
    }

    async getConnectedPlayers() {
        return await new Promise<Record<string, string>>(reslove => {
            const xhr = new XMLHttpRequest();
            xhr.onload = () => {
                const res: Record<any, any> = JSON.parse(xhr.responseText), onlineList: Record<string, string> = {};
                Object.entries(res.servers).forEach(([regionName, regionData]: [any, any]) => Object.entries(regionData).forEach(([serverId, serverData]: [any, any]) => serverData.online.forEach((playerName: string) => (onlineList[playerName] = `${regionName}${parseInt(serverId) + 1}`) )));
                reslove(onlineList as Record<string, string>);
            }
            xhr.open('GET', 'https://evades.io/api/game/list', true);
            xhr.send();
        });
    }

    hide() {
        this.frListContainer.style.display = 'none';
    }

    hide$showFriends() {
        this.frListContainer.style.display = !this.frListContainer.style.display ? 'none' : '';
    }

    getLabelAddFriends(_this: any) {
        if (client.evadesObjects.user.name === _this.props.name) return '';
        const friends = client.storage.get('friends', 'JSON');
        return friends.includes(_this.props.name) ? 'Remove friend' : 'Add friend';
    }

    onClickAddFriends(_this: any) {
        const player = client.utils.getPlayerDataFromCM();
        let friends = client.storage.get('friends', 'JSON');
        if (friends.includes(player.name)) { friends = friends.filter((name: string) => name !== player.name); client.chat.addMessages([new ChatMessage(`Friend ${player.name} removed`)]); }
        else { client.chat.addMessages([new ChatMessage(`Friend ${player.name} added`)]); friends.push(player.name); }
        client.storage.set('friends', JSON.stringify(friends));
        _this.props.hide();
    }

    add(name: string) {
        const friends = client.storage.get('friends', 'JSON');
        if (!friends.includes(name)) {
            friends.push(name);
            client.storage.set('friends', JSON.stringify(friends));
            client.chat.addMessages([new ChatMessage(`Friend ${name} added`)]);
        }
    }

    rm(name: string) {
        const friends = client.storage.get('friends', 'JSON');
        if (friends.includes(name)) {
            client.storage.set('friends', JSON.stringify(friends.filter((_name: string) => _name !== name)));
            client.chat.addMessages([new ChatMessage(`Friend ${name} removed`)]);
        }
    }
}

