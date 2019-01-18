class LoginAction {

    constructor(page) {
        this.page = page;
        this.login = new PaymentLoginPage(page);
    }

    async checkoutAs(user) {
        if(user == "guest") {
            await this.login.guestLogin();
            const addressPage = new AddressPage(this.page);
            await addressPage.salutationSelect("HERR");
            await addressPage.firstnameInput('Testperson-de');
            await addressPage.lastnameInput('Approved');
            await addressPage.streetnameInput('Hellersbergstraße');
            await addressPage.streetNumberInput( '14');
            await addressPage.zipCodeInput( global.zip);
            await addressPage.townInput('Neuss');
            await addressPage.emailInput(global.user.email);
            await addressPage.phoneAreaInput('0179');
            await addressPage.phoneInput('1231212');
            await addressPage.submitAddress();
            await addressPage.confirmAddress();

        } else if(user == "user") {
            await this.login.login(global.user.email);
            await this.login.password(global.user.password);
            await this.login.submitLogin();
        }
    }
}

module.exports = LoginAction
