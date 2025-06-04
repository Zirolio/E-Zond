import { client } from "../main";

export class Zoom {
    readonly zoomStep: number = 0.02;
    // public updated: boolean = true;

    private _moment: number = 1;
    get moment() { return this._moment; }

    set new(value: number) { console.log("ZOOM UPDATED:", value); this.updateZoom(value); this.reZoom(); }
    get new() { return this._moment; }

    updateZoom(newValue: number) {
        if (newValue > 1) { this._moment = 1; }
        else if (newValue < 0.35) { this._moment = 0.35; }
        else this._moment = newValue;

        client.storage.set('zoom', this._moment);
    }

    reZoom() {
        if (!client.evadesObjects.resizeCanvas) return;
        client.evadesObjects.resizeCanvas();

        /*const workWGE = client.workWGE;
        if (!client.evadesObjects.camera || !client.lastAreaMessage) return;
        if (!this.original) this.original = Object.assign({}, client.evadesObjects.camera.viewportSize);

        if (client.camera.oldCanvasSet || this.moment == this._new || !workWGE) return;
        
        if (this._new > 1) { this.moment = this.new = 1; return; }
        else if (this._new < 0.35) { this.moment = this.new = 0.35; return; }
    
        client.storage.set('zoom', this._new);
    
        const newW = this.original.width / this._new, newH = this.original.height / this._new;
    
        client.evadesObjects.camera.viewportSize.width = workWGE.canvas.width = workWGE.canvasLighting.width = newW;
        client.evadesObjects.camera.viewportSize.height = workWGE.canvas.height = workWGE.canvasLighting.height = newH;*/
        // client.evadesObjects.camera.viewportSize = workWGE.canvas;
    
        // this._new
        // client.evadesObjects.viewport.originalGameScale = this._new;
    }
    
    getZoom() {
        if (client.camera.oldCanvasSet) return Math.min(window.innerWidth / client.user.area.width, window.innerHeight / client.user.area.height);
        return Math.min(window.innerWidth / 1280, window.innerHeight / 720) * this.moment;
    }
}
/* Math.max(
            Math.min(window.innerWidth / 1280, window.innerHeight / 720),
            this.moment
        ); */
/* resizeEnd() {
    if (!client.workWGE) return;
    client.user.area = new client.user.area.constructor();
    client.user.area.unionState(client.lastAreaMessage.area);
    client.workWGE.initResizeCanvas();
} */
// $a9c1803c87ddfbef$export$2e2bcd8739ae039
/* 
if (!client.originalViewportSize) client.originalViewportSize = Object.assign({}, client.state.camera.viewportSize)
if (client.oldScale) return

client.__zoom = client.zoom

let width = client.originalViewportSize.width / client.zoom
let height = client.originalViewportSize.height / client.zoom

client.state.canvas.width = width
client.state.canvasLighting.width = width
client.state.canvas.height = height
client.state.canvasLighting.height = height
client.state.camera.viewportSize = client.state.canvas

client.state.initResizeCanvas()
*/