import App from "../App.js";
import Router from "../Router.js";
import RouterConfig from "../RouterConfig.js";

const app = new App("app");
// const router = new Router(app);

app.addView({
    name: "models",
    model: {},
    view(model) {
        return "<span id='test'> you are dope</span>";
    },
    controller(model) {
        document.getElementById("test").onclick = () => {
            router.get("#/gold");
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
            router.get("#/golden");
        }
    }
});

// router.addRoute("modelling", "#/gold")
// router.addRoute("models", "#/golden")
RouterConfig(app, "./route-config.json");