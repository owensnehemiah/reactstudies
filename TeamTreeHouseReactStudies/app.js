var express = require("express");
var app = express();
var jsonParser = require("body-parser").json;
var routes = require("./routes");

var jsonCheck = function(req, res, next){
    if(req.body){
        console.log("Body property Found", req.body.color);
    }
    else{
        console.log("Body property not found");
    }
    next();
};

app.use(jsonParser());
app.use("/questions", routes);

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Listening on port: ", port);
})