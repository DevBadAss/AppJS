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

    getDomData(variables) {
        this.variables = variables;
        const DomData = [];
        const dom_loop = new Loop(this.variables);
        dom_loop.run(i => {
            DomData.push(this.root.querySelector(this.variables));
            console.log(DomData)
        });
    }

}

export default DOM;