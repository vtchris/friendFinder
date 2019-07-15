var express = require("express");
//var path = require("path");

var PORT = process.env.PORT || 3000;

var app = express();
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);



app.listen(PORT, function(){
    console.log("Listening on port " + PORT);
})