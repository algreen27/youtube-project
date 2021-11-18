// const { Video, validateVideo } = require("../models/video");
// const express = require("express");
// const router = express.Router();

// // All endpoints and route handlers go here

// router.get("/", async (req, res) => {
//   try {
//     const videos = await Video.find();
//     return res.send(videos);
//   } catch (ex) {
//     return res.status(500).send(`Internal Server Error: ${ex}`);
//   }
// });

// router.get("/:id", async (req, res) => {
//   try {
//     const video = await Video.findById(req.params.id);
//     if (!video)
//       return res.status(400).send(`The video with id "${req.params.id}" does not exist.`);
//     return res.send(video);
//   } catch (ex) {
//     return res.status(500).send(`Internal Server Error: ${ex}`);
//   }
// });

// router.post("/", async (req, res) => {
//   try {
//     const { error } = validateVideo(req.body);
//     if (error) return res.status(400).send(error);

//     const video = new Video({
//       channelId: req.body.channelId,
//       title: req.body.title,
//       categoryId: req.body.categoryId,
//       likeCount: req.body.likeCount,
//       dislikeCount: req.body.dislikeCount,
//       commentCount: req.body.commentCount
//     });

//     await video.save();
//     return res.send(video);
//   } catch (ex) {
//     return res.status(500).send(`Internal Server Error: ${ex}`);
//   }
// });

// // router.put("/:id", async (req, res) => {
// //   try {
// //     const { error } = validate(req.body);
// //     if (error) return res.status(400).send(error);
// //     const product = await Product.findByIdAndUpdate(
// //       req.params.id,
// //       {
// //         name: req.body.name,
// //         description: req.body.description,
// //         category: req.body.category,
// //         price: req.body.price,
// //       },
// //       { new: true }
// //     );
// //     if (!product)
// //       return res.status(400).send(`The product with id "${req.params.id}" d
// //    oes not exist.`);
// //     await product.save();
// //     return res.send(product);
// //   } catch (ex) {
// //     return res.status(500).send(`Internal Server Error: ${ex}`);
// //   }
// // });

// // router.delete("/:id", async (req, res) => {
// //   try {
// //     const product = await Product.findByIdAndRemove(req.params.id);
// //     if (!product)
// //       return res.status(400).send(`The product with id "${req.params.id}" d
// //    oes not exist.`);
// //     return res.send(product);
// //   } catch (ex) {
// //     return res.status(500).send(`Internal Server Error: ${ex}`);
// //   }
// // });

// module.exports = router;