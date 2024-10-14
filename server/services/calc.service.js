const { Auction } = require('../models/calc');

const addAuction = async(aucname) => {
    try {
        const auc = new Auction({
            name: aucname
        });

        await auc.save();
        return auc;


    } catch (error) {
        throw error;
    }
}

module.exports = {
    addAuction
}