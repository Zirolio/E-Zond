export interface User {
    self: {
        entity: { x: number, y: number }
    }
}

export interface GameObjects {
    user?: User;
    engine?: object;
}