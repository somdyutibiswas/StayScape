const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const { string } = require("joi");

const listingSchema = new Schema({
    title : {
        type : String,
        required : true,
    } ,
    description : String,
    // image :{
    //     type : String,
    //     default: "https://unsplash.com/photos/sunflowers-with-drooping-yellow-petals-akv4UwZw7GY",
    //     set : (v) => v === "" ? "https://unsplash.com/photos/sunflowers-with-drooping-yellow-petals-akv4UwZw7GY" : v,
    // } ,

  image: {
    url: String,
    filename: String,
  },

    price : Number,
    location : String,
    country : String,
    category : {
      type : [String],
      enum : [
        "Popular",
        "Rooms",
        "Iconic Cities",
        "Heritage",
        "Mountains",
        "Forest",
        "Beach",
        "Pool",
        "Camping",
        "Arctic",
        "Boats"
      ]
    },
    reviews : [
      {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Review",
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    geometry: {
      type: {
        type: String,
        enum: ['Point'],
        required: false
      },
      coordinates: {
        type: [Number],
        required: true
      }
    }
});

listingSchema.post("findOneAndDelete", async (listing) =>{
  if (listing) {
      await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});
const Listing = mongoose.model("Listing", listingSchema);   // Creating the Model
module.exports = Listing;