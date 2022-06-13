/**
 * Screen is a module for getting and monitoring a device's screen orientation type.
 *@author Olawoore Emmanuel Collins
 */

class Screen {
    /**
     * Set Screen type.
     * Set Screen orientation.
     */
    constructor() {
        this._type = window.screen.orientation.type;
        this._orientation = window.screen.orientation;
    }

    /**
     * Gets screen type and executes callback
     * @param {Function} callback Function to be executed after getting screen type
     */
    getScreen(callback) {
        if (this.type === "landscape-primary") {
            callback(this.type);
        }
        if (this.type === "portrait-primary") {
            callback(this.type);
        }
    }

    /**
     * Watches screen type and executes callback
     * @param {Function} callback Function to be executed after getting screen type
     */

    watchScreen(callback) {
        this.orientation.addEventListener("change", () => {
            callback(this.type);
        });
    }
}

export default Screen;