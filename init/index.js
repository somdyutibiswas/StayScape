const mongoose = require("mongoose");
const initData = require("./data.js");  //Import your data
const Listing = require("../models/listing.js");  //Import the Listing mode

const MONGO_URL = "mongodb://127.0.0.1:27017/stayscape";  //Connect to my local MongoDB server and use the stayscape database.

main()          // main() connects our Node.js application to MongoDB
    .then(() =>{
        console.log("Mongo");
    })
    .catch((err) =>{
        console.log(err);
    })

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async() => {
    await Listing.deleteMany({});  //Delete all documents from the listings collection.
    initData.data = initData.data.map((obj) =>({
        ...obj,
        owner: "6ab75528eb714482c936ec86"
    }));
    await Listing.insertMany(initData.data);  //Gives array of listing objects from data.js
    console.log("Data was initialized");
};

initDB();  //initialize the database with our sample data.



/* 
             node index.js
                    ↓
          Load mongoose
                    ↓
          Load data.js
                    ↓
        Load Listing model
                    ↓
       Connect to MongoDB
                    ↓
              stayscape
                    ↓
       Delete old listings
                    ↓
       Insert data from data.js
                    ↓
       "Data was initialized" */
