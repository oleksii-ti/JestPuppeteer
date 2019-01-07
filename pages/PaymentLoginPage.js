const Page = require('./Page');

class PaymentLoginPage extends Page {

    async guestLogin() {
        await this.page.waitForSelector("#login-form #guestLogin");
    	this.page.click("#login-form #guestLogin");
        await this.page.waitForNavigation();
    }
}

module.exports = PaymentLoginPage;
