const Lefttemplate = document.createElement("template");

Lefttemplate.innerHTML = `
    <link rel="stylesheet" href="../components/components-css/app-tab.css">
    <div class="left-tab">
        <div class="html">
        </div>
    </div>
`;

class LeftTab extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(Lefttemplate.content.cloneNode(true));
    }

    static get observeAttributes() {
        return ["background", "width", "animate"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector(".left-tab").style.backgroundColor = this.getAttribute("background");
        this.shadowRoot.querySelector(".left-tab").style.width = this.getAttribute("width");
    }

    connectedCallback() {
        this.shadowRoot.querySelector(".html").innerHTML = this.innerHTML;
        switch (this.getAttribute("animate")) {
            case true:
                this.shadowRoot.querySelector(".left-tab").classList.add("tab-animate-left");
                break;
            case false:
                this.shadowRoot.querySelector(".left-tab").className = "left-tab";
                break;
        }
    }
}

export { LeftTab };