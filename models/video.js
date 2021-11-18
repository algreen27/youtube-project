const { Mongoose } = require("mongoose");

const videoSchema = new Mongoose.Schema({
  video: [
    {
      id: { type: String, required: true },
      snippet: {
        channelId: { type: String, required: true },
        title: { type: String, required: true },
        categoryId: { type: Number, required: true },
      },
      statistics: {
        likeCount: { type: Number, required: true },
        dislikeCount: { type: Number, required: true },
        commentCount: { type: Number, required: true },
      },
    },
  ],
});

const Video = mongoose.model('Video', videoSchema)

module.exports.Video = Video;
module.exports.videoSchema = videoSchema;