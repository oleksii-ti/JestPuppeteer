const CartPage = require('../../../pages/CartPage');

class ScontoNewsLetterPage extends CartPage {
    constructor(page) {
        super(page);
        this.registrationConfirmation = ".staticPageForm__confirmation";
    }

}

module.exports = ScontoNewsLetterPage;
