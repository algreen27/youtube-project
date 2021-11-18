const connectDB = require('./startup/db');
const express = require('express');
const app = express();
const videos = require('./routes/videos');


connectDB();

app.use(express.json());
// app.use("/api/comments", comments);
// app.use("/api/replies", replies);
app.use("/api/videos", videos);
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});