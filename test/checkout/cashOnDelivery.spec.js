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


        browser = await puppeteer.launch({headless: false, devtools: true, args: [
                '--disable-infobars',
                '--disable-features=site-per-process',
                '--window-size=${ bwidth },${ bheight }'
            ]}); // , args: ['--proxy-server=tyshchenko:alexalex@pswdf216.kriegerit.de:8080']

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
        await page.setViewport({width: bwidth, height: bheight} )
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
        await page.on("pageerror", function(err) {
            theTempValue = err.toString();

            console.log("Page error: " + theTempValue);  });
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


	it.each(["guest", "user" ])('Cash On Delivery as %s', async (user) => {
        await page.goto(global.host + global.defaultArtikel, {waitUntil: 'load'});

        const article = new ArticlePage(page);
        await article.zipCodeInput(global.zip);
        await article.addToCartLogistic();
        await article.goToCartButton();

        const cartAction = new CartAction(page);
        await cartAction.proceedToSummaryPayment();

        const loginAction = new LoginAction(page);
        await loginAction.checkoutAs(user);


        const payment = new PaymentMethodPage(page);
        await payment.selectPayment("cashOnDelivery");
        await payment.confirmPayment("cashOnDelivery");

        const summary = new PaymentSummaryPage(page);
        await summary.termsAndConditions();
        await summary.submitPayment();

        const thankYou = new ThankYouPage(page);
        await thankYou.trustedShops();
    	})
	});