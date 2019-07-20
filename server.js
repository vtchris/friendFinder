var express = require("express");
//var path = require("path");

var PORT = process.env.PORT || 3000;
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Get server images
app.use("/userimages",express.static(__dirname + '/app/data/images/userImages'));
app.use("/images",express.static(__dirname + '/app/data/images/'));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);




app.listen(PORT, function(){
    console.log("Listening on port " + PORT);
})