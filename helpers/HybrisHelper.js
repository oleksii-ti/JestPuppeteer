const fetch = require("node-fetch");

class HybrisHelper {
    async getOrder(id) {
        return await fetch(global.hybris.host + "/api/" + global.shopId + "/order/?orderCode=" + id)
            .then(res => res.text())
    }

}

module.exports = HybrisHelper;
