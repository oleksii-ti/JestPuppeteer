module.exports = {
    verbose: true,
    transformIgnorePatterns: ["./node_modules/.*"],
    timers: "real",
    globals: {
        shopId: "hoeffner",
        shopTitle: "Höffner",
        hostCredentials: "https://shop:kbs46042014@stage.hoeffner.de",
        host: "https://stage.hoeffner.de",
        // host: "https://www.hoeffner.de",
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
        }
    }

};