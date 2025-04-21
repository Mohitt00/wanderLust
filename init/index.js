const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing.js");



let Mongo_Url = ("mongodb://127.0.0.1:27017/wanderlust");

main()
.then(()=>{
    console.log("connection done");
})
.catch((err)=>{
    console.log("error in connection",err);
})

async function main(){
   await mongoose.connect(Mongo_Url);
} 

async function initDb() {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "67fd0357f04363c7fc8bae52"}));
    await Listing.insertMany(initData.data);
    console.log("data initialized");
}

initDb();