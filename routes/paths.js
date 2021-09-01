
"use strict";
const express = require("express");
var path = require('path');
const dirTree = require("directory-tree");
let router = express.Router();
//create a mıddleware that only works on /thıngs apıs ıt doesn't concers /  <= root

router
    .route("/directories")
    .get((req, res) => {
        ///paths/directories
        var userName = process.env['USERPROFILE'].split(path.sep)[2];
        var loginId = path.join("C:/Users", userName, "/Desktop/New folder");
        //console.log(loginId);
        const tree = dirTree(loginId);
        console.log(tree);
        res.send(tree)
    })
router
    .route("/directories/:path")
    .get((req, res) => {

        const tree = dirTree(req.params.path);
        console.log(tree);
        res.send(tree)
    })
module.exports = router;