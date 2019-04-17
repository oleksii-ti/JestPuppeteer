require("../../commonTestRequirements");

jest.setTimeout(100000);

describe('SEO', () => {


    beforeAll(async () => {

        browser = await puppeteer.launch({
            headless: true, devtools: false, args: [
                '--disable-infobars',
                '--disable-features=site-per-process'
                // '--window-size=${ bwidth },${ bheight }'
            ]
        }); // , args: ['--proxy-server=tyshchenko:alexalex@pswdf216.kriegerit.de:8080']
        cmsClient = await new CMSClient();
        cmsData = await cmsClient.getCMSContext();

        titlePattern = new RegExp(".* bei " + global.shopTitle + "\$");
        descriptionPattern = new RegExp(".* bei " + global.shopTitle + " online kaufen. \\d+ Artikel verfügbar im Shop");

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
        page = await newPageWithNewContext(browser);
        await page.setViewport({width: bwidth, height: bheight});

        // Catch errors
        await page.on("pageerror", function (err) {
            theTempValue = err.toString();

            console.log("Page error: " + theTempValue);
        });
        // await page.setRequestInterception(true);

        page.on('response', response => {
            const status = response.status();
            // if ('xhr' == response.request().resourceType()){
                console.log(response.request().resourceType());
                console.log(response.url());
                console.log(response.status());
            // }
            console.log(response.url());
            if ((status >= 300) && (status <= 399)) {
                redirectStatus = response.status();
                redirectUrl = response.headers().location;
            }
        })
        page.on('request', response => {
            const status = response.status();
            // if ('xhr' == response.request().resourceType()){
            console.log(response.request().resourceType());
            console.log(response.url());
            console.log(response.status());
            // }

        })
        page.on('Network.responseReceived', response => {
            const status = response.status();
            // if ('xhr' == response.request().resourceType()){
            console.log(response.request().resourceType());
            console.log(response.url());
            console.log(response.status());
            // }

        })

    });

    afterEach(async () => {
        page.close();
    });

    afterAll(async () => {
        await page.waitFor(1000);
        await browser.close();
    });


    it.each([

        ["/sofas", "/999", "", "index,follow", global.host + "/sofas", undefined, "/2", 302],
        ["/sofas", "/999", "?par=val", "index,follow", global.host + "/sofas", undefined, "/2", 302],

        ["/sofas_wmf", "", "", "index,follow", global.host + "/sofas", undefined, "/2", 301],
        ["/sofas_wmf", "", "?par=val", "index,follow", global.host + "/sofas", undefined, "/2", 301],
        ["/sofas_wmf", "/999", "", "index,follow", global.host + "/sofas", undefined, "/2", 302],
        ["/sofas_wmf", "/999", "", "index,follow", global.host + "/sofas", undefined, "/2", 302],
        ["/sofas_wmf", "/999", "?par=val", "index,follow", global.host + "/sofas", undefined, "/2", 302],

        ["/messer_wmf", "/999", "", "index,follow", global.host + "/messer_wmf", undefined, undefined, 302],
        ["/messer_wmf", "/999", "?par=val", "index,follow", global.host + "/messer_wmf", undefined, undefined, 302],

        ["/sofas_smart", "", "", "index,follow", global.host + "/sofas", undefined, "/2", 301],
        ["/sofas_smart", "", "?par=val", "index,follow", global.host + "/sofas", undefined, "/2", 301]

    ])('Redirect %s%s/%s', async (url, pageNum, params, robots, canonical, prev, next, status) => {

        response = await page.goto(global.hostCredentials + url + pageNum + params, {waitUntil: 'load'});
        const testPage = new Page(page);
        if (redirectUrl) { url = redirectUrl }
        if (next != undefined) { next = global.host + url + next; }
        if (prev != undefined) { prev = global.host + url + prev; }

        const cmsEntry = await cmsClient.getSEOData(cmsData, url);

        canonicalHref = await testPage.canonical();
        expect(canonicalHref).toEqual(canonical);

        prevHref = await testPage.previous();

        expect(prevHref).toEqual(prev);

        nextHref = await testPage.next();
        expect(nextHref).toEqual(next);

        robotsContent = await testPage.robots();
        if (cmsEntry["robots"]) {
            expect(robotsContent).toEqual(cmsEntry["robots"]);
        } else {
            expect(robotsContent).toEqual(robots);
        }

        title = await page.title();
        if (cmsEntry["title"]) {
            expect(title).toEqual(cmsEntry["title"]);
        } else {
            expect(title).toMatch(titlePattern);
        }

        description = await testPage.description();
        if (cmsEntry["description"]) {
            expect(description).toEqual(cmsEntry["description"]);
        } else {
            expect(description).toMatch(descriptionPattern);
        }

        if (status) {
            expect(redirectStatus).toEqual(status);
        }

    })
});