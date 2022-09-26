const express = require("express");
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

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

