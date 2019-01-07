const Page = require('./Page');

class PaymentMethodPage extends Page  {
    async selectPayment(type) {
        await this.page.click("." + type + "PaymentForm__radioSelect");
   }

    async confirmPayment(type) {
        await this.page.click("." + type + "PaymentForm button");
        await this.page.waitForNavigation({ waitUntil: 'load' });
   }

// 
}


module.exports = PaymentMethodPage

// let idAttribute = await page.$eval('div', div => div.id);
// #responsive > div.mainContent > div.container > div.wrapper--b.cartOverviewContent > div.cartOverview__cart > div.cartOverview > div.cartOverview__checkoutButton > button