import Loop from "./Loop.js"


class DOM {
    constructor(root) {
        this.root = document.querySelector("." + root) || document.querySelector("#" + root);
    }

    select(query) {
        return this.root.querySelector("." + query) || this.root.querySelector("#" + query);
    }

    selectall(query) {
        return this.root.querySelectorAll("." + query) || this.root.querySelectorAll("#" + query);
    }

    getTag(name) {
        return this.root.getElementsByTagName(name);
    }

    getClass(className) {
        return this.root.getElementsByClassName(className);
    }

    getID(id) {
        return document.getElementById(id);
    }
}

export default DOM;