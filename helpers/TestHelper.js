// const page;

beforeAll(async () => {
     browser = await new Browser();
    await browser.start();

    cmsClient = await new CMSClient();
    cmsClient.cmsData = await cmsClient.getCMSContext();
});

// afterAll(async () => {
//     // await page.waitFor(125);
//     await browser.close();
// });
jest.setTimeout(90000);

beforeEach(async () => {
    console.log("beforeEach start:");

    page = await browser.pageOpen();
    // await browser.setCookies(page, global.hostCredentials);

    // Catch errors
    await page.on("pageerror", function (err) {
        theTempValue = err.toString();

        console.log("Page error: " + theTempValue);
    });
    console.log("pageerror end:");

    await page.on("error", function(err) {
        theTempValue = err.toString();

        console.log("Page error: " + theTempValue);
    });
    console.log("error end:");

    await page.on('response', response => {
        const status = response.status();

        if ((status >= 300) && (status <= 399)) {
            redirectStatus = response.status();
            redirectUrl = response.headers().location;
        }
    })
    console.log("response end:");

});

afterEach(async () => {
    console.log("afterEach:");
     page.close();
});

