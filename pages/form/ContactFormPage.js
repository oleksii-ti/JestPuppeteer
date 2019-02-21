const Page = require('../Page');

class ContactFormPage extends Page {
    constructor(page) {
        super(page);
    }

    async questionSelectBox(text) {
        await this.page.select("#question", text)
    }

    async locationSelectBox(text) {
        await this.page.select("#location", text)
    }

    async salutationSelectBox(text) {
        await this.page.select("#salutation", text)
    }

    async firstNameInput(text) {
        await this.page.type("#firstname", text)
    }

    async lastNameInput(text) {
        await this.page.type("#lastname", text)
    }

    async streetNameInput(text) {
        await this.page.type("#street", text)
    }

    async housenumberInput(text) {
        await this.page.type("#housenumber", text)
    }

    async addressInput(text) {
        await this.page.type("#address", text)
    }

    async zipCodeInput(text) {
        await this.page.type("#zipcode", text)
    }

    async cityInput(text) {
        await this.page.type("#city", text)
    }

    async emailInput(text) {
        await this.page.type("#email", text)
    }

    async telephoneInput(text) {
        await this.page.type("#telephone", text)
    }

    async submitButton() {
        await this.page.click("#submit-button")
    }

    async dataProtectionLink(text) {
        await this.page.type('a[href="/datenschutz"]')
    }

    async customerNumberInput(text) {
        await this.page.type("#customer-number", text)
    }

    async purchaseContractNumberInput(text) {
        await this.page.type("#contract-number", text)
    }

    async articleNumberInput(text) {
        await this.page.type("#article-number", text)
    }

    async commentInput(text) {
        await this.page.type("textarea[name='comment']", text)
    }

    async appointmentConfirmation(text) {
        await this.page.click("#form-confirmation-title", text)
    }

}

module.exports = ContactFormPage;
