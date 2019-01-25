const Page = require('./Page');

class CartPage extends Page  {
    async goToCheckout() {
        await super.log("goToCheckout", async () => {
            await this.page.waitForSelector(".summaryBox__totalPriceAndButton button.button.button--advanceToCheckout");
            await this.page.click(".summaryBox__totalPriceAndButton button.button.button--advanceToCheckout .button__label--advanceToCheckout");
            await this.page.waitForNavigation({waitUntil: "networkidle2"});
        });
    }
}

module.exports = CartPage
