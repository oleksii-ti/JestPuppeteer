require("../../commonTestRequirements");

jest.setTimeout(100000);

describe("Forms", () => {

    it("Contact", async () => {
        await page.goto(global.host + "/kontakt", {waitUntil: "load"});
        const contact = new ContactFormPage(page);
        await contact.questionSelectBox(global.formData.subject);
        await contact.locationSelectBox(global.formData.location);
        await contact.salutationSelectBox("Herr");
        await contact.firstNameInput("Tester");
        await contact.lastNameInput("Test");
        await contact.streetNameInput("Teststraße");
        await contact.housenumberInput("7");
        await contact.zipCodeInput("51503");
        await contact.cityInput("Rösrath");
        await contact.emailInput(global.formData.email);
        await contact.telephoneInput("0231 - 263381");
        await contact.customerNumberInput("09057647");
        await contact.purchaseContractNumberInput("84376658384");
        await contact.articleNumberInput("4756584");
        await contact.commentInput("Kein Kommentar.");

    })
})