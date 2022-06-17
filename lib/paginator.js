/**
 * @class A pagination Module.
 * @author Olawoore Emmanuel Collins
 */
class Paginator {
    /**
     * @param {Number} numberPerPage number of data to be loaded per page.
     * @param {String} node element where data are to be loaded into.
     * @param {Object} data data to be paginated.
     */
    constructor(numberPerPage, node, data) {
        this.list = [];
        this.pageList = [];
        this.numberOfPages = 0;
        this.numberPerPage = numberPerPage;
        this.node = node;
        this.data = data;
        this.currentPage = 1;
    }

    /**
     * Generates list for data.
     */
    makeList() {
        for (let x = 0; x < this.data.length; x++) {
            this.list.push(x);
        }
        this.numberOfPages = Math.ceil(this.list.length / this.numberPerPage);
    }

    /**
     * Loads first page.
     */
    firstPage() {
        this.currentPage = 1;
        this.load();
    }

    /**
     * Loads last page.
     */
    lastPage() {
        this.currentPage = this.numberOfPages;
        this.load();
    }

    /**
     * Loads next page.
     */
    nextPage() {
        this.currentPage += 1;
        this.load();
    }

    /**
     * Loads previous page.
     */
    previousPage() {
        this.currentPage -= 1;
        this.load();
    }

    /**
     * paginates data list
     */
    loadList() {
        let begin = (this.currentPage - 1) * this.numberPerPage;
        let end = begin + this.numberPerPage;
        this.pageList = this.list.slice(begin, end);
    }

    /**
     * Load paginated data
     */

    load() {
        this.makeList();
        this.loadList();
    }
}

export default Paginator;