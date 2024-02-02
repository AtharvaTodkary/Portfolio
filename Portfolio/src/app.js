import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/formDB',)
var db = mongoose.connection
db.on('error',()=>console.log("Error in connecting to Database"))
db.once('open',()=>console.log("Connected to database"))

app.post("/contact",(req,res)=>{
    var fullname = req.body.fullname
    var email = req.body.email
    var phno = req.body.phno
    var subject = req.body.subject
    var msg = req.body.msg

    var data={
        "name":fullname,
        "email":email,
        "phone":phno,
        "subject":subject,
        "message":msg
    }
    db.collection('users').insertOne(data,(err,collection)=>{
        // if(err){
        //     throw err;
        // }
        console.log("Record Inserted Successfully")
    })
    return res.redirect('home_page.html')
})

app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.redirect('home_page.html')
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
  