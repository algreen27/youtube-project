const { mongoose } = require("mongoose");

const commentSchema = new mongoose.Schema({
    videoID:{ type: String, required: true},
    text:{ type: String, required: true},
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    replies: [{type: replySchema}],
    });

const replySchema = new mongoose.Schema({
    text:{ type: String, required: true},
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    });

    function validateComment(comment) {
        const schema = Joi.object({
          videoID: Joi.string().min(2).max(50).required(),
          text: Joi.string().required(),
          likes: Joi.number().min(5).max(50).required(),
          dislikes: Joi.number().required(),
          replies: Joi.replySchema([])
        });
        return schema.validateComment(comment);
      }

    const Comment = mongoose.model('Comment', commentSchema);
    const Reply = mongoose.model('Reply', commentSchema);

    module.exports.Comment = Comment;
    module.exports.Reply = Reply;
    module.exports.commentSchema = commentSchema;
    module.exports.validateComment = validateComment;
    
