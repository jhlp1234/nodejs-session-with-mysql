const express = require("express");
const app = express();
const session = require("express-session");
const MysqlStore = require("express-mysql-session")(session);

const root = require("./rotues/root.js");
const options = require("./sql/options.json");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    name: "logined",
    secret: "huioathiuatihu;atriha",
    resave: false,
    saveUninitialized: false,
    store: new MysqlStore(options),
    cookie: {
        maxAge: 1000*60*60*24,
        httpOnly: true
    }
}))

app.use("/", root);

app.listen(5000, function(){
    console.log("Go");
})