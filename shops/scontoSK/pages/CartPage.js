const CartPage = require('../../../pages/CartPage');

class ScontoSKCartPage extends CartPage {
    constructor(page) {
        super(page)
    }

    async scontoClub() {
        await this.waitFor(3333);

        await this.page.click("#scontoClubSelection > div.scontoClubSelection__club > div.scontoClubSelection__text.scontoClubSelection__text--club > div.scontoClubSelection__radioButton > span > span.radioButtonWithLabel__radioButton > span");
    }

    async scontoShipping() {
        await this.page.click("#responsive > div.mainContent > div.container > div.wrapper--b.cartOverviewContent > div.cartOverview__cart > div.cartOverview > div.cartOverview__pickupAndSummaryWrapper > div > div > div.selfPickupSelection__delivery > div.selfPickupSelection__text > div.selfPickupSelection__radioButton > span > span.radioButtonWithLabel__radioButton > span");
    }

    async goToCheckout() {
        // await this.page.evaluate(() => {debugger;});
        await this.page.waitForSelector("#responsive > div.mainContent > div.container > div.wrapper--b.cartOverviewContent > div.cartOverview__cart > div.cartOverview > div.cartOverview__summary > div.cartOverview__summaryBox > div > button");
        await this.page.click("#responsive > div.mainContent > div.container > div.wrapper--b.cartOverviewContent > div.cartOverview__cart > div.cartOverview > div.cartOverview__summary > div.cartOverview__summaryBox > div > button");
        await this.page.waitForNavigation({waitUntil: "networkidle0"});
    }
}

module.exports = ScontoSKCartPage

