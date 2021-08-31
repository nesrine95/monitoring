
"use strict";
const express = require("express");
let router = express.Router();
//create a mıddleware that only works on /thıngs apıs ıt doesn't concers /  <= root

router
    .route("/directories")
    .get((req, res) => {
        ///paths/directories
        res.send("hi get /paths/directories ")
    })
    module.exports=router;