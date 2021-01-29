const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/mens100", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
  })
  .then(() => {
    console.log("connection sucessfull");
  })
  .catch((err) => {
    console.log(" no connection");
  });
