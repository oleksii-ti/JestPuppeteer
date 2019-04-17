const puppeteer = require('puppeteer');

class BrowserHelper {

    async start() {
        let browser = await puppeteer.launch({
            headless: false, devtools: false, args: [
                '--disable-infobars',
                '--disable-features=site-per-process'
            ]
        });

        this.browser = browser;
        return browser;
    }

    async close() {
        await this.browser.close()
    }

    async pageOpen(url) {
        let page = await this.browser.newPage();

        const args = require('minimist')(process.argv.slice(2));
        let size = args["resolution"];
        if(!size) {
            size = "XL"
        }
        await page.setViewport({width: global.sizes[size]["width"], height: global.sizes[size]["height"]});

        // Cookies
        await page.goto(url, {waitUntil: 'networkidle0'});
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
        return page;
    }
}

module.exports = BrowserHelper;
