"use strict "
const express=require("express");
const app = express();
const port = process.env.port||3000;
app.use(express.json());
const paths = require("./routes/paths") ;
app.use("/paths", paths);

app.get("/", (req, res) => {
res.send("hello root ");
});

app.listen(port,err=>{
    if(err){
        return console.log("error",err);
    }
    console.log(`Listening on port ${port}`)
})
