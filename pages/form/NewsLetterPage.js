const Page = require('../Page');

class NewsLetterPage extends Page {
    constructor(page) {
        super(page);
        this.registrationConfirmation = ".styledParagraph";

    }

    async form() {
        await this.page.type(".staticPageForm", text);
    }

    async salutationSelectBox(text) {
        await this.page.select("select#salutation", text);
    }

    async firstnameInput(text) {
        await this.page.type("#firstName", text);
    }

    async lastnameInput(text) {
        await this.page.type("#lastName", text);
    }

    async emailAddressInput(text) {
        await this.page.type("#email", text);
    }

    async locationSelectBox(text) {
        await this.page.type("select#location", text);
    }

    async dataProtectionLink() {
        await this.page.type('a[href="/datenschutz"]');
    }

    async submitButton() {
        await this.page.click("#submit-button");
        await this.page.waitForNavigation({waitUntil: "networkidle0"});
    }



}

module.exports = NewsLetterPage;
