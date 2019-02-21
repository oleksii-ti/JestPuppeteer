const Page = require('../Page');

class MattressAdvicePage extends Page {
    constructor(page) {
        super(page);
    }

    async emailAddressInput(text) {
        await this.page.type("#emailOptional", text)
    }

    async salutationSelectBox(text) {
        await this.page.select("select#salutation", text)
    }

    async firstnameInput(text) {
        await this.page.type("#firstName", text)
    }

    async lastnameInput(text) {
        await this.page.type("#lastName", text)
    }

    async areaCodeInput(text) {
        await this.page.type("#areacode", text)
    }

    async telephoneNumberInput(text) {
        await this.page.type("#phoneNumber", text)
    }

    async commentInput(text) {
        await this.page.type("#comment", text)
    }

    async submitButton(text) {
        await this.page.click("#submit-button")
    }

    async dataProtectionLink(text) {
        // await this.page.type('a[href="/datenschutz"]')[0]
    }
}

module.exports = MattressAdvicePage;
