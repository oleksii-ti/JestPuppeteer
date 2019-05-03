ENV = {
    verbose: true,
    transformIgnorePatterns: ["./node_modules/.*"],
    timers: "real",
    maxConcurrency: 2,
    globals: {
        sizes: {
            S: {width: 230, height: 568},
            M: {width: 768, height: 1024},
            L: {width: 1024, height: 768},
            XL:{width: 1440, height: 960}
        },
        shopId: "hoeffner",
        shopTitle: "Höffner",
        hostCredentials: "https://shop:kbs46042014@stage.hoeffner.de",
        host: "https://stage.hoeffner.de",
        zip: "41460",
        user: {
            email: "bestellungen_test@kos.krieger.de",
            password: "123456qwertz"
        },
        formData: {
            email: "kontaktformular-entwicklung@kbs.krieger.de",
            location: "Köln-Rösrath",
            subject: "Sonstiges"
        },
        newsLetterFormUrl: "/aktionen/newsletter-anmeldung",
        kitchenForm: {
            url: "/kuechen/kuechenformular",
            location: "HBB"
        },
        defaultArtikel: "/artikel/20403532",
        hybris: {
            host: "https://hybrisstage4.krieger-it.mcs-rz.de:9002/kbsrestadapter",
            auth: {
                username: "rest",
                password: "password"
            }
        },
        cms:{
            urlExport: "http://cms.hoeffnertoolsstage1.krieger-it.mcs-rz.de/api/urlMatcherExport"
        }
    }
};

module.exports = ENV;