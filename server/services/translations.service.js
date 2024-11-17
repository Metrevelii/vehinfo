const { Translation } = require("../models/translations");
const { ApiError } = require("../middleware/apiError");
const httpStatus = require("http-status");

const getTranslationArgs = async(req) => {
  try {
    const translation = await Translation.find({});
    if (!translation) throw new ApiError(httpStatus.NOT_FOUND, 'Translation not found');
    return translation[0];
  } catch (error) {
    throw error;
  }
}


const postTranslationArgs = async(req) => {
  try {
    const translation = new Translation({
      ...req.body
    })
    await translation.save();
    return translation;
  } catch (error) {
    throw error;
  }
}

const updateTranslationArgs = async(req) => {
  try {
      const translation = await Translation.findOneAndUpdate(
          { _id: req.body._id },
          { "$set": req.body },
          { new: true}
      );
      if (!translation) throw new ApiError(httpStatus.NOT_FOUND, 'Site not found');
      return translation;
  } catch (error) {
      throw error;
  }
}

module.exports = {
getTranslationArgs,
postTranslationArgs,
updateTranslationArgs
};
