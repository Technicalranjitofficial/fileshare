const mongoose = require("mongoose")
// const { resolve } = require("path")


const connectDb = async()=>{
    await mongoose.connect("mongodb+srv://thexhacker:rEAKAK3MPKNmmM9g@cluster0.ugev3.mongodb.net/fileupload").catch((err)=>console.log(err)).then((mes)=>console.log("Connect to mongodb"));
}


module.exports= connectDb;