import { client } from "../main";

export class AntiAFK {
    public on: boolean =  false;
    public delay: number =  60 * 1000;

    sendMessage() {
        // console.log(this.on, client.ws, client.encode)
        if (this.on && client.ws && client.ws.readyState == client.ws.OPEN && client.encode) {
            client.ws.send(client.encode({ sequence: ++client.user.sequence }).finish());
        }
    }

    init() {
        setInterval(() => client.antiAfk.sendMessage(), 60 * 1000);
    }
}