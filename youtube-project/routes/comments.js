const {
  Comment,
  validateComment,
  validateReply,
  Reply,
} = require("../models/comment");
const express = require("express");
const router = express.Router();

// All endpoints and route handlers go here

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    return res.send(comments);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment)
      return res
        .status(400)
        .send(`The video with id "${req.params.id}" does not exist.`);
    return res.send(comment);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

router.post("/", async (req, res) => {
  try {
    const { error } = validateComment(req.body);
    if (error) return res.status(400).send(error);

    const comment = new Comment({
      videoId: req.body.videoId,
      text: req.body.text,
      likes: 0,
      dislikes: 0,
      replies: [],
    });

    await comment.save();
    return res.send(comment);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { error } = validateComment(req.body);
    if (error) return res.status(400).send(error);
    const comment = await Comment.findByIdAndUpdate(
      req.params.id,
      {
        videoId: req.body.videoId,
        text: req.body.text,
        likes: req.body.likes,
        dislikes: req.body.dislikes,
        replies: req.body.replies,
      },
      { new: true }
    );
    if (!comment)
      return res.status(400).send(`The comment with id "${req.params.id}" d
   oes not exist.`);
    await comment.save();
    return res.send(comment);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndRemove(req.params.id);
    if (!comment)
      return res.status(400).send(`The product with id "${req.params.id}" d
   oes not exist.`);
    return res.send(comment);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

//Reply section

router.post("/:id/replies", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(400).send(`The comment with ID ${req.params.id} does not exist`);

    const { error } = validateReply(req.body);
    if (error) return res.status(400).send(error);

    const reply = new Reply({
      text: req.body.text,
      likes: 0,
      dislikes: 0,
    });

    comment.replies.push(reply);

    await comment.save();
    return res.send(comment);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

router.put("/:id/replies/:id", async (req, res) => {
  try {
    const { error } = validateReply(req.body);
    if (error) return res.status(400).send(error);
    const reply = await Reply.findByIdAndUpdate(
      req.params.id,
      {
        text: req.body.text,
        likes: req.body.likes,
        dislikes: req.body.dislikes,
      },
      { new: true }
    );
    if (!reply)
      return res.status(400).send(`The reply with id "${req.params.id}" d
   oes not exist.`);
    await reply.save();
    return res.send(reply);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

router.delete("/:id/replies/:id", async (req, res) => {
  try {
    const reply = await Reply.findByIdAndRemove(req.params.id);
    if (!reply)
      return res.status(400).send(`The reply with id "${req.params.id}" d
   oes not exist.`);
    return res.send(reply);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

module.exports = router;
