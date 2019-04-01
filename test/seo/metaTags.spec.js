require("../../commonTestRequirements");

const puppeteer = require('puppeteer');
console.log("GLOBALS: " + global);

let page;
let browser;
const bwidth = 1300;
const bheight = 900;
jest.setTimeout(100000);

describe('Checkout', () => {


    beforeAll(async () => {


        browser = await puppeteer.launch({
            headless: false, devtools: false, args: [
                '--disable-infobars',
                '--disable-features=site-per-process',
                '--window-size=${ bwidth },${ bheight }'
            ]
        }); // , args: ['--proxy-server=tyshchenko:alexalex@pswdf216.kriegerit.de:8080']

    });

    async function newPageWithNewContext(browser) {
        // const {browserContextId} = await browser._connection.send('Target.createBrowserContext');
        // page = await browser._createPageInContext(browserContextId);
        page = await browser.newPage();
        // page.browserContextId = browserContextId;
        return page;
    }


    beforeEach(async () => {
        // Def page
        page = await newPageWithNewContext(browser)
        await page.setViewport({width: bwidth, height: bheight})
        // Cookies
        await page.goto(global.host, {waitUntil: 'networkidle0'});
        const cookiesSet = await page.cookies();
        const cookie = cookiesSet.find(o => o.name === 'MULTIGROUP_TEST');
        const value2 = cookie["value"].replace(/^j\%3A\%5B\d*\%2C\d*/, "j%3A%5B99%2C99")
        await page._client.send('Network.clearBrowserCookies');
        await page.setCookie({
            'name': 'MULTIGROUP_TEST',
            'value': value2
        });

        const cookiesSet1 = await page.cookies();
        console.log(cookiesSet1.find(o => o.name === 'MULTIGROUP_TEST')["value"]);

        // Catch errors
        await page.on("pageerror", function (err) {
            theTempValue = err.toString();

            console.log("Page error: " + theTempValue);
        });
        // await page.setRequestInterception(true);


        // Catch     requests
        // page.on('request', request => {
        // console.log(request.url()); });

    });

    afterEach(async () => {
        page.close();
    });

    afterAll(async () => {
        await page.waitFor(1000);
        await browser.close();
    });


    it.each([

        ["/big-sofas", "", "", "index,follow", "/big-sofas", null, null],
        // ["/big-sofas", "", "?par=val", null, "/big-sofas", null, null],
        // ["/sofas", "", "", "index,follow", "/sofas", null, "/2"],
        // ["/sofas", "", "?par=val", null, "/sofas", null, null],
        // ["/sofas", "/2", "", "index,follow", "/sofas/2", "", "/3"],
        // ["/sofas", "/2", "?par=val", null, "/sofas", null, null],
        // ["/sofas", "/3", "", "index,follow", "/sofas/3", "/2", "/4"],
        // ["/sofas", "/3", "?par=val", null, "/sofas/3", null, null],
        // ["/geschirrablagen", "", "", "noindex,follow", null, null, null],
        // ["/geschirrablagen", "", "?par=val", "noindex,follow", null, null, null],
        // ["/messer_wmf", "", "", "index,follow", "/messer_wmf", null, null],
        // ["/messer_wmf", "", "?par=val", null, "/messer_wmf", null, null],
        // ["/wmf", "", "", "index,follow", "/wmf", null, "/2"],
        // ["/wmf", "", "?par=val", null, "/wmf", null, null]

    ])('Meta Tags %s with %s', async (url, page_url, params, robots, canonical, prev, next) => {
        const cmsClient = await new CMSClient();
        const cmsData = await cmsClient.getCMSContext();
        const cmsEntry = await cmsClient.getSEOData(cmsData, url);


        await console.log(cmsEntry);


        await page.goto(global.host + url, {waitUntil: 'load'});






            // if (robots == null) {
            //     expect(page.$("meta[name='robots']") instanceof geb.navigator.EmptyNavigator
            // } else if (cmsEntry && cmsEntry["metaRobots"]) {
            //     expect(page.$("meta[name='robots'][content='%s']", cmsEntry["metaRobots"])
            //
            // } else {
            //     assert
            //     $("meta[name='robots'][content='${robots}']")
            // }

            // if (canonical != null) {
        // await  expect(await page.$("link[rel='canonical']").attribute("href") == "${host}${url}${page}");
        await  expect(await page.$$eval("link[rel='canonical']", a => a.href) == global.host + url + page_url);
            // } else {
            //     assert
            //     $("link[rel='canonical']") instanceof geb.navigator.EmptyNavigator
            // }

            // if (prev != null) {
            //     assert
            //     $("link[rel='prev']").getAttribute("href") == "${host}${url}${prev}"
            // } else {
            //     assert
            //     $("link[rel='prev']") instanceof geb.navigator.EmptyNavigator
            // }
            //
            // if (next != null) {
            //     assert
            //     $("link[rel='next']").getAttribute("href") == "${host}${url}${next}"
            // } else {
            //     assert
            //     $("link[rel='next']") instanceof geb.navigator.EmptyNavigator
            //
            // }
            //
            // if (cmsEntry && cmsEntry["metaPageTitle"]) {
            //
            //     assert driver.getTitle() == cmsEntry["metaPageTitle"]
            // } else {
            //     def
            //     titlePattern = ".* bei ${shopTitle[System.getProperty("
            //     shopId
            //     ")]}\$"
            //     assert
            //     driver.getTitle() = ~titlePattern
            // }
            //
            // if (cmsEntry && cmsEntry["metaDescription"]) {
            //     assert
            //     $("meta[name='description']").getAttribute("content") == cmsEntry["metaDescription"]
            // } else {
            //     def
            //     descriptionPattern = ".* bei ${shopTitle[System.getProperty("
            //     shopId
            //     ")]} online kaufen. \\d+ Artikel verfügbar im Shop\$"
            //     assert
            //     $("meta[name='description']").getAttribute("content") = ~descriptionPattern
            // }
        //

        await page.waitFor(9999);

    })
});