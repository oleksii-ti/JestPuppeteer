const Page = require('./Page');

class ArticlePage extends Page {

    async getTitle() {
        return this.page.title();
    }

    async addToCart() { 
    	this.page.click("#articlePresentationAddToCart button#add-to-cart");
    }

    async addToCartLogistic() { 
    	await this.page.waitForSelector('#add-to-cart-logistic:not(.button--hidden)');
		this.page.click("#add-to-cart-logistic");
	}

	async goToCartButton() {
    	await this.waitForCartOverlay();
	 	this.page.click("#overlayRight.overlay__content--activeRight .addToCartOverlay .addToCartOverlay__footerToCart");
        await this.page.waitForNavigation({ waitUntil: 'load' });
	}


    async zipCodeInput(zip) {
    	await this.page.type(".article__articlePresentation #zipcode-logistic-input", zip, { delay: 100 });
    	  }

    async waitForCartOverlay() {
    	await this.page.waitForSelector('#overlayRight.overlay__content--activeRight .addToCartOverlay', {visible:true});
    }
 
}


module.exports = ArticlePage

// let idAttribute = await page.$eval('div', div => div.id);
