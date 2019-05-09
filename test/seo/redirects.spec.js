require("../../commonTestRequirements");

describe.each([

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

])('Redirect %s%s/%s', (url, pageNum, params, robots, canonical, prev, next, status) => {

    beforeAll(async () => {
        response = await browser.gotoUrl(global.hostCredentials + url + pageNum + params, false);
        testPage = new Page(page);
        if (redirectUrl) {
            url = redirectUrl.replace(/\?.*/, "")
        }
        if (next != undefined) {
            next = global.host + url + next;
        }
        if (prev != undefined) {
            prev = global.host + url + prev;
        }
        cmsEntry = await cmsClient.getSEOData(url);

        titlePattern = new RegExp(".* bei " + global.shopTitle + "\$");
        descriptionPattern = new RegExp(".* bei " + global.shopTitle + " online kaufen. \\d+ Artikel verfügbar im Shop");
    });


    it('canonical', async () => {
        canonicalHref = await testPage.canonical();
        expect(canonicalHref).toEqual(canonical);
    });

    it('previous', async () => {
        prevHref = await testPage.previous();
        expect(prevHref).toEqual(prev);
    });

    it('next', async () => {
        nextHref = await testPage.next();
        expect(nextHref).toEqual(next);
    });

    it('robots', async () => {
        robotsContent = await testPage.robots();
        if (cmsEntry["robots"]) {
            expect(robotsContent).toEqual(cmsEntry["robots"]);
        } else {
            expect(robotsContent).toEqual(robots);
        }
    });

    it('title', async () => {
        title = await page.title();
        if (cmsEntry["title"]) {
            expect(title).toEqual(cmsEntry["title"]);
        } else {
            expect(title).toMatch(titlePattern);
        }
    });

    it('description', async () => {
        description = await testPage.description();
        if (cmsEntry["description"]) {
            expect(description).toEqual(cmsEntry["description"]);
        } else {
            expect(description).toMatch(descriptionPattern);
        }
    });

    it('status', async () => {
        if (status) {
            expect(redirectStatus).toEqual(status);
        }
    });

});
