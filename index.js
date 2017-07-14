var express = require('express')
var app = express()
var http = require('http')
var server = http.Server(app)

app.use(express.static(__dirname))

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/example.html')
})

server.listen(1534, function () {
  console.log('listening on port ' + 1534)
})
