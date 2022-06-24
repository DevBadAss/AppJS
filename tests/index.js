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
        return "<span id='test'> Now</span>";
    },
    controller(model) {

    }
});

app.addView({
    name: "modelling",
    model: {},
    view(model) {
        return "<span id='test'> good</span>";
    },
    controller(model) {

    }
});


router.addRoute("modelling", "#/about");
router.addRoute("models", "#/home");


// Importing DOM.js
import DOM from "../lib/dom.js";

//Instantiating
// const bodyDom = new DOM("app");

//Testing
// console.log(bodyDom.selectall("first-text"));
// console.log(bodyDom.select("first-text"));
// console.log(bodyDom.getTag("DIV"));
// console.log(bodyDom.getID("second-text"));
// console.log(bodyDom.getClass("first-text"));
// console.log(bodyDom.Attr("set", { name: "name", value: "User" }, "parent-div"))
// bodyDom.select("test-input").onchange = function() {
//     console.log(bodyDom.Value("test-input"));
// }
// bodyDom.addClass("test-input", "first-input");
// bodyDom.setStyle("parent-div", { backgroundColor: "black", padding: "20px" })
// bodyDom.addhtml("parent-div", "<p class='current-p'>Lorem Ipsum</p>", 3);
// bodyDom.setStyle("current-p", { backgroundColor: "white", padding: "20px" })
// const testString = "I love ReactJS";
// const newTestString = bodyDom.chstr(testString, "ReactJS", "AppJS");
// console.log(newTestString);
// console.log(bodyDom.length(newTestString));


// Importing dragndrop.js
import MobileDrag from "../lib/dragndrop.js";
//Testing MobileDrag
// MobileDrag("parent-div");

// Importing FileReader
import readFile from "../lib/filereader.js";

// readFile("file-input", "buffer", result => {
//     console.log(result);
// });


//Importing screen recorder
import startRecord from "../lib/screen-recorder.js";

//Testing
// startRecord((rec) => {
//     bodyDom.select("test-input").onclick = (e) => {
//         e.preventDefault();
//         rec.stop()
//     }
// });

//Importing components
import Create__Component from "../lib/component.js";
import { LeftTab, RightTab } from "../components/app-tab.js";

Create__Component("left-tab", LeftTab);
Create__Component("right-tab", RightTab);


setTimeout(() => {
    document.body.removeChild(document.querySelector(".left-tab"));
    document.body.removeChild(document.querySelector(".right-tab"));
}, 5000);