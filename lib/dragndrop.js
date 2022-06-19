function MobileDrag(selector) {
    const element = this.select(selector);

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

MobileDrag("test-element");