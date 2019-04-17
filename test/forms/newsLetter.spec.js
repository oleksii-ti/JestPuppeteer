require("../../commonTestRequirements");

jest.setTimeout(100000);

describe("Forms", () => {

    it("News Letter", async () => {
        await page.goto(global.host + global.newsLetterFormUrl, {waitUntil: "load"});
        const newsLetter = new NewsLetterPage(page);
        await newsLetter.emailAddressInput(global.formData.email);
        await newsLetter.salutationSelectBox("Herr");
        await newsLetter.firstnameInput('Automation');
        await newsLetter.lastnameInput('Testing');
        await newsLetter.locationSelectBox("Kraft Onlineshop");
        await newsLetter.submitButton();
        expect(await page.waitForSelector(newsLetter.registrationConfirmation));
    })

})