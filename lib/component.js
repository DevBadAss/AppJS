/**
 * Creates and define components.
 * @param {String} name component name.
 * @param {Object} component component to be created.
 * @returns 
 */

function Create__Component(name, component) {
    return window.customElements.define(name, component);
}

export default Create__Component;