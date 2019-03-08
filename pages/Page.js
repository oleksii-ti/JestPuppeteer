class Page {
    constructor(page) {
        this.page = page;
        this.page.addStyleTag({content: "html * { transition: none!important; }"});
        this.page.setCacheEnabled(false);
    }

    async open(url) {
        await this.page.goto(url, {waitUntil: 'load'});

        // Cookies
        await page.goto(global.host, {waitUntil: 'networkidle0'});
        const cookiesSet = await page.cookies();
        const cookie = cookiesSet.find(o => o.name === 'MULTIGROUP_TEST');
        const value2 = cookie["value"].replace(/^j\%3A\%5B\d*\%2C\d*/, "j%3A%5B99%2C99")
        await page._client.send('Network.clearBrowserCookies');
        await page.setCookie({
            'name': 'MULTIGROUP_TEST',
            'value': value2
        });

        const cookiesSet1 = await page.cookies();
        console.log(cookiesSet1.find(o => o.name === 'MULTIGROUP_TEST')["value"]);
    }

    // var baseAction = ( block ) => block();


    async log(logText, callback) {
        let start = new Date().getTime();

        await callback();

        let end = new Date().getTime();
        console.info(logText + " finished in " + (end - start));

    }
}


module.exports = Page