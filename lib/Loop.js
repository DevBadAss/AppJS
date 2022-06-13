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
    }
}