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
		this.page.click("#address-submit");
		this.page.waitForSelector(".fancybox-overlay.fancybox-overlay-fixed");
	}

	async confirmAddress() {
        await this.page.waitForSelector(".fancybox-overlay.fancybox-overlay-fixed", {visible:true});
        await this.page.waitFor(250);
        // await this.page.waitFor({until:"networkidle0"})
        await this.page.click(".fancybox-overlay.fancybox-overlay-fixed > div > div > div > div > div > div > div:nth-child(2) > input");
        await this.page.waitForNavigation({waitUntil: "networkidle0"});
	}
}

module.exports = AddressPage;
