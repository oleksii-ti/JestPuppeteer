jest.setTimeout(100000);

beforeAll(async () => {
     browser = await new Browser();
    await browser.start();

    page = await browser.pageOpen();

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
    });

    cmsClient = await new CMSClient();
    cmsClient.cmsData = await cmsClient.getCMSContext();
    console.log("first before all")
});

afterAll(async () => {
    // await page.waitFor(125);
    await browser.close();
});

afterEach(async () => {
     // await page.close();
});

