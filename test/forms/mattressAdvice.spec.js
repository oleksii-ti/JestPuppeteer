require("../../commonTestRequirements");

jest.setTimeout(100000);

describe('Forms', () => {

    it('MattressAdvice', async () => {
        await page.goto(global.host + "/telefonberatung", {waitUntil: 'load'});
        const mattressPage = new MattressAdvicePage(page);
        await mattressPage.salutationSelectBox("Frau");
        await mattressPage.firstnameInput('Tester');
        await mattressPage.lastnameInput('Test');
        await mattressPage.areaCodeInput('030');
        await mattressPage.telephoneNumberInput('12345');
        await mattressPage.emailAddressInput(global.user.email);
        await mattressPage.commentInput('Termin um 10.00');

    })
})