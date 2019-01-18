const Page = require('./Page');

class ArticlePage extends Page {
    constructor(page) {
        super(page)
    }
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
        await this.page.waitForNavigation({waitUntil: "networkidle0"});
	}

    async zipCodeInput(zip) {
        const selector = ".article__articlePresentation #zipcode-logistic-input";
        await this.page.waitForSelector(selector);
        await this.page.evaluate( () => document.getElementById("zipcode-logistic-input").value = "");
        await this.page.type(selector, zip, { delay: 200 });
    	  }

    async waitForCartOverlay() {
    	await this.page.waitForSelector('#overlayRight.overlay__content--activeRight .addToCartOverlay', {visible:true});
    }
 
}

module.exports = ArticlePage
