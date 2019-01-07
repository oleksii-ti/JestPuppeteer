const Page = require('./Page');

class AddressPage extends Page {
    salutationSelect(text) {
    	this.page.select("select#salutation", text);
    }
    async lastnameInput(text) {
    	await this.page.type("#lastname", text);
    }
    async firstnameInput(text) {
    	await this.page.type("#firstname", text);
    }
    async streetnameInput(text) {
    	await this.page.type("#streetName", text);
    }
    async streetNumberInput(text) {
    	await this.page.type("#streetNumber", text);
    }
    async zipCodeInput(text) {
    	await this.page.type("#zipCode", text);
    }
    async townInput(text) {
    	await this.page.type("#town", text);
    }
    async emailInput(text) {
    	await this.page.type("#email", text);
    }
    async continueButton(text) {
    	await this.page.type("#address-submit", text);
    }
    async phoneAreaInput(text) {
    	await this.page.type("#phoneArea", text);
    }
    async phoneInput(text) {
    	await this.page.type("#phone", text);
    }
	async submitAddress() {
		this.page.click("#address-submit")
	}

	async confirmAddress() {
        await this.page.waitForSelector("#responsive > div.fancybox-overlay.fancybox-overlay-fixed > div > div > div > div > div > div > div:nth-child(2) > input")
		this.page.click("#responsive > div.fancybox-overlay.fancybox-overlay-fixed > div > div > div > div > div > div > div:nth-child(2) > input")
	}
}

module.exports = AddressPage;

// let idAttribute = await page.$eval('div', div => div.id);
