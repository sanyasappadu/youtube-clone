const express = require("express")
const dotenv = require("dotenv")
const authRouter = require("./routes/auth");
const { mongoose } = require("mongoose");
const app = express();
dotenv.config();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use("/api/auth", authRouter);

const connectToDB = () => {
  mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to db")
  }).catch((err) => {
    throw err;
  });
};
app.get("/", (req, res) => {
  res.send("Hello World")
  console.log("Hello World")
  }
)

app.listen(port, () => {
  connectToDB();
  console.log(`Connected to Server ${port}`);
});