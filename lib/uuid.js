/**
 * Generates ID
 * @param {Number} length length of unique id
 * @returns ID
 * @author Olawoore Emmanuel Collins
 */
function ID(length) {

    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let id = "";

    for (let i = 0; i < length; i++) {
        let generate = letters[Math.floor(Math.random() * 64)];
        id += generate;
    }
    return id;

}

/**
 * Generates unique ID
 * @param {Number} length length of unique id
 * @returns Unique ID
 * @author Olawoore Emmanuel Collins
 */

export default function uuid(length) {
    return ID(length) + "-" + ID(length) + "-" + ID(length)
}