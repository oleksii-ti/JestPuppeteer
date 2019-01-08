const Page = require('./Page');

class CartPage extends Page  {
    async goToCheckout() {
        await this.page.waitForSelector(".summaryBox__totalPriceAndButton button.button.button--advanceToCheckout");
        this.page.click(".summaryBox__totalPriceAndButton button.button.button--advanceToCheckout .button__label--advanceToCheckout");
        await this.page.waitForNavigation({waitUntil: "networkidle0"});
   }

}

module.exports = CartPage
