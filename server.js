const express = require('express');
const bodyParser = require('body-parser');
var app = express();
var converter = require('./converter');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
//variable to hold incoming data
var incomingData;
//variable to hold outgoing data
var outgoingData;

//send outgoing data back to the browser
function sendItBack () {
	app.get('/output', function (req, res) {
		res.send(outgoingData);
	})
}

//receive incoming data
app.post('/input', function(req, res) {
	var body = req.body;
	incomingData = body.htmlText;
	//call the convereter function on the data
	outgoingData = converter.converterFunc(incomingData);
	//send data back to the browser
	sendItBack();
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
