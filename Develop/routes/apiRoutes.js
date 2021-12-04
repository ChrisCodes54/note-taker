const router = require("express").Router();
const path = require('path');
const fs = require("fs");
let db = require('../db/db.json');


// initially getting all notes in the db.json
router.get("/notes", (req,res)=>{
    res.json(db);
})

router.post("/notes", (req,res) => {
    let id = db.length + 1;
    req.body.id = id;
    db.push(req.body);
    
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(db))
    res.send(`${req.method} note added!`)
})


router.delete("/notes/:id", (req,res) => {
    let remainingNotes = db.filter((note) => {
        return (note.id != req.params.id) 
    })
    fs.writeFileSync(path.join(__dirname,"../db/db.json"),JSON.stringify(remainingNotes))
    res.send(`Note Deleted!`)    
})

module.exports = router;