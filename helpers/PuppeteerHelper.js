const PuppeteerPageLib = require('puppeteer-core/lib/Page');
// PuppeteerPageLib.prototype.navigationClick = async function (selector, options) {
//     await Promise.all([
//          this.click(selector, options),
//          this.waitForNavigation({waitUntil: "networkidle0"})
//     ]);
// };

// PuppeteerPageLib.Page = Page;
//
// /*
// * global.navigationClick = async (__self, selector, options) => {
//     await Promise.all([
//         await __self.click(selector, options),
//         await __self.waitForNavigation({waitUntil: "networkidle0"})
//     ]);
// };
// *
// * */