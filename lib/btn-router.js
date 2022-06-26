/**
 * Changes the location route of an app.
 * @param {String} btn_class class or id of the button.
 * @param {String} evt event to listen for.
 * @param {Object} route Route object
 */

function BtnRoute(btn_class, evt, route) {
    const btn = document.querySelector("." + btn_class) || document.querySelector("#" + btn_class);
    btn.addEventListener(evt, () => {
        if (route.hash !== null && route.href === null) {
            window.location.hash = route.hash;
        }

        if (route.hash === null && route.href !== null) {
            window.location.href = route.href;
        }
    });
}

export default BtnRoute;