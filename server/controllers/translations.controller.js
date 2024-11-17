const { translationService } = require('../services');

const translationController = {
  async postTranslationArgs(req, res, next) {
    try {
      const translation = await translationService.postTranslationArgs(req);
      res.json(translation);
    } catch (error) {
      next(error);
    }
  }, 
  async getTranslationArgs(req, res, next) {
    try {
      const translation = await translationService.getTranslationArgs(req);
      res.json(translation);
    } catch (error) {
      next(error);
    }
    
  },
  async updateTranslationArgs(req, res, next) {
    try {
      const translation = await translationService.updateTranslationArgs(req);
      res.json(translation);
    } catch (error) {
      next(error);
    }
  }


}

module.exports = translationController