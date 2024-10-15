const { Auction } = require('../models/calc');
const { ApiError } = require('../middleware/apiError');
const httpStatus = require('http-status');

const addAuction = async(auctionData) => {
    try {
        const auc = new Auction(auctionData);
        await auc.save();
        return auc;

    } catch (error) {
        if (error.code === 11000) {
            throw new ApiError(httpStatus.BAD_REQUEST, 'Auction name must be unique');
          }
        throw error;
    }
}

const getAuctionById = async(id) => {
    try {
        const auc = await Auction.findById(id);
        if (!auc) throw new ApiError(httpStatus.NOT_FOUND, 'Auction not found');
        return auc;
    
    } catch (error) {
        throw error;
    }
    
}

const addLocationToAuction = async (auctionId, locationData) => {
    try {
        const auc = await Auction.findById(auctionId);
        if (!auc) {
            throw new ApiError(httpStatus.NOT_FOUND, 'Auction not found');
        }

        // Add the new location to the locations array
        auc.locations.push(locationData);
        await auc.save();
        return auc;
    } catch (error) {
      throw error;
    }
  };

const deleteAuctionById = async(id) => {
    try {
        const auc = await Auction.findByIdAndDelete(id);
        return auc;
    
    } catch (error) {
        throw error;
    }
}

module.exports = {
    addAuction,
    getAuctionById,
    deleteAuctionById,
    addLocationToAuction
}