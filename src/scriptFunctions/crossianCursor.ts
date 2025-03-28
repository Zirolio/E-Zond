import { client } from "../main";
import { REPO } from "../utils/constants";

export class CrossianCursor {
    public on: boolean = false;
    public size: number = 24;

    getCursorUrl() {
        return `url('${REPO}/resources/cursor_x${this.size}.png') ${this.size / 2} ${this.size / 2}, crosshair`;
    }
}