const Page = require('./Page');

class PaymentMethodPage extends Page  {
    async selectPayment(type) {
        await this.page.click("." + type + "PaymentForm__radioSelect");
        // await this.page.waitFor(500);

   }

    async confirmPayment(type) {
        await this.page.waitForSelector(".paypalPaymentForm__paymentContent", {visible: true});
        this.page.click("." + type + "PaymentForm button");
        await this.page.waitForNavigation({waitUntil: "networkidle0"});
   }

}


module.exports = PaymentMethodPage
