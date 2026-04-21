import { client } from "@/main";
import Replacer from "@injector/Replacer";

export default class CameraReplacer extends Replacer {
    constructor() {
        super();

        this.addReplacer(/this\.camera\.centerOn\(.+?\)/g, () => `this.camera.centerOn(window._client.gameObjects.user.self.entity)`);
    }
    
    getSpect() {
        return client.gameObjects.user?.self.entity;
    }
}