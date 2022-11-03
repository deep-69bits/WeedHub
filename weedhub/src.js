const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use(express.urlencoded());

app.use(cors());

mongoose.connect(
  "mongodb://localhost:27017/abcd",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);

const userSchema = new mongoose.Schema({
  Name: String,
  Price: Number,
  Location: String,
  Type: String,
  Quality: String,
  SellerAddress: String,
});

const User = new mongoose.model("User", userSchema);

app.get("/", async (req, res) => {
  const dataArray = await User.find({});
  res.send(dataArray);
});

app.post("/register", (req, res) => {
  console.log(req.body);
  const { Name, Price, Location, Type, Quality, SellerAddress } = req.body;
  {
    {
      const user = new User({
        Name,
        Price,
        Location,
        Type,
        Quality,
        SellerAddress,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Your product succesfully saved" });
        }
      });
    }
  }
});


app.listen(9000, () => {
  console.log("BE started at port 9000");
});
