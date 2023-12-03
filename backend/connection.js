const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://test:${process.env.DB_PASS}@only-chat.m3n4ehf.mongodb.net/?retryWrites=true&w=majority`
  )
  .then((result) => {
    console.log("Connected to MongoDB");
  });
