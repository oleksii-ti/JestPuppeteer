const fetch = require("node-fetch");

class CMSHelper {

    async getCMSContext() {
        const data = await fetch(global.cms.urlExport)
            .then(res => (res.text()));
        const entries = [];
        const jsonData = JSON.parse(data);

        Object.values(jsonData["typesSortByPriority"]).forEach( async value => {
            await entries.push(value["entries"]);
        });
        await entries.push(jsonData["overwriteAdditionalInformationByUrl"]);
        return await entries.concat.apply([],entries);
    }

    async getSEOData(url) {
        let seoData = {};
        let cmsEntry = this.cmsData.find((item) => item['matchingUrl'] == url);
        if (cmsEntry == null) {
            cmsEntry = this.cmsData.find((item) => item['matchingUrl'] == url.replace("/", ""));
        }
        if (cmsEntry["additionalInformations"] != null && cmsEntry["additionalInformations"] != []) {
            cmsEntry = cmsEntry["additionalInformations"];

        } else {
            throw(url + " not found in CMS");
        }

        seoData["robots"] = cmsEntry["metaRobots"];
        seoData["title"] = cmsEntry["metaPageTitle"];
        seoData["description"] = cmsEntry["metaDescription"];
        return seoData;
    }

}

module.exports = CMSHelper;