/**
 * @class UI generates client memory files.
 * @author Olawoore Emmanuel Collins
 */
class UI {
    constructor(UI, { options }) {
        this.view = new Blob([UI], { type: options });
    }

    /**
     * generates link to the memory file.
     */
    get file() {
        return self.URL.createObjectURL(this.view)
    }
}

export default UI;