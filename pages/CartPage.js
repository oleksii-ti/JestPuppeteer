const Page = require('./Page');

class CartPage extends Page  {
    async goToCheckout() {
        // await this.page.evaluate(() => {debugger;});
        await this.page.waitForSelector("div.cartOverview__summaryBox > div > div.totalPriceAndCheckoutButton__totalPriceAndButton > div.totalPriceAndCheckoutButton__button > button");
        await this.page.click("div.cartOverview__summaryBox > div > div.totalPriceAndCheckoutButton__totalPriceAndButton > div.totalPriceAndCheckoutButton__button > button");
        await this.page.waitForNavigation({waitUntil: "networkidle0"});
   }

}

module.exports = CartPage
