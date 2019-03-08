class KitchenFormAction {

    constructor(page) {
        this.page = page;
        this.kitchen = new KitchenFormPage(this.page);
    }

    async setLocation() {
        await this.kitchen.locationSelectBox(global.kitchenForm.location);
        await this.kitchen.postcodeAtHome("22885");
        await this.kitchen.postcodeAtHomeSubmitButton();
        expect(this.page.waitForSelector(this.kitchen.approvedZipCode));
    }
}

module.exports = KitchenFormAction;
