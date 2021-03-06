/**
 * Loop is a lightweight module used for running for loops.
 * @author Emmanuel Olawoore Collins
 */

class Loop {
    /**
     * @param {Any} meter Iterable Object, String or Number.
     */
    constructor(meter) {
        if (typeof meter === "Object" && typeof meter === "String")
            this._meter = meter.length;

        if (typeof meter === "Number")
            this._meter = meter;
    }

    /**
     * Runs Loop
     * @param {Function} callback function to execute when loop is running.
     */

    run(callback) {
        for (let i = 0; i < this._meter; i++) {
            if (i === this._meter) break;
            callback(i);
        }
    }

    continue (expr, callback) {
        while (expr) {
            callback();
            break;
        }
    }
}

export default Loop;