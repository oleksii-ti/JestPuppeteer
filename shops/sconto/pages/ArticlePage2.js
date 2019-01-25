const ArticlePage2 = require('../../../pages/ArticlePage');

class ScontoArticlePage extends ArticlePage2 {
	constructor(page) {
        super(page)
    }

    //Click twice because of temporary issue with campaigns 
    async addToCartLogistic() {
    	await this.page.waitForSelector('#articlePresentationAddToCart button#add-to-cart-logistic', {visible: true});
		await this.page.click('#articlePresentationAddToCart button#add-to-cart-logistic');
        await this.page.waitFor(77771)
	}
}

module.exports = ScontoArticlePage
