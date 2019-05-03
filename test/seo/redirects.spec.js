require("../../commonTestRequirements");

describe('SEO', () => {

    titlePattern = new RegExp(".* bei " + global.shopTitle + "\$");
    descriptionPattern = new RegExp(".* bei " + global.shopTitle + " online kaufen. \\d+ Artikel verfügbar im Shop");

    it.each([

        ["/sofas", "/999", "", "index,follow", global.host + "/sofas", undefined, "/2", 302],
        ["/sofas", "/999", "?par=val", "index,follow", global.host + "/sofas", undefined, "/2", 302],

        ["/sofas_wmf", "", "", "index,follow", global.host + "/sofas", undefined, "/2", 301],
        ["/sofas_wmf", "", "?par=val", "index,follow", global.host + "/sofas", undefined, "/2", 301],
        ["/sofas_wmf", "/999", "", "index,follow", global.host + "/sofas", undefined, "/2", 302],
        ["/sofas_wmf", "/999", "", "index,follow", global.host + "/sofas", undefined, "/2", 302],
        ["/sofas_wmf", "/999", "?par=val", "index,follow", global.host + "/sofas", undefined, "/2", 302],

        ["/messer_wmf", "/999", "", "index,follow", global.host + "/messer_wmf", undefined, undefined, 302],
        ["/messer_wmf", "/999", "?par=val", "index,follow", global.host + "/messer_wmf", undefined, undefined, 302],

        ["/sofas_smart", "", "", "index,follow", global.host + "/sofas", undefined, "/2", 301],
        ["/sofas_smart", "", "?par=val", "index,follow", global.host + "/sofas", undefined, "/2", 301]

    ])('Redirect %s%s/%s', async (url, pageNum, params, robots, canonical, prev, next, status) => {

        response = await page.goto(global.hostCredentials + url + pageNum + params, {waitUntil: 'load'});
        const testPage = new Page(page);
        if (redirectUrl) {
            url = redirectUrl.replace(/\?.*/, "")
        }
        if (next != undefined) {
            next = global.host + url + next;
        }
        if (prev != undefined) {
            prev = global.host + url + prev;
        }

        const cmsEntry = await cmsClient.getSEOData(url);

        canonicalHref = await testPage.canonical();
        expect(canonicalHref).toEqual(canonical);

        prevHref = await testPage.previous();

        expect(prevHref).toEqual(prev);

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
        if (cmsEntry["description"]) {
            expect(description).toEqual(cmsEntry["description"]);
        } else {
            expect(description).toMatch(descriptionPattern);
        }

        if (status) {
            expect(redirectStatus).toEqual(status);
        }

    });
});