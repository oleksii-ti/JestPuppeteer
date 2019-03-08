module.exports = {
    verbose: true,
    transformIgnorePatterns: ["./node_modules/.*"],
    timers: "real",
	globals: {
    	shopId: "sconto",
		host: "https://shop:kbs46042014@stage.sconto.de",
		zip: "41460",
        user: {
            email: "test-automation.hoeffner@neuland-bfi.de",
			password: "123456qwertz"
        },
        formData: {
            email: "kontaktformular-entwicklung@kbs.krieger.de",
            location: "Köln-Rösrath",
            subject: "Sonstiges"
        },
        kitchenForm: {
    		url: "/kuechenstudio/beratungstermin",
			location: "SRR"
        },
        newsLetterFormUrl: "/newsletter-anmeldung",

        defaultArtikel: "/artikel/21406881"
		
	}
};