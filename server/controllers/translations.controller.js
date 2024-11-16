const { Translation } = require('../models/translations');
const { translationService } = require('../services');

const translationController = {
 
  async getTranslations(req, res, next) {
    try {
      const { language } = req.params;  
      const translations = await translationService.getTranslations(language);  

      if (!translations) {
        return res.status(404).json({ message: `Translations for language ${language} not found` });
      }

      res.json(translations);  
    } catch (error) {
      next(error); 
    }
  },

 
  async updateTranslations(req, res, next) {
    try {
      const { language } = req.params; 
      const updates = req.body;  

    
      const updatedTranslations = await translationService.updateTranslations(language, updates);

      if (!updatedTranslations) {
        return res.status(404).json({ message: `Translations for language ${language} not found to update` });
      }

      res.json(updatedTranslations); 
    } catch (error) {
      next(error); 
    }
  },

 
  async addTranslations(req, res, next) {
    try {
      const { language, translations } = req.body; 

      
      const existingTranslation = await Translation.findOne({ language });
      if (existingTranslation) {
        return res.status(400).json({ message: `Translations for ${language} already exist.` });
      }

  
      const newTranslation = new Translation({
        language,
        translations
      });

    
      await newTranslation.save();

      res.status(201).json(newTranslation); 
    } catch (error) {
      next(error);  
    }
  }
};

module.exports = translationController;