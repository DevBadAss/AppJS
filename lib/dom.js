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

    gethtml(selector) {
        this.element = this.select(selector);
        return this.element.innerHTML;
    }

    length(val) {
        return val.length;
    }
}

export default DOM;