router.post("/test", async (req, res) => {
  try {
    const insertData = {
      email: req.body.email,
      username: req.body.username,
      message: req.body.message,
    };
    Test.create(insertData)
      .then((data) => console.log(data))
      .catch((e) => console.log(e.message));
  } catch (e) {}
});
router.post("/fetchingMessage", async (req, res) => {
  try {
    let get = await Test.find({}, { message: 1 });  //{ message.text: 1 }
    console.log(get);
    res.json(get);
  } catch (e) {}
});


const mongoose = require("mongoose");
const reqString = {
  type: String,
  required: true,
};
const messageSchema = mongoose.Schema({
  user_id: reqString,
  text: reqString,
});

const UserSchema = mongoose.Schema({
  email: reqString,
  username: reqString,

  message: [messageSchema],
});
const userModel = mongoose.model("testings", UserSchema);
module.exports = userModel;
