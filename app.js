var express = require('express');
var bodyParser = require('body-parser');

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

app.listen(3300, function () {
  console.log("listening on port 3300");
});
