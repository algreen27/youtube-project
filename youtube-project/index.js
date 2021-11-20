const connectDB = require('./startup/db');
const express = require('express');
const app = express();
const comments = require('./routes/comments');


connectDB();

app.use(express.json());
app.use("/api/comments", comments);
// app.use("/api/replies", replies);
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});