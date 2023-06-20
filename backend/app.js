// import express module
const express = require("express");
const bodyParser = require('body-parser');
// import mongoose
const mongoose = require("mongoose");
// import bcrypt module
const bcrypt = require("bcrypt");
// connexion mongoose
mongoose.connect('mongodb://127.0.0.1:27017/chawkiBroDB');
// import multer module
const multer = require('multer');
// import path module
const path = require('path');
const axios = require('axios');
// create app express
const app = express();
// make app importable to other file

// models importation
const Match = require("./models/match");
const Team = require("./models/team");
const User = require("./models/user");
const Player = require("./models/player");
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
// shortCut
app.use('/images', express.static(path.join('backend/images')));
//  media type
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
// config multer
const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});
// parse application/json 
// DB simulation



function generateId(T) {
    let max;
    if (T.length == 0) {
        max = 0;
    } else {
        max = T[0].id;
        for (let i = 1; i < T.length; i++) {
            if (T[i].id > max) {
                max = T[i].id;
            }
        }
    }
    return max + 1;
    console.log(max);
}


// busness logic :get all matches
app.get("/api/matches", (req, res) => {
    console.log('here into Bl  all matches ');
    Match.find().then((docs) => {
        console.log("here documents", docs);
        res.status(200).json({
            matches: docs,
          
        });
    });

});
// busness logic :get  matche by ID
app.get("/api/matches/:x", (req, res) => {
    console.log('here intoBL: get match by id');

    let id = req.params.x;
    Match.findOne({ _id: id }).then((doc) => {
        res.status(200).json({ match: doc });
    });


});
app.delete("/api/matches/:id", (req, res) => {
    console.log('here into Bl delete match by id');
    let id = req.params.id;
    Match.deleteOne({ _id: id }).then((result) => {
        console.log('here response after delete', result);
        result.deletedCount == 1 ?
            res.json({ msg: "deleted with success" })
            : res.json({ msg: "Not deleted" });
    });

});
// busnes logic add match
app.post("/api/matches", (req, res) => {
    console.log('here into Bl add match ');
    let obj = new Match(req.body);
    obj.save();
    // obj.id = generateId(matchesTab);
    // console.log('here obj', obj);
    // matchesTab.push(obj);
    res.status(200).json({ message: "adedd with succes" })

});
// busnes logic edit match
app.put("/api/matches", (req, res) => {
    console.log('here into Bl edit match ', req.body);
    let newMatch = req.body;
    console.log(newMatch);
    Match.updateOne({ _id: req.body._id }, newMatch).then((result) => {
        console.log('here result after update', result);
        result.nModified == 1
            ? res.json({ message: "edited with success" }) :
            res.json({ message: "echec" });
    });


});

let teamsTable = [
    { id: 1, Name: "marwa", Staduim: "aa", owner: "aa" },
    { id: 2, Name: "ahmed", Staduim: "bb", owner: "gg" },
    { id: 3, Name: "ameni", Staduim: "cc", owner: "dd" },
]
// BL:getALl players
app.get("/api/players", (req, res) => {
    console.log('here into Bl  all players ');
    Player.find().then((docs) => {
        console.log("here documents", docs);
        res.status(200).json({
            players: docs,
            message: "hello"
        });
    });
});
// BL:getplayerById
app.get("/api/players/:x", (req, res) => {
    console.log('here intoBL: get player by id');

    let id = req.params.x;
    Player.findOne({ _id: id }).then((doc) => {
        res.status(200).json({ player: doc });
    });


});
// busnes logic add playr
app.post("/api/players", (req, res) => {
    console.log('here into Bl add player ');
    let obj = new Player(req.body);
    obj.save();
    // obj.id = generateId(matchesTab);
    // console.log('here obj', obj);
    // matchesTab.push(obj);
    res.status(200).json({ message: "adedd with succes" })

});
// busnes logic edit player
app.put("/api/players", (req, res) => {
    console.log('here into Bl edit player ', req.body);
    let newPlayer = req.body;
    Player.updateOne({ _id:req.body._id }, newPlayer).then((result) => {
        console.log('here result after update', result);
        result.nModified == 1
            ? res.json({ message: "edited with success" }) :
            res.json({ message: "echec" });
    });


});
app.delete("/api/players/:x", (req, res) => {
    console.log('here into Bl delete player by id');
    let id = req.params.x;
    Player.deleteOne({ _id: id }).then((result) => {
        console.log('here response after delete', result);
        result.deletedCount == 1 ?
            res.json({ msg: "deleted with success" })
            : res.json({ msg: "Not deleted" });
    });
});


