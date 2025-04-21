const mongoose = require("mongoose");
const Review = require("./review");
const Schema = mongoose.Schema;


let listingSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    image:{
        url: String,
        filename: String,
     },
    price: Number,
    location:String,
    country:String,

    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true,
            default: 'Point'
        },
        coordinates: {
            type: [Number],  // [longitude, latitude]
            required: true,
            default: [0, 0]
        }
    },

    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Review"
        }
    ],
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
})

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id: {$in: listing.reviews}})
    }
})

let Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;
