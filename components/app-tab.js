const template = document.createElement("template");

template.innerHTML = `
    <p>It works</p>
`;

class AppTab extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {}
}

export default AppTab;