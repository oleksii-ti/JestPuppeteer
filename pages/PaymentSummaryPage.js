const Page = require('./Page');

class PaymentSummaryPage extends Page {

    async termsAndConditions() {
        await this.page.click("#responsive > div.checkoutSummary__content > div.checkoutSummary__boxRightBottom > div.checkoutSummary__summary > div.cartSum > div.cartSum__line--both > div.cartSum__boxRight > div.cartSum__agbBox > div.cartSum__checkbox > div > span.checkbox__checkbox");
       
    }


    async submitPayment() {
    	await this.page.click("#buyNowSubmitId");
        await this.page.waitForNavigation({waitUntil: "networkidle0"});
    }
}

module.exports = PaymentSummaryPage;
