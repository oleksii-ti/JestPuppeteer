const puppeteer = require('puppeteer');

class BrowserHelper {

    constructor() {
        const args = require('minimist')(process.argv.slice(2));
        let size = args["resolution"];
        if (!size) {
            size = "XL"
        }

        this.size = global.sizes[size];
    }

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
        await this.browser.close();
    }

    async pageOpen() {
        let page2 = await this.browser.newPage();

        await page2.setViewport({width: this.size["width"], height: this.size["height"]});
        return page2;
    }

    async setCookies(page, url) {
        await page.goto(url, {waitUntil: 'networkidle0'});
        const cookiesSet = await page.cookies();
        const cookie = cookiesSet.find(o => o.name === 'MULTIGROUP_TEST');
        const value2 = cookie["value"].replace(/^j\%3A\%5B\d*\%2C\d*/, "j%3A%5B99%2C99")
        await page._client.send('Network.clearBrowserCookies');
        await page.setCookie({
            'name': 'MULTIGROUP_TEST',
            'value': value2
        });
    }
}

module.exports = BrowserHelper;
