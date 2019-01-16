const Page = require('./Page');

class PaymentMethodPage extends Page  {
    async selectPayment(type) {
        await this.page.click("." + type + "PaymentForm__radioSelect");
   }

    async confirmPayment(type) {
        await this.page.waitForSelector(".paypalPaymentForm__paymentContent", {visible: true});
        await this.page.waitFor(250)
        this.page.click("." + type + "PaymentForm #postPaymentFormHeader");
        await this.page.waitForNavigation({waitUntil: "networkidle0"});
   }

}

module.exports = PaymentMethodPage
