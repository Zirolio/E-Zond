import { client } from "../main";

export class LeadreBoardAccessories {
    getHatElement({ player }: any) {
        const entity = client.evadesObjects.user.entities[player.id] || {};

        if (entity.hatImage) {
            return client.react.createElement("img", {
                src: entity.hatImage.textureData.texture.src,
                style: {
                    position: "absolyte"
                }
            });
        } else return false;
    }
}