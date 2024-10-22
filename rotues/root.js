const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    if(req.session.name != undefined){
        res.send("<a href='/logout'>Logout</a>");
    }
    else{
        res.send("<a href='/login'>Login</a>");
    }
})

router.get("/login", function(req, res){
    res.send(`<form action="/login_process" method="post">
    <p><input type="text" name="name" placeholder="Name" required></p>
    <p><input type="password" name="password" placeholder="Password" required></p>
    <input type="submit" value="로그인">
    </form>`);
})

router.post("/login_process", function(req, res){
    let post = req.body;
    req.session.name = post.name
    req.session.save(function(){
        res.redirect("/");
    })
})

router.get("/logout", function(req, res){
    req.session.destroy(function(){
        res.redirect("/");
    })
})

module.exports = router;