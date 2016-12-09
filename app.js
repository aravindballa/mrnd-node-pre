var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3300;

var app = express();
var controller = require('./controllers/route');

//setting the static files
app.use(express.static('./public'));

app.use(bodyParser.json());

app.get('/',function(req,res){
	res.sendFile(__dirname + "/index.html");
});

//setting the controller (router)
app.use('/', controller);

app.listen(port, function () {
  console.log("listening on port 3300");
});
