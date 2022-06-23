import DOM from "./dom.js";

const dom = new DOM("app");

/**
 * Drag and Drop any element anywhere on the pages.
 * @param {String} selector  class or id the element.
 */
function MobileDrag(selector) {
    const element = dom.select(selector);

    element.addEventListener("touchmove", e => {
        var x = e.touches[0].pageX;
        var y = e.touches[0].pageY;

        element.style.position = "absolute";
        element.style.top = y + "px";
        element.style.left = x + "px";
    });
}

export default MobileDrag;