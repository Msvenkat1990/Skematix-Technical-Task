const server = require("express");
const app = server();
const envFile = require("dotenv");
envFile.config();
const dbMongo = require("mongoose");
const userRouter = require("./routes/router");
dbMongo
  .connect(process.env.DB)
  .then(() => {
    console.log("DB connecting Successfuly");
  })
  .catch(() => {
    console.log("DB not connection");
  });
app.use(server.json());
app.use("/Api", userRouter);

app.listen(process.env.PORT, () => {
  console.log("server running in port:", process.env.PORT);
});



module.exports = app;
