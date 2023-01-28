const {addToLikedMovies, getLikedMovies, removeFromLikeMovies} = require("../controllers/UserController");

const router = require("express").Router();

router.post("/add" ,addToLikedMovies)
router.get("/liked/:email",getLikedMovies)
router.put("/delete",removeFromLikeMovies)

module.exports=router;