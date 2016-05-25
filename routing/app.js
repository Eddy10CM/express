var express = require("express");

var app = express();

app.set("view engine","jade");

//Verbos Http => GET / POST / PUT / PATCH / DELETE
// REST OPTIONS / HEADERS se vera mas adelante

app.get("/",function(req,res) {
	res.render("index");
});

app.get("/algo",function(req,res){
	res.render("form");
});

app.get("/:nombre",function(req,res){
	res.render("form",{nombre: req.params.nombre});
});

app.post("/",function(req,res){
	res.render("form")
})

app.listen(8080);