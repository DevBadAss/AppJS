class Loop {
    constructor(type, meter) {
        this._type = type;
        this._meter = meter;
    }

    run(callback) {
        if (this._type === "for") {
            for (let i = 0; i < this._meter; i++) {
                if (i === this._meter) break;
                callback(i);
            }
        }

        if (this._type === "for-in") {
            for (let x in this._meter) {
                callback(this._meter[x]);
            }
        }

        if (this._type === "for-of") {
            for (let x of this._meter) {
                callback(x);
            }
        }
    }
}