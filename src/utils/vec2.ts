export interface Vec2Like {
    x: number;
    y: number;
}

export default class Vec2 {
    public x!: number;
    public y!: number;

    constructor();
    constructor(vec: Vec2Like);
    constructor(x: number, y: number);
    constructor(x: number | Vec2Like | null | undefined = 0, y: number = 0) {
        if (!(this instanceof Vec2)) return new Vec2(x as any, y);
        else {
            this.x = typeof x == 'number' ? x : x !== null ? x.x : 0;
            this.y = typeof x == 'number' ? y : x !== null ? x.y : 0;
        }
    }

    addLocal(vec: Vec2Like): Vec2;
    addLocal(x: number, y: number): Vec2;
    addLocal(x: number | Vec2Like, y?: number) {
        this.x += typeof x == 'number' ? x : x.x;
        this.y += typeof x == 'number' ? y! : x.y;
        return this;
    }

    mulLocal(s: number) {
        this.x *= s;
        this.y *= s;
        return this;
    }

    negLocal() {
        return this.mulLocal(-1);
    }

    subLocal(vec: Vec2Like) {
        this.x -= vec.x;
        this.y -= vec.y;
        return this;
    }

    floorLocal() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this;
    }
    
    sub(vec: Vec2Like) {
        return new Vec2(this.x - vec.x, this.y - vec.y);
    }
    
    neg() {
        return this.mul(-1);
    }
    
    add(vec: Vec2Like): Vec2;
    add(x: number, y: number): Vec2;
    add(x: number | Vec2Like, y?: number) {
        return new Vec2(this.x + (typeof x == 'number' ? (x as number) : (x as Vec2Like).x), this.y + (typeof x == 'number' ? (y as number)! : (x as Vec2Like).y));
    }

    floor() {
        return new Vec2(Math.floor(this.x), Math.floor(this.y));
    }
    
    mul(s: number) {
        return new Vec2(this.x * s, this.y * s);
    }
    
    angle(to: Vec2Like = { x: 0, y: 0 }) { return Math.atan2(to.y - this.y, to.x - this.x); }
    absAngle(to: Vec2Like = { x: 0, y: 0 }) { const angle = Math.atan2(to.y - this.y, to.x - this.x); return angle < 0 ? angle + Math.PI * 2 : angle; }
    distance(to: Vec2Like) { return Math.sqrt((this.x - to.x)**2 + (this.y - to.y)**2); }
    length() { return Math.sqrt(this.x**2 + this.y**2); }
    
    set(vec: Vec2Like): Vec2;
    set(x: number, y: number): Vec2;
    set(x: number | Vec2Like, y?: number) {
        this.x = typeof x == 'number' ? x : x.x;
        this.y = typeof x == 'number' ? y! : x.y;
        return this;
    }

    normalize() {
        const length = this.length();
        if (length !== 0) this.mulLocal(1 / length);
        return length;
    }

    normalized() {
        const length = this.length();
        if (length !== 0) this.mulLocal(1 / length);
        return this;
    }

    toArray() {
        return [this.x, this.y];
    }

    toObject(object: Object = {}) {
        return { ...object, x: this.x, y: this.y };
    }

    lerpLocal() {
        
    }

    static fromAngle(angle: number) {
        return new Vec2(Math.cos(angle), Math.sin(angle));
    }
    static distance(p1: Vec2Like, p2: Vec2Like) {
        return Math.sqrt((p1.x - p2.x)**2 + (p1.y - p2.y)**2);
    }
}