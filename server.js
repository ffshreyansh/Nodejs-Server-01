
const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Hello")
}); 

app.get("/contact", function(req, res){
    res.send("contact me at: shreyanshkumar058@gmail.com")
});

app.get("/about", function(req, res){
    res.send("I am Shreyansh Kumar, 3rd year CSE student and this is my local host server in express")
});

app.get("/hobbies", function(req, res){
    res.send("Internet Surfing, Reading")
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})