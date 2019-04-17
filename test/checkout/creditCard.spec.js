require("../../commonTestRequirements");

jest.setTimeout(100000);

describe('Checkout', () => {

    it.each([
        ["guest", "Visa", "4000000000000002"]
        // ["guest", "MasterCard", "5300000000000006"],
        // ["user",  "Visa", "4000000000000002"],
        // ["user",  "MasterCard", "5300000000000006"]
    ])('Credit Card as %s with %s', async (user, card, cardNumber) => {
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
        await payment.selectPayment("creditCard");
        await payment.fillCreditCardForm(cardNumber);

        const summary = new PaymentSummaryPage(page);
        await summary.termsAndConditions();
        await summary.submitPayment();
        await summary.confirmCreditCard();

        const thankYou = new ThankYouPage(page);
        await thankYou.trustedShops();
    })
});