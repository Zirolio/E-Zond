import { client } from "../main";

export class React {
    createElement(type: string, params: any) {
        return client.evadesObjects.react ? client.evadesObjects.react.jsx(type, params) : false;
    }
}