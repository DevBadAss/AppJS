/**
 * AppJS DOM Library.
 */
class DOM {
    /**
     * 
     * @param {String} root class or id of the root element for the virtual dom.
     */
    constructor(root) {
        this.root = document.querySelector("." + root) || document.querySelector("#" + root);
    }

    /**
     * Performs a single querySelect on the DOM based on the query(id/class or any other attribute) and returns the element.
     * @param {String} query class or id of the element.
     */
    select(query) {
        return this.root.querySelector("." + query) || this.root.querySelector("#" + query);
    }

    /**
     * Performs multiple querySelect on the DOM based on the query(id/class or any other attribute) return the elements.
     * @param {String} query class or id of the elements.
     */
    selectall(query) {
        return this.root.querySelectorAll("." + query) || this.root.querySelectorAll("#" + query);
    }

    /**
     *Gets and return elements by their tag names.
     * @param {String} name tag names of the element.
     */

    getTag(name) {
        return this.root.getElementsByTagName(name);
    }

    /**
     *Gets and return elements by their class names.
     * @param {String} className class of the element.
     */

    getClass(className) {
        return this.root.getElementsByClassName(className);
    }

    /**
     *Gets and return elements by their Id.
     * @param {String} id id of the element.
     */

    getID(id) {
        return document.getElementById(id);
    }

    /**
     *Gets and return innerHTML of an element.
     * @param {String} selector class or id of the element.
     */

    gethtml(selector) {
        this.element = this.select(selector);
        return this.element.innerHTML;
    }

    /**
     *Gets and return the length of a string or object.
     * @param {String} val object or string.
     */

    length(val) {
        return val.length;
    }

    /**
     *Changes and returns the value of string.
     * @param {String} selector variable.
     * @param {String} target text to changed.
     * @param {String} value value.
     */

    chstr(selector, target, value) {
        return selector.replace(target, value);
    }


    /**
     *Adds to the innerHTML of an element.
     * @param {String} selector class or id of the element.
     * @param {String} id position where html should be added.
     * @param {String} html html to be added.
     */

    addhtml(selector, html, id) {
        const position = ["afterbegin", "afterend", "beforebegin", "beforeend"];
        const element = this.select(selector);
        return element.insertAdjacentHTML(position[id], html);
    }


    /**
     *Adds to the classList of an element.
     * @param {String} selector class or id of the element.
     * @param {String} className class of the element.
     */

    addClass(selector, className) {
        return this.select(selector).classList.add(className);
    }

    /**
     *Removes from the classList of an element.
     * @param {String} selector class or id of the element.
     * @param {String} className class of the element.
     */

    removeClass(selector, className) {
        return this.select(selector).classList.remove(className);
    }

    /**
     *Toggles the classList of an element.
     * @param {String} selector class or id of the element.
     * @param {String} className class of the element.
     */

    toggleClass(selector, className) {
        return this.select(selector).classList.toggle(className);
    }

    /**
     *Sets and Gets the attribute of an element.
     * @param {String} type get or set.
     * @param {Object} attr attrobj.
     * @param {String} selector class or id of the element.
     */

    Attr(type, attr, selector) {
        if (type === "get") {
            return this.select(selector).getAttribute(attr.name);
        }

        if (type === "set") {
            return this.select(selector).setAttribute(attr.name, attr.value);
        }
    }

    /**
     *Gets and return the value of an input element.
     * @param {String} selector class or id of the input element.
     */

    Value(selector) {
        return this.select(selector).value;
    }

    /**
     *Gets and return the style of an element.
     * @param {String} selector class or id of the element.
     */

    getStyle(selector) {
        return this.select(selector).style;
    }

    /**
     *Sets and return the value of an element.
     * @param {String} selector class or id of the element.
     * @param {cssObj} cssObj new class style for the element.
     */

    setStyle(selector, cssObj) {
        const currentStyle = this.getStyle(selector);
        return Object.assign(currentStyle, cssObj);
    }

    /**
     * Changes background image per interval
     * @param {Number} iterator images array iterator index.
     * @param {Object} images array of images.
     * @param {String} element class or id of element to queried.
     * @param {Number} speed changing speed.
     */
    ChBgImage(iterator, images, element, speed) {
        setInterval(() => {
            dom.setStyle(element, { backgroundImage: `url("${images[iterator]}")` });
            iterator++;
            if (iterator === images.length) {
                iterator = 0;
                ChBg(iterator, images);
            }
        }, speed);
    }
}

export default DOM;