class CartAction {

    constructor(page) {
        this.page = page;
        this.cartPage = new CartPage(this.page);
    }

    async proceedToSummaryPayment() {
        await this.cartPage.goToCheckout()
    }
}

module.exports = CartAction
