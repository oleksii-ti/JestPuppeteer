const fetch = require("node-fetch");

class CMSHelper {
    async urlMatcherExport() {
        const data = await fetch("http://cms." + global.shopId + "toolsstage1.krieger-it.mcs-rz.de/api/urlMatcherExport")
            .then(res => (res.text()));

        const entries = [];
        const jsonData = JSON.parse(data);
        // await console.log(jsonData["typesSortByPriority"][0]);
        // await console.log(jsonData["typesSortByPriority"][1]);
        // await console.log(jsonData["typesSortByPriority"][2]);

        for (const entry in jsonData["typesSortByPriority"]) {
            await console.log(entry);

            await entries.push(entry["entries"]);
        }
        await entries.push(jsonData["overwriteAdditionalInformationByUrl"]);
        return entries;
    }

}

module.exports = CMSHelper;
