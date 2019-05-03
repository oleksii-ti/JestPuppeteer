const Page = require('./Page');

class ArticlePage extends Page {
    constructor(page) {
        super(page)
        this.page.click("#acceptCookie")
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
            await Promise.all([
                this.page.click("#overlayRight.overlay__content--activeRight .addToCartOverlay .addToCartOverlay__footerToCart"),
                this.page.waitForNavigation({waitUntil: "networkidle0"})
            ]);
        });
    }

    async mainImage() {
        await this.page.$$("#articleContentBlock > div.article__articlePresentation > div > div.articlePresentation__image > div.articleImageForADS.slick-initialized.slick-slider > div > div > div.articleImageForADS__image.slick-slide.slick-current.slick-active > a > img");

    }

    async zipCodeInput(zip) {
        await super.log("zipCodeInput", async () => {
            const selector = ".article__articlePresentation #zipcode-logistic-input";
            await this.page.waitForSelector(selector);
            await this.page.evaluate(_=> { window.scrollBy(0, window.innerHeight); });
            await this.page.evaluate( () => document.getElementById("zipcode-logistic-input").value = "");
            await this.page.type(selector, zip, { delay: 50 });
        });

    }


    async waitForCartOverlay() {
        await this.page.waitForSelector("#overlayRight.overlay__content--activeRight .addToCartOverlay");
    }

    //Filters
    async openFilter(type) {
        await this.page.click(".filter #" + type);
        await this.page.waitForSelector("singleFilter__content singleFilter__content--open");
    }

    async setFilter(type) {
        await this.page.click("span[data-value=" + type + "]");
    }

}

module.exports = ArticlePage;