// teaeeeaaaammmmmmm
app.get("/api/teams", (req, res) => {
    console.log("here into bl: get all teams");
    res.status(200).json({ message: "ok", teams: teamsTable });
});
app.get("/api/teams/:x", (req, res) => {
    console.log("here into BL:get team by id");
    let id = req.params.x;
    let findedteam = teamsTable.find((elt) => { return elt.id == id });
    res.status(200).json({ message: "ok", team: findedteam });
});
app.delete("/api/teams/:x", (req, res) => {
    console.log("here into bl :delet team");
    let id = req.params.x;
    let findedteam = false;
    for (let i = 0; i < teamsTable.length; i++) {
        if (teamsTable[i].id == id) {
            findedteam = true;
            teamsTable.splice(i, 1);
            break;
        }

    }
    findedteam ? res.status(200).json({ message: "ok" }) : res.status(200).json({ message: "id not found" });
});
app.post("/api/teams", (req, res) => {
    console.log("here into bl :add team");
    let teamObj = new Team({
        teamName: req.body.name,
        teamStadium: req.body.stadium,
        teamOwner: req.body.owner
    });
    teamObj.save(
        (err, doc) => {
            console.log('here error', err);
            console.log('here doc', doc);
            err ? res.json({ msg: "error" }) : res.json({ msg: "added with succes" });
        }
    );

})
app.put("/api/teams", (req, res) => {
    console.log("here into bl:edit teams");
})


//BL: signup
app.post("/api/users/signup", multer({ storage: storageConfig }).single('img'), (req, res) => {
    console.log('here into login ', req.body);
    // let userObj= new User(req.body);
    // userObj.save(
    //     (err,doc)=>{
    //         err ? res.json({msg:"error"}):res.json({msg:"added with succes"});
    //     }
    // );
    bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {
        console.log("here crypted pwd", cryptedPwd);
        req.body.pwd = cryptedPwd;
        req.body.avatar = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
        let user = new User(req.body);
        user.save((err, doc) => {
            err
                ? res.json({ msg: "error" })
                : res.json({ msg: "added with succes" });
        });
    });
});

// BL:login
app.post("/api/users/login", (req, res) => {
    console.log("here into bl login", req.body);
    let user;
    // check if email exists
    User.findOne({ email: req.body.email }).then((doc) => {
        console.log("here doc", doc);
        user = doc;
        // send email error msg
        if (!doc) {
            res.json({ msg: "please check email" });
        } else {
            // check pwd
            return bcrypt.compare(req.body.pwd, doc.pwd);
        }
    })
        .then((isEqual) => {
            console.log("here isEqual", isEqual);
            // send pwd error msg
            if (!isEqual) {
                res.json({ msg: "please check pwd" });
            } else {
                let userTosend = {
                    userId: user._id,
                    email: user.email,
                    fName: user.firstName,
                    lName: user.lastName,
                    img:user.avatar
                };
                res.json({ user: userTosend, msg: `welcome ${user.firstName}` });
            }
        });
});
app.get("/api/users/:id",(req,res)=>{

    console.log("here into BL:get user by id");
    let id = req.params.id;
    console.log(id);
    
    User.findOne({ _id: id }).then((doc) => {
        res.status(200).json({user: doc });
});
});

app.post("/api/matches/searchMatches",(req,res)=>{
    console.log("here into bl",req.body);
    Match.find({ $or: [ { scoreOne: req.body.scoreOne}, { scoreTwo:  req.body.scoreTwo } ] }).then((docs)=>{
        console.log("here objects",docs);
       res.json({findedMatches:docs,msg:"done"});
    });
      
       
});
// BL : search weather
app.get("/api/weather/:city", (req,res)=>{
    console.log("Here into BL: search weather by city", req.params.city);
    let apiKey = "62ee756a34835483299877a61961cafb";
    let  apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${apiKey}`;
    axios.get(apiUrl).then((weatherResponse)=>{
      console.log("here response from API ",weatherResponse.data);
      let data=weatherResponse.data;
      let description=data.weather[0].description;
      let icon=data.weather[0].icon;
      let result={
        temperature:data.main.temp,
        pressure:data.main.pressure,
        humidity:data.main.humidity,
        icone:`https://openweathermap.org/img/wn/${icon}@4x.png`,
        description:description,
        sunrise: new Date(data.sys.sunrise*1000),
        sunset: new Date(data.sys.sunset*1000),
          }
      console.log("description",description);
      console.log("icon",icon);
res.json({result:result});
    });
  })
//   edit profile
app.put("/api/users", multer({ storage: storageConfig }).single('img'),(req,res)=>{
console.log("here into bl edit profile",req.body);
bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {
    console.log("here crypted pwd", cryptedPwd);
     req.body.pwd = cryptedPwd;
    req.body.avatar = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
    let newUser = req.body;
    Player.updateOne({ _id:req.body._id }, newUser).then((result) => {
        console.log('here result after update', result);
        result.nModified == 1
            ? res.json({ message: "edited with success" }) :
            res.json({ message: "echec" });
});


});
})
// makee application exportable
module.exports = app;