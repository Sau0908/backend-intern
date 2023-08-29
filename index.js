const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Login = require("./routes/Login");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
CONNECTION_URL =
  "mongodb+srv://saurabhkashyap982000:saurabh@cluster0.h6poy29.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(console.error);

app.use("/", Login);

app.listen(PORT, () => {
  console.log(`Server start at port no ${PORT}`);
});
