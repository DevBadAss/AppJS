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

}

export default DOM;