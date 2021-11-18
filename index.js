const connectDB = require('./startup/db');
const express = require('express');
const app = express();


connectDB();

app.use(express.json());
app.use("/api/comments", comments);
app.use("/api/replies", replies);
app.use("/api/videos", videos);
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});