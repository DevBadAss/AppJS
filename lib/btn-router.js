// Importing MVC andd Router Classes
import Router from "../Router.js";
import MVC from "../MVC.js";

//Instantiating....
const app = new MVC("app");
const router = new Router(app);

/**
 * Changes the location route of an app.
 * @param {String} btn_class className of the button.
 * @param {String} evt event to listen for.
 * @param {Object} route Route object
 */

function BtnRoute(btn_class, evt, route) {
    const btn = document.querySelector(btn_class);
    btn.addEventListener(evt, () => {
        if (route.hash !== null && route.href === null) {
            router.get(route.hash);
        }

        if (route.hash === null && route.href !== null) {
            window.location.href = route.href;
        }
    });
}

export default BtnRoute;