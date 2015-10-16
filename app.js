'use static';

var express = require('express');
var app = express();

app.set('port', 8081);

// app.use(express.static('.'));
app.use('css', express.static('css'));


app.get('/', function(req, resp){
	resp.sendFile(__dirname + '/index.html');
});

app.listen(app.get('port'),function(){
	console.log('express listenning ' + app.get('port'));
});
