import Replacer from "@injector/Replacer";
import type { GameObjects, User } from "@shared/types/GameObjects.type";

export default class GameObjectsReplacer extends Replacer implements GameObjects {
    user?: User | undefined;

    constructor() {
        super();
        
        this.addReplacer(/this\.sequence\s*=\s*0,/g, (ss) => ss + `${ss} window._client.gameObjects.user = this,`);
        this.addReplacer(/this\.initResizeCanvas\(\)/g, (ss) => `${ss}, window._client.gameObjects.engine = this,`);
    }
}