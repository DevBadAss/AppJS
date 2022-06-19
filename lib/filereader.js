import DOM from "./dom.js";
/**
 * Read Files below 200MiB in the browser.
 * @param {String} selector input element's className or id
 * @param {String} type type of result
 * @param {Function} callback function to execute when file content is ready.
 */

function readFile(selector, type, callback) {
    const inputFile = this.select(selector);

    inputFile.addEventListener("change", () => {
        const reader = new FileReader();
        reader.onload = function() {
            callback(this.result);
        }
        switch (type) {
            case "text":
                reader.readAsText(inputFile.files[0]);
                break;
            case "binary":
                reader.readAsBinaryString(inputFile.files[0]);
                break;
            case "buffer":
                reader.readAsArrayBuffer(inputFile.files[0]);
                break;
            case "data-url":
                reader.readAsDataURL(inputFile.files[0]);
        }
    });
}

export default readFile;