const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const usersRouter = require("./routes/usersRoute");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/user", usersRouter);

app.get("/", (req, res) => {
  res.send("Node Application Server Running");
});

app.all("*", (req, res) => {
  res.send(`No Route found`);
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
