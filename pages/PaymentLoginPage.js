const Page = require('./Page');

class PaymentLoginPage extends Page {

    async guestLogin() {
        await this.page.waitForSelector("#guestLogin");
    	this.page.click("#guestLogin");
        await this.page.waitForNavigation({ waitUntil: 'load' });
    }
}

module.exports = PaymentLoginPage;
