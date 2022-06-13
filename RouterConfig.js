import Router from "./Router.js";
import Request from "./mvc-request/request.js";
import Loop from "./lib/Loop.js";

function RouterConfig(app, configFile) {
    const router = new Router(app);
    const config_request = new Request({ url: configFile, method: "GET", res: "json", type: "application/json", data: null });
    config_request.pull(result => {
        const route_loop = new Loop(result.route);
        route_loop.run(i => {
            router.addRoute(result.route_name[i], result.route[i]);
        });
    });
}