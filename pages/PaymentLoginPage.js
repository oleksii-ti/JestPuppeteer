const Page = require('./Page');

class PaymentLoginPage extends Page {

    async guestLogin() {
        await this.page.waitForSelector("#login-form #guestLogin");
    	this.page.click("#login-form #guestLogin");
        await this.page.waitForNavigation({waitUntil: "networkidle0"});
    }

    async login(username) {
        await this.page.waitForSelector("#loginEmail");
    	await this.page.type("#loginEmail", username);
    }

    async password(password) {
        await this.page.waitForSelector("#loginPassword");
    	await this.page.type("#loginPassword", password);
    }

    async submitLogin() {
        await this.page.waitForSelector("#login-submit");
    	this.page.click("#login-submit");
        await this.page.waitForNavigation({waitUntil: "networkidle0"});
    }
}

module.exports = PaymentLoginPage;
