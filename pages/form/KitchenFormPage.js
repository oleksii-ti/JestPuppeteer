const Page = require('../Page');

class KitchenFormPage extends Page {
    constructor(page) {
        super(page);
        this.appointmentConfirmation = "div.htmlTile";
        this.approvedZipCode = "div.appointmentAtHomeForm__infoBox";

    }

    async locationSelectBox(text) {
        await this.page.select("select#location", text)
    }

    async postcodeAtHome(text) {
        await this.page.waitForSelector("#postcodeAtHome", {visible: true});
        await this.page.type("#postcodeAtHome", text);
    }

    async postcodeAtHomeSubmitButton(text) {
        await this.page.waitForSelector("#appointmentAtHomeFormSubmit", {visible: true});

        await this.page.click("#appointmentAtHomeFormSubmit", text)
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

    async emailInput(text) {
        await this.page.type("#email", text)
    }

    async areaCodeInput(text) {
        await this.page.type("#areacode", text)
    }

    async telephoneInput(text) {
        await this.page.type("#phoneNumber", text)
    }


    async commentInput(text) {
        await this.page.type("textarea#comment", text)
    }

    async submitButton() {
        await this.page.click("#submit-button");
        await this.page.waitForNavigation({waitUntil: "networkidle0"});
    }


}

module.exports = KitchenFormPage;
