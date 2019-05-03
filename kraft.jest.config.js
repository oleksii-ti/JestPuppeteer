require("./jest.config.js");
const deepmerge = require('deepmerge');

module.exports = deepmerge( ENV, {

	globals: {
    	shopId: "kraft",
		host: "https://stage.moebel-kraft.de",
		hostCredentials: "https://shop:kbs46042014@stage.moebel-kraft.de",
		defaultArtikel: "/artikel/20403532",
	}
});
