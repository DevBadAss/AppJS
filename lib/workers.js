/**
 * Sets and return new Web Worker.
 * @param {Object} param WorkerObj
 * @param {String} param.script web worker script
 * @param {String} param.type type of web worker e.g classic or module.
 */

function workers(script, type) {
    const worker = new Worker(script, { type: type });
    return worker;
}

export default workers;