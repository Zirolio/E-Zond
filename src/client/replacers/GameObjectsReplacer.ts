import Replacer from "@injector/Replacer";

export default class GameObjectsReplacer extends Replacer {
    /* eslint-disable */
    user?: any;
    engine?: any;
    /* eslint-enable */
    
    constructor() {
        super();

        this.addReplacer(/this\.sequence\s*=\s*0,/g, (ss) => ss + `${ss} window._client.gameObjects.user = this,`);
        this.addReplacer(/this\.initResizeCanvas\(\)/g, (ss) => `${ss}, window._client.gameObjects.engine = this`);
    }
}