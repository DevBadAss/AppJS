import DOM from "./dom.js";

const dom = new DOM("app");

function MobileDrag(selector) {
    const element = dom.select(selector);

    element.addEventListener("touchmove", e => {
        console.log(e.touches[0]);

        var x = e.touches[0].pageX;
        var y = e.touches[0].pageY;

        element.style.position = "absolute";
        element.style.top = y + "px";
        element.style.left = x + "px";
    });
}

export default MobileDrag;