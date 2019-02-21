const ArticlePage = require('../../../pages/ArticlePage');

class ScontoSKArticlePage extends ArticlePage {
	constructor(page) {
        super(page)
    }

    //Click twice because of temporary issue with campaigns 
    // async addToCartLogistic() {
    //     await super.log("addToCartLogistic", async () => {
    //         await this.page.waitForSelector('#add-to-cart-logistic');
    //         await this.page.click("#add-to-cart-logistic");
    //     });
    // }

    async zipCodeInput(zip) {
        await super.log("zipCodeInput", async () => {
            //to do nothing
        });

    }
}

module.exports = ScontoSKArticlePage
