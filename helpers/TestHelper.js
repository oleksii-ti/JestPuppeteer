beforeAll(async () => {
    browser = new Browser();
    await browser.start();
});

afterAll(async () => {
    await page.waitFor(125);
    await browser.close();
});

beforeEach(async () => {
    page = await browser.pageOpen(global.hostCredentials);

    // Catch errors
    await page.on("pageerror", function (err) {
        theTempValue = err.toString();

        console.log("Page error: " + theTempValue);
    });

    await page.on("error", function(err) {
        theTempValue = err.toString();

        console.log("Page error: " + theTempValue);
    });
    await page.on('response', response => {
        const status = response.status();

        if ((status >= 300) && (status <= 399)) {
            redirectStatus = response.status();
            redirectUrl = response.headers().location;
        }
    })
});

afterEach(async () => {
    page.close();
});