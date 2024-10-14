const { calcService } = require('../services');


const calcControllers = {
    async addAuction(req, res, next) {
        try {
            const auc = await calcService.addAuction(req.body.aucname);

            res.json(auc);

        } catch (error) {
            next(error);
        }
    }
}


module.exports = calcControllers;