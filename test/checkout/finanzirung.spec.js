require("../../commonTestRequirements");

jest.setTimeout(100000);

describe('Checkout', () => {

    // it.each(["guest", "user"])('PayPal as %s', async (user) => {
    //     await page.goto(global.host + global.defaultArtikel, {waitUntil: 'load'});
    //
    //     const article = new ArticlePage(page);
    //     await article.zipCodeInput(global.zip);
    //     await article.addToCartLogistic();
    //     await article.goToCartButton();
    //
    //     const cartAction = new CartAction(page);
    //     await cartAction.proceedToSummaryPayment();
    //
    //     const loginAction = new LoginAction(page);
    //     await loginAction.checkoutAs(user);
    //
    //
    //     const payment = new PaymentMethodPage(page);
    //     await payment.selectPayment("eFinancing");
    //     await payment.confirmPayment("eFinancing");
    //
    //     const summary = new PaymentSummaryPage(page);
    //     await summary.termsAndConditions();
    //     await summary.submitPayment();
    //
    //     const paypal = new PayPal(page);
    //     await paypal.confirmPaypalForm();
    //
    //     const thankYou = new ThankYouPage(page);
    //     await thankYou.trustedShops();
    // })
});