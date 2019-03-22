const Page = require('./Page');

class CatalogPage extends Page {
    constructor(page) {
        super(page)
    }

    //Filters
    async openFilter(type) {
        await this.page.click(".filter #" + type + " > div > div > span:nth-child(2)");
        await this.page.waitForSelector(".singleFilter__content.singleFilter__content--open");
    }

    async setFilter(type) {
        await this.page.click("span[data-value=" + type + "]");
    }

}

module.exports = CatalogPage;
