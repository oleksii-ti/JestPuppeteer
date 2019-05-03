require("./jest.config.js");
const deepmerge = require('deepmerge');

module.exports = deepmerge( ENV, {
	globals: {
        shopTitle: "Sconto",
    	shopId: "sconto",
        hostCredentials: "https://shop:kbs46042014@stage.sconto.de",
        host: "https://stage.sconto.de",
        kitchenForm: {
    		url: "/kuechenstudio/beratungstermin",
			location: "SRR"
        },
        newsLetterFormUrl: "/newsletter-anmeldung",
        defaultArtikel: "/artikel/21406881",
	}
});
