class BasePage {
	constructor(page) {
		this.page = page;
		this.page.addStyleTag({content: "html * { transition: none!important; }"});
	}
}


module.exports = BasePage