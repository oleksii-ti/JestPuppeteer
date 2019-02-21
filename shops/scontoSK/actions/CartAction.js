
const CartAction = require('../../../actions/CartAction');

class ScontoSKCartAction extends CartAction {

    constructor(page) {
        super(page)
    }

    async proceedToSummaryPayment() {
        await this.cartPage.scontoClub();
        await this.cartPage.scontoShipping();
        await this.cartPage.goToCheckout();
    }
}

module.exports = ScontoSKCartAction
