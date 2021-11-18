const mongoose = require("mongoose");
const Joi = require('joi');

const videoSchema = new mongoose.Schema({
  video: [
      {
        // id: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        categoryId: { type: Number, required: true },
        likeCount: { type: Number, default: 0 },
        dislikeCount: { type: Number, default: 0 },
        commentCount: { type: Number, default: 0 },
      },
  ],
});

const Video = mongoose.model('Video', videoSchema)

function validateVideo(video) {
  const schema = Joi.object({
    id: Joi.string().required(),
    snippet: Joi.string().required(),
    statistics: Joi.string().required(),
  });
  return schema.validate(video);
}

module.exports.Video = Video;
module.exports.videoSchema = videoSchema;
module.exports.validateVideo = validateVideo;