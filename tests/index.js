//Import the SPA and Router modules.
import App from "../App.js";
import Router from "../Router.js";

//Instantiating them.
const app = new App("app");
const router = new Router(app);

//Testing them
app.addView({
    name: "models",
    model: {},
    view(model) {
        return "<span id='test'> you are dope</span>";
    },
    controller(model) {
        document.getElementById("test").onclick = () => {
            router.get("#/home");
        }
    }
});

app.addView({
    name: "modelling",
    model: {},
    view(model) {
        return "<span id='test'> good</span>";
    },
    controller(model) {
        document.getElementById("test").onclick = () => {
            router.get("#/about");
        }
    }
});

router.addRoute("modelling", "#/about");
router.addRoute("models", "#/home");


// Importing DOM.js
import DOM from "../lib/dom.js";

//Instantiating
const bodyDom = new DOM("app");

//Testing
console.log(bodyDom.selectall("first-text"));
console.log(bodyDom.select("first-text"));
console.log(bodyDom.getTag("DIV"));
console.log(bodyDom.getID("second-text"));
console.log(bodyDom.getClass("first-text"));