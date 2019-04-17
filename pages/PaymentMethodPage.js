const Page = require('./Page');

class PaymentMethodPage extends Page {
    async selectPayment(type) {
        await this.page.click("." + type + "PaymentForm__radioSelect");
        await this.page.waitForSelector("." + type + "PaymentForm__paymentContent", {visible: true});
        await this.page.waitFor(250);
    }

    async confirmPayment(type) {
        await super.log("confirmPayment", async () => {
            await Promise.all([
                this.page.click("." + type + "PaymentForm #postPaymentFormHeader"),
                this.page.waitForNavigation({waitUntil: "networkidle0"})
            ]);
        });
    }

    async invoiceCheckbox() {
        await this.page.click("#invoicePaymentFormCheckbox");
    }

    async fillInvoiceForm(date = "07.07.1960", zip = "0179", phone = "1232121") {
        await this.page.evaluate( () => document.getElementById("invoicePaymentFormFieldBirthDate").value = "");
        await this.page.evaluate( () => document.getElementById("invoicePaymentFormFieldAreaCode").value = "");
        await this.page.evaluate( () => document.getElementById("invoicePaymentFormFieldPhoneNumber").value = "");

        await this.page.type("#invoicePaymentFormFieldBirthDate", date);
        await this.page.type("#invoicePaymentFormFieldAreaCode", zip);
        await this.page.type("#invoicePaymentFormFieldPhoneNumber", phone);
    }

    async fillCreditCardForm(cardNumber) {
        for (const frame of this.page.mainFrame().childFrames()){
            console.log(frame.url())
                }
        let frame = this.page.mainFrame().childFrames()[0]

        await frame.waitForSelector("#payment-cardnumber");

        await frame.type("#payment-cardnumber", cardNumber);
        await frame.type("#payment-cardholdername", "Test");
        await frame.type("#payment-cardholdername", "Test");
        await frame.select("#payment-expirydate-month", "12");
        await frame.select("#payment-expirydate-year", "2021");
        await frame.type("#payment-cvc", "123");
        await frame.click("#payment-submit");
        await this.page.waitForNavigation({waitUntil: "networkidle0"});
    }

}

module.exports = PaymentMethodPage;
