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
        await super.log("addToCartLogistic", async () => {
            await this.page.waitForSelector('#add-to-cart-logistic:not(.button--hidden)');
            await this.page.click("#add-to-cart-logistic");
        });
    }

	async goToCartButton() {
        await super.log("goToCartButton", async () => {
            await this.waitForCartOverlay();
            await this.page.click("#overlayRight.overlay__content--activeRight .addToCartOverlay .addToCartOverlay__footerToCart");
            await this.page.waitForNavigation({waitUntil: "networkidle0"});
        });
    }

    async zipCodeInput(zip) {
        await super.log("zipCodeInput", async () => {
            const selector = ".article__articlePresentation #zipcode-logistic-input";
            await this.page.waitForSelector(selector);
            await this.page.evaluate(_=> { window.scrollBy(0, window.innerHeight); });
            await this.page.evaluate( () => document.getElementById("zipcode-logistic-input").value = "");
            await this.page.type(selector, zip, { delay: 200 });
        });

    }


    async waitForCartOverlay() {
        await this.page.waitForSelector("#overlayRight.overlay__content--activeRight .addToCartOverlay");
    }

}

module.exports = ArticlePage
