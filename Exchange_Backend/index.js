const express = require("express");
const app = express();
app.use(express.json());
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const zod = require("zod");
var cors = require('cors');
const data = require("./modal/data_modal");
const jwtpass = "123"
 app.use(cors());
 
 async function poo(){
    await mongoose.connect('mongodb+srv://paras027:paras1032@cluster0.s2rwujw.mongodb.net/Exchange');
    console.log("connected")
 }
 poo();

const Auth = mongoose.model('Auth', {email:String, fname: String, password: String });
// const data = mongoose.model('Data', {match_id:String, title: String, date_start_ist: String, live_odds:String,matchodds:String, });
const z = zod.object({
    username: zod.string(),
    email: zod.string(),
    password: zod.string(),
})

app.post("/signup", async function (req, res) {
    const {username,email,password} = req.body;
    const {success} = z.safeParse({email, username,password});

    if(!success)
    {
        return res.status(411).json({
            message:"Inputs Invalid"
        })
    }
    const val = new Auth({ fname: username, email: email, password: password })

    const check = await Auth.findOne({ fname: username });
    if(check)
    {
        return res.status(411).json({
            message:"Already there"
        })
    }

    val.save();
    const idd = val._id;
    const token = jwt.sign({ idd }, jwtpass);
    res.json({
        token,
        message: "User Created",

    });
});


app.post("/signin", async (req, res) => {
    const user = await Auth.findOne({
        fname: req.body.fname,
        email:req.body.email,
        password: req.body.password
    });

    if (user) {
        const idd = user._id
        const token = jwt.sign({
            idd
        }, jwtpass);
  
        return res.json({
            token: token
        })
        
    }
    return res.status(411).json({
        message: "Error while logging in"
    })
})

app.get("/get", async (req, res) => {
    try {
        const user = await data.find();
        if (user.length === 0) {
            return res.status(404).json({ message: "No data found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.listen(5000, () => {
    console.log("Connected on this server")
});