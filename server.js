const express = require('express');
const bodyParser = require('body-parser');
var app = express();
var converter = require('./converter');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
var incomingData;

function sendItBack (result) {
	app.get('/output', function (req, res) {
		res.send(result);
		console.log(result);
	})
}

app.post('/input', function(req, res) {
	var body = req.body;
	incomingData = body.htmlText;
	incomingData = converter.converterFunc(incomingData);
	sendItBack(incomingData);
	res.send("INSERTED");
});



function errorCallback(res) {
	return function(err) {
		console.log(err);
        res.status(500); // 500 Server Error
        res.send("ERROR!");
    }
}


var port = process.env.PORT || 8080;
app.listen(port, function () {
	console.log('JSON Server is running on ' + port);
});
