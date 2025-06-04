import { client } from "../main";

export class Counters {
    public deathsC: boolean = true;
    public ppsC: boolean = true;
    public deaths: number = 0;
    public pps: number = 0;
    public lastPPSUpdate: number = 0;
    public packets: number = 0;

    draw(render: any) {
        if (document.getElementById('chatCostumStyles')!.innerHTML) return;
        const zoom = client.camera.zoom.getZoom();
        const   text: Array<any> = [],
                x = 10 * zoom,
                y = 230 * zoom,
                h = 20 * zoom;

        if (this.deathsC) text.push([`Deaths: ${this.deaths}`, () => '#ffffff']);
        if (this.ppsC) text.push([`PPS: ${this.pps}`, () => this.pps < 10 ? '#f00000' : this.pps < 20 ? '#db7b2f' : this.pps < 30 ? '#dbb62f' : '#00f000']);

        render.context.save();
        render.context.lineWidth = 3;
        render.context.font = `bold ${15 * zoom}px Tahoma, Verdana, Segoe, sans-serif`;
        render.context.textAlign = 'left';
        render.context.strokeStyle = '#000000';
        render.context.fillStyle = '#ffffff';

        for (let i = 0; i < text.length; i++) {
            const data = text[i];
            render.context.fillStyle = data[1]();
            render.context.strokeText(data[0], x, y + i * h);
            render.context.fillText(data[0], x, y + i * h);
        }

        render.context.restore();
    }
}