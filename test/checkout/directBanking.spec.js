require("../../commonTestRequirements");

jest.setTimeout(100000);

describe('Checkout', () => {

    it.each(["user"])('Direct Banking as %s', async (user) => {
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
        await payment.selectPayment("directBanking");
        await payment.confirmPayment("directBanking");

        const summary = new PaymentSummaryPage(page);
        await summary.termsAndConditions();
        await summary.submitPayment();
        await summary.confirmDirectBanking();

        const thankYou = new ThankYouPage(page);
        await thankYou.trustedShops();
        let orderId = await thankYou.orderId();
        const hybris = new HybrisClient();
        await console.log(await hybris.getOrder(orderId));
    })
});