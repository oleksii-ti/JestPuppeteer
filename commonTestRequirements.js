require('./helpers/PuppeteerHelper');

function smartRequire(fileName) {
	try {
        return require("./shops/" + global.shopId + "/" + fileName);
    } catch (e) {
        return require('./' + fileName);
    };
}

global.HybrisClient = smartRequire("helpers/HybrisHelper")
global.CMSClient = smartRequire("helpers/CMSHelper")
global.Page = smartRequire('pages/Page');
global.ArticlePage = smartRequire('pages/ArticlePage');
global.CatalogPage = smartRequire('pages/CatalogPage');
global.CartPage = smartRequire('pages/CartPage');
global.AddressPage = smartRequire('pages/AddressPage');
global.PaymentMethodPage = smartRequire('pages/PaymentMethodPage');
global.PaymentLoginPage = smartRequire('pages/PaymentLoginPage');
global.PaymentSummaryPage = smartRequire('pages/PaymentSummaryPage');
global.PayPal = smartRequire('pages/checkout/PayPalPage.js');
global.ThankYouPage = smartRequire('pages/ThankYouPage.js');
global.MattressAdvicePage = smartRequire('pages/form/MattressAdvicePage.js');
global.ContactFormPage = smartRequire('pages/form/ContactFormPage.js');
global.NewsLetterPage = smartRequire('pages/form/NewsLetterPage.js');
global.KitchenFormPage = smartRequire('pages/form/KitchenFormPage.js');
global.KitchenFormAction = smartRequire('actions/forms/KitchenFormAction.js');

global.LoginAction = smartRequire('actions/LoginAction');
global.CartAction = smartRequire('actions/CartAction');
