require("../../commonTestRequirements");

describe.each([

    ["/sofas"],
    ["/artikel/22403722"],
    ["/"],
    ["/kuechenstudio"],
    ["/gartenmoebel"],
    ["/standorte"]

])('Validations %s', (url) => {

    beforeAll(async () => {
        response = await browser.gotoUrl(global.hostCredentials + url, false);
    });

    it('HTML', async () => {
        expect((await page.$$('html body')).length).toEqual(1)

    });

    it('HTML', async () => {
        expect((await page.$$('html head title')).length).toEqual(1)

    });
});