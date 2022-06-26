const Lefttemplate = document.createElement("template");

Lefttemplate.innerHTML = `
    <link rel="stylesheet" href="/AppJS/components/components-css/app-tab.css">
    <div class="left-tab">
        <div class="left-html">
        </div>
    </div>
`;


const Righttemplate = document.createElement("template");

Righttemplate.innerHTML = `
    <link rel="stylesheet" href="/AppJS/components/components-css/app-tab.css">
    <div class="right-tab">
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
        return ["background", "width", "animate", "disconnect"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector(".left-tab").style.backgroundColor = this.getAttribute("background");
        this.shadowRoot.querySelector(".left-tab").style.width = this.getAttribute("width");
        switch (this.getAttribute("disconnect")) {
            case "true":
                this.shadowRoot.querySelector(".left-tab").classList.add("slide-out-left");
                setTimeout(() => {
                    this.remove();
                }, 1200);
                break;
            case "false":
                this.shadowRoot.querySelector(".left-tab").classList.add("slide-out-left");
                setTimeout(() => {
                    this.remove();
                }, 1200);
                break;
        }
    }

    connectedCallback() {
        this.shadowRoot.querySelector(".left-html").innerHTML = this.innerHTML;
        this.setAttribute("class", "LeftTab");
        switch (this.getAttribute("animate")) {
            case "true":
                this.shadowRoot.querySelector(".left-tab").classList.add("slide-right");
                break;
            case "false":
                this.shadowRoot.querySelector(".left-tab").className = "left-tab";
                break;
        }
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector(".left-html").innerHTML = "";
        this.shadowRoot.querySelector(".left-tab").classList.toggle("slide-out-left");
    }
}


class RightTab extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(Righttemplate.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ["background", "width", "animate", "disconnect"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector(".right-tab").style.backgroundColor = this.getAttribute("background");
        this.shadowRoot.querySelector(".right-tab").style.width = this.getAttribute("width");
        switch (this.getAttribute("disconnect")) {
            case "true":
                this.shadowRoot.querySelector(".right-tab").classList.add("slide-out-right");
                setTimeout(() => {
                    this.remove();
                }, 1200);
                break;
            case "false":
                this.shadowRoot.querySelector(".right-tab").classList.add("slide-out-right");
                setTimeout(() => {
                    this.remove();
                }, 1200);
                break;
        }
    }

    connectedCallback() {
        this.shadowRoot.querySelector(".right-html").innerHTML = this.innerHTML;
        this.setAttribute("class", "RightTab");
        switch (this.getAttribute("animate")) {
            case "true":
                this.shadowRoot.querySelector(".right-tab").classList.add("slide-left");
                break;
            case "false":
                this.shadowRoot.querySelector(".right-tab").className = "right-tab";
                break;
        }
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector(".right-html").innerHTML = "";
    }
}

export { LeftTab, RightTab };