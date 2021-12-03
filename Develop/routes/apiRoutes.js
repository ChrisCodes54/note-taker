const router = require("express").Router();
const path = require('path');
const fs = require("fs")


// initially getting all notes in the db.json
router.get("/notes", (req,res)=>{
    res.sendFile(path.join(__dirname, "../db/db.json"))
})

// write a note (post) to the db.json





// delete a note by its id from the db.json



module.exports = router;