const fetch = require("node-fetch");

class CMSHelper {


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

        console.log(cmsEntry);

        seoData["robots"] = cmsEntry["metaRobots"];
        seoData["title"] = cmsEntry["metaPageTitle"];
        seoData["description"] = cmsEntry["metaDescription"];
        return seoData;


    }

}

module.exports = CMSHelper;
