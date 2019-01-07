const Page = require('./Page');

class PaymentMethodPage extends Page  {
    async selectPayment(type) {
        console.info('Start wait')
        await this.page.waitForNavigation({ waitUntil: 'load' });
        console.info('Finish wait')
        this.page.click("." + type + "PaymentForm__radioSelect");
   }

    async confirmPayment(type) {
    
        console.info("." + type + "PaymentForm button")
        this.page.click("." + type + "PaymentForm button");
   }

// 
}


module.exports = PaymentMethodPage

// let idAttribute = await page.$eval('div', div => div.id);
// #responsive > div.mainContent > div.container > div.wrapper--b.cartOverviewContent > div.cartOverview__cart > div.cartOverview > div.cartOverview__checkoutButton > button