import { client } from "@/main";
import Replacer from "@injector/Replacer";

export default class CameraReplacer extends Replacer {
    // eslint-disable-next-line
    private originalViewportSize: any;

    constructor() {
        super();

        this.addReplacer(/this\.camera\.centerOn\(.+?\)/g, () => `this.camera.centerOn(window._client.gameObjects.user.self.entity)`);
    }

    rezoom() {
        const engine = client.gameObjects.engine;
        const camera = engine?.camera;
        if (!camera) return;
        if (!this.originalViewportSize) this.originalViewportSize = Object.assign({}, camera.viewportSize);

        const zoom = client.settingsState.Camera.Zoom.zoom;
        if (zoom > 1 || zoom < 0.35) return;

        const newW = this.originalViewportSize.width / zoom, newH = this.originalViewportSize.height / zoom;
    
        camera.viewportSize.width = engine.canvas.width = engine.canvasLighting.width = newW;
        camera.viewportSize.height = engine.canvas.height = engine.canvasLighting.height = newH;
        // client.evadesObjects.camera.viewportSize = workWGE.canvas;
    
        /* client.gameObjects.user.area = new client.gameObjects.user.area.constructor();
        client.gameObjects.user.area.unionState(client.lastAreaMessage.area); */
        engine.initResizeCanvas();

        console.log(zoom);
    }
    
    getSpect() {
        return client.gameObjects.user?.self.entity;
    }
}