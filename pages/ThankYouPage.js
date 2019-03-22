const Page = require('./Page');

class ThankYouPage extends Page {
    constructor(page) {
        super(page)
    }

	async successContainer() { 
		this.page.$eval(".orderSuccessMessage", el => el.textContent) 
	}

    async newsletterForm() { 
    	this.page.click("#register-newsletter-form");
	}

    async newsletterEmail() { 
    	newsletterForm.find("#email");
    }

    async registerForm() { 
    	this.page.click("#register-afterwards-form");
    }

    async trustedShops() {
	    await this.page.waitForSelector(".etrusted-checkout-card__container");
    }

    async orderId() {
        return await this.page.evaluate(() => document.getElementById('tsCheckoutOrderNr').innerText);
        // await console.log(text);
        // return text;

    }

    

}

module.exports = ThankYouPage;
