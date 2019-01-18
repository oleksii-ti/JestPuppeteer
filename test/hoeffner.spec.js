require("../commonTestRequirements");

const puppeteer = require('puppeteer');
console.log("GLOBALS: " + global);

let page;
let browser;
const bwidth = 1024;
const bheight = 768;
jest.setTimeout(100000);

describe('Checkout', () => {


    beforeAll(async () => {


        browser = await puppeteer.launch({headless: false, devtools: false,  args: [
                '--disable-infobars',
                '--window-size=${ bwidth },${ bheight }'
            ],}); // , args: ['--proxy-server=tyshchenko:alexalex@pswdf216.kriegerit.de:8080']
		page = await browser.pages().then(pageArray => pageArray[0]);
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

        await page.on("pageerror", function(err) {
            theTempValue = err.toString();
            console.log("Page error: " + theTempValue);
        });

    });

	beforeEach(async () => {

	});

	afterAll(async () => {
		await page.waitFor(2000);
		await browser.close();
	});


	it.each(["guest"])('PayPal as %s', async (user) => {

        await page.goto(global.host + global.defaultArtikel, {waitUntil: 'load'});
		
		const article = new ArticlePage(page);
		await article.zipCodeInput(global.zip);
        // await page.evaluate(() => {debugger;});
        await article.addToCartLogistic();
		await article.goToCartButton();

		const cart = new CartPage(page);
		await cart.goToCheckout();

		const loginAction = new LoginAction(page);
		await loginAction.checkoutAs(user);


        const payment = new PaymentMethodPage(page);
        await payment.selectPayment("paypal");
        await payment.confirmPayment("paypal");

		const summary = new PaymentSummaryPage(page);
        await summary.termsAndConditions();
        await summary.submitPayment();

        const paypal = new PayPal(page);
        await paypal.confirmPaypalForm();

        // const thankYou = new ThankYouPage(page);
        // expect(thankYou.successContainer).toContain("Vielen Dank!");

	});

});