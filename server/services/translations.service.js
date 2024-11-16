const { Translation } = require("../models/translations");
const { ApiError } = require("../middleware/apiError");
const httpStatus = require("http-status");

const getTranslations = async (language) => {
  try {
    const translation = await Translation.findOne({ language });

    if (!translation) {
      throw new ApiError(httpStatus.NOT_FOUND, "Translations not found");
    }

    return translation.translations;
  } catch (error) {
    throw error;
  }
};

const updateTranslations = async (language, updates) => {
  try {
    const translation = await Translation.findOneAndUpdate(
      { language },
      { $set: { translations: updates } },
      { new: true }
    );

    if (!translation) {
      throw new ApiError(httpStatus.NOT_FOUND, "Translations not found");
    }

    return translation.translations;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getTranslations,
  updateTranslations,
};
