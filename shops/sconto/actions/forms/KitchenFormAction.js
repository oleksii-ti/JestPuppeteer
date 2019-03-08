class ScontoKitchenFormAction {

    constructor(page) {
        this.page = page;
        this.kitchen = new KitchenFormPage(this.page);
    }

    async setLocation() {
        await this.kitchen.locationSelectBox(global.kitchenForm.location);
    }
}

module.exports = ScontoKitchenFormAction;
