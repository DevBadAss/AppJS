class Loop {
    constructor(type, meter) {
        this._type = type;
        this._meter = meter;
    }

    setExpression(expression) {
        return expression;
    }
    y
    run(callback) {
        if (this._type === "for") {
            for (let i = 0; i < this._meter; i++) {
                if (i === this._meter) break;
                callback(i);
            }
        }

        if (this._type === "while") {}
    }
}


const loop = new Loop("for", 5);

loop.run(e => {
    console.log(e);
})