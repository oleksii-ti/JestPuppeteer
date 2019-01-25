const Page = require('./Page');

class ThankYouPage extends Page  {

	async successContainer() { 
		this.page.$eval(".orderSuccessMessage", el => el.textContent) 
	}

    async newsletterForm() { 
    	this.page.click("#register-newsletter-form")
    }

    async newsletterEmail() { 
    	newsletterForm.find("#email")
    }

    async registerForm() { 
    	this.page.click("#register-afterwards-form") 
    }

    async trustedShops() {
	    await this.page.$(".etrusted-checkout-card__container")
    }

    async orderId() {
    	driver.executeScript('return this.page.click("#tsCheckoutOrderNr").text();')
    }

    

}

module.exports = ThankYouPage
