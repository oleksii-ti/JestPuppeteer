require("../../commonTestRequirements");

jest.setTimeout(100000);

describe("Forms", () => {

    it("Kitchen Form", async () => {
        await page.goto(global.host + global.kitchenForm.url, {waitUntil: "load"});
        const kitchenAction = new KitchenFormAction(page);
        const kitchen = new KitchenFormPage(page);
        await kitchenAction.setLocation();

        await kitchen.salutationSelectBox("Frau");
        await kitchen.firstnameInput('Tester');
        await kitchen.lastnameInput('Test');
        await kitchen.emailInput(global.formData.email);
        await kitchen.areaCodeInput('030');
        await kitchen.telephoneInput('0231263381');
        await kitchen.commentInput('This is a test');
        await kitchen.submitButton();

        expect(await page.waitForSelector(kitchen.appointmentConfirmation));
    })

})