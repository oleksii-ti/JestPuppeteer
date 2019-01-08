const Page = require('../pages/ArticlePage');

class ArticlePage extends Page {

    
    //Click twice because of temporary issue with campaigns 
    async addToCartLogistic() { 
    	await this.page.waitForSelector('#add-to-cart-logistic:not(.button--hidden)');
		this.page.click('#add-to-cart-logistic:not(.button--hidden)');
	} 
}

module.exports = ArticlePage
