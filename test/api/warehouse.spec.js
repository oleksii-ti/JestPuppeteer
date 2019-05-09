require("../../commonTestRequirements");

jest.setTimeout(1000000);

describe.skip('API', () => {
    beforeEach(async () => {
        await page.on('response', response => {
            if (response.url() == global.host + "/api/stock/warehouse") {
                console.log(response.url() + " " + response.status());
            }
        })
    });

    it('api/stock/warehouse', async (user) => {
        await browser.gotoUrl(global.host + global.defaultArtikel, false);

        const article = new ArticlePage(page);

        for (let i = 0; i < 10000; i++) {
            await article.zipCodeInput(global.zip);
            await page.waitForSelector('#add-to-cart-logistic:not(.button--hidden)');
            await article.zipCodeInput("12459");
            await page.waitForSelector('#add-to-cart-logistic:not(.button--hidden)');

        }
    })
});