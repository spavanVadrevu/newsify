var express = require('express')
var app = express();
var bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
var cors = require('cors')
app.use(cors())
var cookieparser = require('cookie-parser')
app.use(cookieparser())
var models = require('./models')

app.post("/register",async(req,res)=>{

    console.log(req.body)
    const {username,password} = req.body;
    try{
        const a = await models.registrations.create({username,password})
        res.status(200).send(a)
    }

    catch(err){
        console.log(err);
        res.status(500).send(err)
    }
})

app.post("/login",async(req,res)=>{

    //console.log(req.body)
    const {username,password} = req.body;
    try{
        const a = await models.registrations.findOne({where:{username:username}})
        console.log(a);
        if(a)
        {
            if(a.password === password)
            {
                console.log(a)
                res.status(200).send("success")
            }
            else
            {
                res.status(300).send("password doeenot match")
            }
        }
        else
        {
            console.log("Not found")
            res.status(400).send("user not found")
        }
    }

    catch(err){
        console.log(err);
        res.status(500).send("server error")
    }
})

app.listen(8000);