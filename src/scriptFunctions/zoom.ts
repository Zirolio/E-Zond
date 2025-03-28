import { client } from "../main";

export class Zoom {
    readonly zoomStep: number = 0.02;
    public moment: number = 0;
    private _new: number = 0;
    set new(value) { this._new = value; this.reZoom(); };
    get new() { return this._new; };
    public original: any;

    reZoom() {
        const workWGE = client.workWGE;
        if (!client.evadesObjects.camera || !client.lastAreaMessage) return;
        if (!this.original) this.original = Object.assign({}, client.evadesObjects.camera.viewportSize);

        if (client.camera.oldCanvasSet || this.moment == this._new || !workWGE) return;
        
        if (this._new > 1) { this.moment = this.new = 1; return; }
        else if (this._new < 0.35) { this.moment = this.new = 0.35; return; }
    
        client.storage.set('zoom', this._new);
    
        const newW = this.original.width / this._new, newH = this.original.height / this._new;
    
        client.evadesObjects.camera.viewportSize.width = workWGE.canvas.width = workWGE.canvasLighting.width = newW;
        client.evadesObjects.camera.viewportSize.height = workWGE.canvas.height = workWGE.canvasLighting.height = newH;
        // client.evadesObjects.camera.viewportSize = workWGE.canvas;
    
        this.moment = this._new;
        this.resizeEnd();
    }
    
    resizeEnd() {
        if (!client.workWGE) return;
        client.user.area = new client.user.area.constructor();
        client.user.area.unionState(client.lastAreaMessage.area);
        client.workWGE.initResizeCanvas();
    }
}// $0728a58da77f2384$export$2e2bcd8739ae039
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