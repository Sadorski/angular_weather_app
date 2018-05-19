var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var path = require('path');
app.use(express.static(path.join(__dirname, 'myWeatherApp/dist/myWeatherApp')));
app.set('views', path.join(__dirname, 'client/views'));
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./myWeatherApp/dist/myWeatherApp/index.html"))
  });
app.listen(8000, function() {
    console.log("listening on port 8000");
})