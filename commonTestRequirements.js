function smartRequire(fileName) {
	try {
		return require("./shops/" + global.shopId + "/" + fileName);
	} catch (e) {
		return require('./' + fileName);
	};
}

global.ArticlePage = smartRequire('pages/ArticlePage');
global.CartPage = smartRequire('pages/CartPage');
global.AddressPage = smartRequire('pages/AddressPage');
global.PaymentMethodPage = smartRequire('pages/PaymentMethodPage');
global.PaymentLoginPage = smartRequire('pages/PaymentLoginPage');
global.PaymentSummaryPage = smartRequire('pages/PaymentSummaryPage');
global.PayPal = smartRequire('pages/checkout/PayPalPage.js');

