const mongoose = require("mongoose")
const { Schema } = mongoose;

const blogSchema = new Schema({
  name:String,
  path:Buffer
});


const FileUpload = mongoose.model("FileSchema",blogSchema);

module.exports = FileUpload