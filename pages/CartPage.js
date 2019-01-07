const Page = require('./Page');

class CartPage extends Page  {
    async goToCheckout() {
        await this.page.waitForSelector(".summaryBox__totalPriceAndButton button.button.button--advanceToCheckout");
        this.page.click(".summaryBox__totalPriceAndButton button.button.button--advanceToCheckout .button__label--advanceToCheckout");
        await this.page.waitForNavigation({ waitUntil: 'load' });
   }
// 
}


module.exports = CartPage

// let idAttribute = await page.$eval('div', div => div.id);
// #responsive > div.mainContent > div.container > div.wrapper--b.cartOverviewContent > div.cartOverview__cart > div.cartOverview > div.cartOverview__checkoutButton > button