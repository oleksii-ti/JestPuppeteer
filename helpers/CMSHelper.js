const fetch = require("node-fetch");

const puppeteer = require('puppeteer');



class CMSHelper {

    constructor() {
        this.categories = {
            "/sofas": "5811ae119889716901674bc3",
            "/big-sofas": "56419858d15d04437ed42708",
            "/leuchtmittel":"56419858d15d04437ed42675"
        };


    }

    // async login() {
    //     this.browser = await puppeteer.launch({headless: false, devtools: true, args: [
    //             '--disable-infobars']});
    //
    //     this.page = await this.browser.newPage();
    //
    //     await this.page.goto("http://cms.hoeffnertoolsstage1.krieger-it.mcs-rz.de/login", {waitUntil: 'networkidle0'});
    //     await this.page.type("#loginEmail", 'admin@cms.hoeffner.de');
    //     await this.page.type("input[@name='password']", '15peppermint');
    //     await this.page.click(".btn.btn-lg.btn-primary.btn-block");
    //     await this.page.waitForNavigation({waitUntil: "networkidle0"});
    //
    // }
    //
    // async setTreshold(category, value) {
    //     await this.page.goto("http://cms.hoeffnertoolsstage1.krieger-it.mcs-rz.de/type/categories/" + this.categories[category])
    //     await this.page.waitForNavigation({waitUntil: "networkidle0"});
    //     await this.page.type("#minEntriesForDisplayInTree", value);
    //     await this.page.click(".save.btn.btn-default");
    // }


    async updateCategory(param) {
        const data = new URLSearchParams();
        for (const pair of new FormData(this.saveForm)) {
            data.append(pair);
        }

        for (const pair of new FormData(param)) {
            data.append(pair);
        }

        const updateData = fetch("http://cms.hoeffnertoolsstage1.krieger-it.mcs-rz.de/type/categories/save",
            {
                body: data,
                method: "post"
            });
        await console.log(await updateData)

    }

    async getCMSContext() {
        const data = await fetch("http://cms." + global.shopId + "toolsstage1.krieger-it.mcs-rz.de/api/urlMatcherExport")
            .then(res => (res.text()));

        const entries = [];
        const jsonData = JSON.parse(data);

        Object.values(jsonData["typesSortByPriority"]).forEach( async value => {
            await entries.push(value["entries"]);
        });
        await entries.push(jsonData["overwriteAdditionalInformationByUrl"]);
        return await entries.concat.apply([],entries);
    }

    async getSEOData(cmsContext, url) {
        let seoData = {};
        let cmsEntry = cmsContext.find((item) => item['matchingUrl'] == url);
        if (cmsEntry == null) {
            cmsEntry = cmsContext.find((item) => item['matchingUrl'] == url.replace("/", ""));
        }

        if (cmsEntry["additionalInformations"] != null && cmsEntry["additionalInformations"] != []) {
            cmsEntry = cmsEntry["additionalInformations"];
        }

        seoData["robots"] = cmsEntry["metaRobots"];
        seoData["title"] = cmsEntry["metaPageTitle"];
        seoData["description"] = cmsEntry["metaDescription"];
        return seoData;
    }

}

module.exports = CMSHelper;