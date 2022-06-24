const Lefttemplate = document.createElement("template");

Lefttemplate.innerHTML = `
    <link rel="stylesheet" href="../components/components-css/app-tab.css">
    <link rel="stylesheet" href="../components/components-css/components.css">
    <div class="left-tab">
        <div class="left-html">
        </div>
    </div>
`;


const Righttemplate = document.createElement("template");

Righttemplate.innerHTML = `
    <link rel="stylesheet" href="../components/components-css/app-tab.css">
    <link rel="stylesheet" href="../components/components-css/components.css">
    <div class="right-tab">
        <slot name="animation"></slot>
        <div class="right-html">
        </div>
    </div>
`;

class LeftTab extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(Lefttemplate.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ["background", "width", "animate"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector(".left-tab").style.backgroundColor = this.getAttribute("background");
        this.shadowRoot.querySelector(".left-tab").style.width = this.getAttribute("width");
    }

    connectedCallback() {
        this.shadowRoot.querySelector(".html").innerHTML = this.innerHTML;
        switch (this.getAttribute("animate")) {
            case "true":
                this.shadowRoot.querySelector(".left-tab").classList.add("tab-animate-right");
                break;
            case "false":
                this.shadowRoot.querySelector(".left-tab").className = "left-tab";
                break;
        }
    }
}


class RightTab extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(Righttemplate.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ["background", "width", "animate"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector(".right-tab").style.backgroundColor = this.getAttribute("background");
        this.shadowRoot.querySelector(".right-tab").style.width = this.getAttribute("width");
    }

    connectedCallback() {
        this.shadowRoot.querySelector(".right-html").innerHTML = this.innerHTML;
        switch (this.getAttribute("animate")) {
            case "true":
                this.shadowRoot.querySelector(".right-tab").classList.add("tab-animate-left");
                break;
            case "false":
                this.shadowRoot.querySelector(".right-tab").className = "right-tab";
                break;
        }
    }
}

export { LeftTab, RightTab };