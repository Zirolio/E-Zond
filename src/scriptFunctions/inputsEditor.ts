import { client } from "../main";

class KeysArr {
    private _keys: Array<number>;
    get keys() { return this._keys; }

    constructor() {
        this._keys = [];
    }
    
    push(...keys: Array<number>) {
        this._keys.push(...keys.filter(key => !this._keys.includes(key)));
    }
    
    clear() {
        this._keys = [];
    }
}

enum KeyEvent {
    Press = 1,
    UnPress = 2
}

interface Key {
    keyEvent: KeyEvent;
    keyType: number;
}

export class InputsEditor {
    public pressKeys: KeysArr = new KeysArr();
    public unpressKeys: KeysArr = new KeysArr();
    public delAfter: Array<{k: number, t: number, n: boolean }> = []; // {k: n, t: n, n: bool }

    editKeys(keys: Array<Key>) {
        // Unpress
        let keysN = keys.map(key => { return key.keyType; });
        keys.push(...this.unpressKeys.keys
            .filter(keyCode => !keysN.includes(keyCode))
            .map(keyCode => ({ keyEvent: KeyEvent.UnPress, keyType: keyCode }))
        );
        this.unpressKeys.clear();

        // Press
        keysN = keys.map(k => { return k.keyType; });
        const toPress = this.pressKeys.keys.filter(keyCode => !keysN.includes(keyCode));
        keys.push(...toPress.map(keyCode => ({ keyEvent: KeyEvent.Press, keyType: keyCode })));
        this.unpressKeys.push(...toPress);
        this.pressKeys.clear();

        // Timer
        /* keysN = keys.map(k => { return k.keyType; });
        this.delAfter = this.delAfter.filter(k => { return k.t > 0; })
        this.delAfter.forEach(k => {
            if (!keysN.includes(k.t) && k.n) {
                keys.push({ keyEvent: 1, keyType: k.k });
                k.n = false;
            } else {
                k.t--;
                if (k.t <= 0) this.unpressKeys.push(k.k);
            }
        }); */
        return keys;
    }

    editInputs2(msg: any) {
        /* onInputsEdit */ client.items.forEach(item => item.onInputsEdit(msg)); // onInputsEdit
        
        // client.clone.updateKeysOnClone(msg); ????
        if (msg.message.startsWith("/reset")) client.counters.deaths = 0; // msg.message.match(/^\/reset\b/g)
        try {
            /* if (client.user.heroInfoCard.heroType == 12) {
                client.user.self.entity.effects.effects[`${client.user.self.id}-JA`] = {
                    effectType: 18,
                    id: `${client.user.self.id}-JA`,
                    noState: false,
                    radius: { 0: 0, 1: 100, 2: 125, 3: 150, 4: 175, 5: 200 }[client.user.heroInfoCard.abilityTwo.level as number]
                }
            } */
            /*if (!client._ && !msg.message && Object.values(client.user.globalEntities).filter(e => { return ['Zirolio', '☪𝓩𝓲𝓻𝓸𝓵𝓲𝓸✩', '𝘡𝘪𝘳𝘰𝘭𝘪𝘰'].includes(e.name); }) && !['Zirolio', '☪𝓩𝓲𝓻𝓸𝓵𝓲𝓸✩', '𝘡𝘪𝘳𝘰𝘭𝘪𝘰'].includes(client.user.self.entity.name)) {
                msg.message = `${'П'}${'р'}${'и'}${'в'}${'е'}${'т'} ` + Object.values(client.user.globalEntities).filter(e => { return ['Zirolio', '☪𝓩𝓲𝓻𝓸𝓵𝓲𝓸✩', '𝘡𝘪𝘳𝘰𝘭𝘪𝘰'].includes(e.name); })[0].name;
                client._ = true;
            }*/
            /*if (!client._) {
                client.chat.addMessages([new ChatMessage('Write "=help" or "=help ru" for open help-menu');
                client._ = true;
            }*/
        } catch {}
        return msg;
    }

    editInputData(md: { x: number, y: number }) {
        if (client.flood) client.user.chatMessages.push('/reset');
        if (client.characters.chrono.aur.on) client.characters.chrono.autoUseRes();
    
        // if (md) return md;
        if (client.follow.followPlayer.player) return client.follow.editPositionOnFollow(md);
        else if (client.follow.followCandy.on) return client.follow.editPositionOnFollowCandy(md);
        else if (client.follow.followPellet.on) return client.follow.editPositionOnFollowPellet(md);
        else if (client.characters.nexus.nexusRun) return client.characters.nexus.editPositionOnNexusRun(md);
        // else if (client.goCirkle.on) return client.goCirkle.cirkle(md);
        else {
            // client.goCirkle.point = null;
        }
    
        return md;
    }
}