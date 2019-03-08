module.exports = {
    verbose: true,
    transformIgnorePatterns: ["./node_modules/.*"],
    timers: "real",
    globals: {
    	shopId: "hoeffner",
		host: "https://shop:kbs46042014@stage.hoeffner.de",
        // host: "https://www.hoeffner.de",
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
        newsLetterFormUrl: "/aktionen/newsletter-anmeldung",
        kitchenForm:{
    	    url: "/kuechen/kuechenformular",
            location: "HBB"
        },
        defaultArtikel: "/artikel/20403532"
	}
	
};