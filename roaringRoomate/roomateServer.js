var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);
//setting the required variables

roommates = []; //users array
roomConnections = []; //connections array

server.listen(process.env.PORT || 2020);  // It will run on localhost:(any number)
console.log("Roomate Pairing Server Is Up");

app.get("/", function(req, res){

	res.sendFile(__dirname + "/index.html"); //links to html file CHANGE /index.html to you actually html file

});


io.sockets.on("connection", function(socket){
	//connection stuff
	roomConnections.push(socket);
				io.sockets.emit("new roommate"); //checks if anyone is online

	console.log("Roommate connected: %s", roomConnections.length);




	// disconnection stuff
	socket.on("disconnect", function(data){

		roommates.splice(roommates.indexOf(socket.username), 1); //accessing the array memers

						io.sockets.emit("roommate left"); //checks if memer left

	roomConnections.splice(roomConnections.indexOf(socket),1);
	console.log("Roomate disconnected: %s ", roomConnections.length);
	});

	//send dem meme messages
	socket.on("send message", function(data){
		console.log(data);// shows what the memers typed in console
		io.sockets.emit("new message", {msg: data});


	});



	});
