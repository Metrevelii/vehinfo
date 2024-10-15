const { calcService } = require('../services');


const calcControllers = {
    async addAuction(req, res, next) {
        try {
            const auctionData = req.body;  
            const auc = await calcService.addAuction(auctionData);
            res.status(201).json(auc);
          } catch (error) {
            next(error);
          }
    },
    async getAuction(req, res, next) {
        try {
            const id = req.params.id;

            const auc = await calcService.getAuctionById(id);

            res.json(auc);

        } catch (error) {
            next(error);
        }
    },
    async deleteAuctionById(req, res, next) {
        try {
            const id = req.params.id;

            const auc = await calcService.deleteAuctionById(id);

            res.json(auc);

        } catch (error) {
            next(error);
        }
    },
    async addLocationToAuction(req, res, next) {
        try {
          const auctionId = req.params.id;
          const locationData = req.body; 
          const updatedAuction = await calcService.addLocationToAuction(auctionId, locationData);
          res.json(updatedAuction);
        } catch (error) {
          next(error);
        }
    },
    async getAuctions(req, res, next) {
        try {
            const auctions = await calcService.getAuctions(req.body);
            res.json(auctions);

        } catch(error){
            next(error);
        }
    }

}


module.exports = calcControllers;