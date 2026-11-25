const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing, validateReview } = require("../middleware.js");


const listingController = require("../controllers/listings.js");
const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage })

router.route("/",)
    .get(wrapAsync(listingController.index))
    .post(
        isLoggedIn, 
        validateListing,
        upload.single('listing[image]'),
        wrapAsync(listingController.createListing)
    );


//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router.route("/:id",)
    .get(wrapAsync(listingController.showListing))  // Show route
    .put(    //update route
        isLoggedIn, 
        isOwner,
        upload.single('listing[image]'),
        validateListing, 
        wrapAsync(listingController.updateListing)
    )
    .delete(    //delete route
        isLoggedIn, 
        isOwner,
        wrapAsync(listingController.destroyListing)
    )

//edit route
router.get("/:id/edit",
    isLoggedIn, 
    isOwner,
    wrapAsync(listingController.renderEditForm)
)

// // Index route
// router.get("/", wrapAsync(listingController.index));

// //New Route
// router.get("/new", isLoggedIn, listingController.renderNewForm);

// // Show route
// router.get("/:id", wrapAsync(listingController.showListing))

// // create route
// router.post("/", isLoggedIn, validateListing,
//     wrapAsync(listingController.createListing)
// );

// //edit route
// router.get("/:id/edit",
//     isLoggedIn, 
//     isOwner,
//     wrapAsync(listingController.renderEditForm)
// )

// //update route
// router.put("/:id",
//     isLoggedIn, 
//     isOwner,
//     validateListing, wrapAsync(listingController.updateListing)
// );

// //delete route
// router.delete("/:id", 
//     isLoggedIn, 
//     isOwner,
//     wrapAsync(listingController.destroyListing)
// )

module.exports = router;