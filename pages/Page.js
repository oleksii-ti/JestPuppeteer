class Page {

    constructor(page) {
        this.page = page;
        this.page.addStyleTag({content: "html * { transition: none!important; }"});
        this.page.setCacheEnabled(false);
    }


    async canonical() {
        return await this.page.$$eval("link[rel='canonical']", hrefs => hrefs.map((a) => {
            return a.href
        })[0]);
    }

    async previous() {
        return await this.page.$$eval("link[rel='prev']", hrefs => hrefs.map((a) => {
            return a.href
        })[0]);
    }

    async next() {
        return await this.page.$$eval("link[rel='next']", hrefs => hrefs.map((a) => {
            return a.href
        })[0]);
    }

    async robots() {
        return await this.page.$$eval("meta[name='robots']", hrefs => hrefs.map((meta) => {
            return meta.content
        })[0]);
    }

    async description() {
        return await this.page.$$eval("meta[name='description']", hrefs => hrefs.map((meta) => {
            return meta.content
        })[0]);
    }


    async log(logText, callback) {
        let start = new Date().getTime();

        await callback();

        let end = new Date().getTime();
        console.info(logText + " finished in " + (end - start));

    }
}


module.exports = Page;