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

    chstr(selector, target, value) {
        return selector.replace(target, value);
    }

    addhtml(selector, html, id) {
        const position = ["afterbegin", "afterend", "beforebegin", "beforeend"];
        const element = this.select(selector);
        return element.insertAdjacentHTML(position[id], html);
    }

    addClass(selector, className) {
        return this.select(selector).classList.add(className);
    }

    removeClass(selector, className) {
        return this.select(selector).classList.remove(className);
    }

    toggleClass(selector, className) {
        return this.select(selector).classList.toggle(className);
    }

    Attr(type, attr, selector) {
        if (type === "get") {
            return this.select(selector).getAttribute(attr.name);
        }

        if (type === "set") {
            return this.select(selector).setAttribute(attr.name, attr.value);
        }
    }

    Value(selector) {
        return this.select(selector).value;
    }

    getStyle(selector) {
        return this.select(selector).style;
    }

    setStyle(selector, cssObj) {
        const currentStyle = getStyle(selector);
        return Object.assign(currentStyle, newStyle);
    }
}

export default DOM;