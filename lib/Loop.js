/**
 * Loop is a lightweight module used for running for loops.
 * @author Emmanuel Olawoore Collins
 */

class Loop {
    /**
     * @param {Any} meter Iterable Object, String or Number.
     */
    constructor(meter) {
        this._meter = meter.length;
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
}

export default Loop;