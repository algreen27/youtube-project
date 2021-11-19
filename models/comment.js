const mongoose  = require("mongoose");
const Joi = require('joi');

const replySchema = new mongoose.Schema({
  text:{ type: String, required: true},
  likes: {type: Number, default: 0},
  dislikes: {type: Number, default: 0},
  });

const commentSchema = new mongoose.Schema({
    videoId:{ type: String, required: true},
    text:{ type: String, required: true},
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    replies: [{type: replySchema}],
    });

    const Comment = mongoose.model('Comment', commentSchema);
    const Reply = mongoose.model('Reply', replySchema);


    function validateComment(comment) {
        const schema = Joi.object({
          videoId: Joi.string().required(),
          text: Joi.string().required(),
          likes: Joi.number().required(),
          dislikes: Joi.number().required(),
          replies: Joi.array()
        });
        return schema.validate(comment);
      }


    module.exports.Comment = Comment;
    module.exports.Reply = Reply;
    module.exports.replySchema = replySchema;
    module.exports.commentSchema = commentSchema;
    module.exports.validateComment = validateComment;
    
