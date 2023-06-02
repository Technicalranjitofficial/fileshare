const express = require('express');
const multer = require('multer');
const cors = require("cors");
const fs = require("fs");
const connectDb = require('./db');

const FileUpload =require("./model");
const { cwd } = require('process');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Set up Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the directory where uploaded files will be stored
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Specify a unique name for the uploaded file
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Create the Multer upload instance
const upload = multer({ storage: storage });


app.get("/allfiles",async(req,res)=>{


  fs.readdir(path.join(process.cwd(),"/uploads"),(err,files)=>{
    console.log(files);
    res.json(files);
  })
})

// Define your route that handles file upload
app.post('/upload', upload.single('file'), async(req, res) => {
  // Handle the uploaded file here
  console.log(req.file.path);


  await connectDb();
  

//   const fileBuffer =  fs.readFileSync(req.file.path);

//   const newfile = FileUpload({
//     name:"hello",
//     path:fileBuffer
//   });

// await newfile.save();





console.log("Uploaded sucessfully");
// fs.unlink(req.file.path, (error) => {
//     if (error) {
//       console.error(error);
//       // Handle the error
//     } else {
//       console.log('File deleted successfully');
//     }
//   });



  res.json({filepath:req.file.path});

 
//   res.send('File uploaded successfully!');
});

// Start the server
app.listen(PORT, () => {
  console.log('Server is running on port 8000');
});
