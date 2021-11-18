const { Mongoose } = require("mongoose");

const commentSchema = new Mongoose.Schema({
    videoID:{ type: String, required: true},
    text:{ type: String, required: true},
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    replies: [{type: replySchema}],
    });

const replySchema = new Mongoose.Schema({
    text:{ type: String, required: true},
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    });

    const Comment = mongoose.model('Comment', commentSchema);
    const Reply = mongoose.model('Reply', commentSchema);

    module.exports.Comment = Comment;
    module.exports.Reply = Reply;
    module.exports.commentSchema = commentSchema;
    
