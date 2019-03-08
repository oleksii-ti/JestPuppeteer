class PayPalPage {

    constructor(page) {
        this.page = page;
    }

    //PayPal test confirm
    async confirmPaypalForm() {
        await this.page.waitForSelector("#form1 #btn_Accept");
        await Promise.all([
             this.page.click("#form1 #btn_Accept"),
             this.page.waitForNavigation({waitUntil: "networkidle0"})
        ]);
    }

}

module.exports = PayPalPage
