const ArticlePage = require('../../pages/ArticlePage');

class ScontoArticlePage extends ArticlePage {
	constructor(page) {
        super(page)
    }

    //Click twice because of temporary issue with campaigns 
    async addToCartLogistic() { 
    	await console.log("TEEEEEEEEEEEE");
    	await this.page.waitForSelector('#add-to-cart-logistic:not(.button--hidden)');
		await this.page.click('#add-to-cart-logistic:not(.button--hidden)');
		await sthis.page.click('#add-to-cart-logistic');
	} 
}

module.exports = ScontoArticlePage
