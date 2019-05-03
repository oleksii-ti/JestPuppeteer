require("../../commonTestRequirements");

describe('SEO', () => {

    titlePattern = new RegExp(".* bei " + global.shopTitle + "\$");
    descriptionPattern = new RegExp(".* bei " + global.shopTitle + " online kaufen. \\d+ Artikel verfügbar im Shop");

    it.each([

        ["/big-sofas", "", "", "index,follow", global.host + "/big-sofas", undefined, undefined],
        ["/big-sofas", "", "?par=val", undefined, global.host + "/big-sofas", undefined, undefined],
        ["/sofas", "", "", "index,follow", global.host + "/sofas", undefined, "/2"],
        ["/sofas", "", "?par=val", undefined, global.host + "/sofas", undefined, undefined],
        ["/sofas", "/2", "", "index,follow", global.host + "/sofas/2", "", "/3"],
        ["/sofas", "/2", "?par=val", undefined, global.host + "/sofas/2", undefined, undefined],
        ["/sofas", "/3", "", "index,follow", global.host + "/sofas/3", "/2", "/4"],
        ["/sofas", "/3", "?par=val", undefined, global.host + "/sofas/3", undefined, undefined],
        ["/geschirrablagen", "", "", "noindex,follow", undefined, undefined, undefined],
        ["/geschirrablagen", "", "?par=val", "noindex,follow", undefined, undefined, undefined],
        ["/messer_wmf", "", "", "index,follow", global.host + "/messer_wmf", undefined, undefined],
        ["/messer_wmf", "", "?par=val", undefined, global.host + "/messer_wmf", undefined, undefined],
        ["/wmf", "", "", "index,follow", global.host + "/wmf", undefined, "/2"],
        ["/wmf", "", "?par=val", undefined, global.host + "/wmf", undefined, undefined],
        ["/glaeser_leonardo", "", "", undefined, global.host + "/glaeser_leonardo", undefined, undefined]


    ])('Meta Tags %s%s/%s', async (url, pageNum, params, robots, canonical, prev, next) => {

        response = await page.goto(global.hostCredentials + url + pageNum + params, {waitUntil: 'load'});
        const testPage = new Page(page);
        if (next != undefined) {
            next = global.host + url + next;
        }
        if (prev != undefined) {
            prev = global.host + url + prev;
        }
        console.log(url)
        const cmsEntry = await cmsClient.getSEOData(url);

        canonicalHref = await testPage.canonical();
        expect(canonicalHref).toEqual(canonical);
        console.log(cmsEntry);

        prevHref = await testPage.previous();
        expect(prevHref).toEqual(prev);
        console.log(prevHref);

        nextHref = await testPage.next();
        expect(nextHref).toEqual(next);

        robotsContent = await testPage.robots();
        if (cmsEntry["robots"]) {
            expect(robotsContent).toEqual(cmsEntry["robots"]);
        } else {
            expect(robotsContent).toEqual(robots);
        }


        title = await page.title();
        if (cmsEntry["title"]) {
            expect(title).toEqual(cmsEntry["title"]);
        } else {
            expect(title).toMatch(titlePattern);
        }

        description = await testPage.description();
        console.log(description);
        console.log(cmsEntry["description"]);

        if (cmsEntry["description"]) {
            expect(description).toEqual(cmsEntry["description"]);
        } else {
            expect(description).toMatch(descriptionPattern);
        }

    });
});