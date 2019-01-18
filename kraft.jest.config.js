module.exports = {
    verbose: true,
    transformIgnorePatterns: ["./node_modules/.*"],
    timers: "real",
	globals: {
    	shopId: "sconto",
		host: "https://shop:kbs46042014@stage.moebel-kraft.de",
		zip: "41460",
        user: {
            email: "test-automation.hoeffner@neuland-bfi.de",
			password: "123456qwertz"
        },
		defaultArtikel: "/artikel/20403532"
		
	}
};