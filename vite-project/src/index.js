const express = require('express');
const InitiateMongoServer = require("./config/db");
const user = require("./routes/user");
const cors = require('cors');
InitiateMongoServer();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.use("/user", user);

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});