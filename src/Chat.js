import React from 'react';
import ChatFunctionality from './ChatFunctionality';

function Chat() {
    const rawMarkup = `
<html>
	<head>
		<title> RoomateChat</title>
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
<script src="/socket.io/socket.io.js"></script>
	</head>

<body>

<div id="memechat"> <p id="p">RoomateChat</p><p id="pr"> </p></div>
<br>
<br>
<div id="holder">
	<form id="messageForm">


			<input type="text" id="messageInput" placeholder="Message Roomate"/>
			<button type="submit"  id="btn" onclick="hidel()"> Send </button>

	</form>

	<div class="chat" id="chat" style="overflow-y:scroll; height:450px;">


<div id="messageBox">

</div>
</div>



	</div>
<button type="submit"  id="btn1" onclick="showl()"> Show All </button>
<div id="people" style="overflow-y:scroll; height:450px;">
</body>






<script>
var socket = io.connect();  //connects to socket

$(function(){
var $people = $("#people");

var $messageForm = $("#messageForm"); //ref to the div message form
var $messageInput = $("#messageInput"); //ref to input box with id message
var $chat = $("#chat"); //ref to div chat

$messageForm.submit(function(e){
e.preventDefault();
socket.emit("send message", $messageInput.val());
$messageInput.val("");


});
socket.on("new message", function(data){


if(data.msg.length > 0){
$chat.append('<br>'  +'<div id="circle"> ' + '<textarea id="t" readonly>' + data.msg + '</textarea>'+' </div>' + '<br>' );

}
});

socket.on("new roommate", function(data){

$people.append('<br>'  +'<div id="circle1"> ' + ' </div>' + '<br>' );

});

socket.on("roommate left", function(data){


$("#circle1").remove();


});
});






showlog = false;
window.setInterval(function() {
if(showlog == false){
  var chat = document.getElementById("chat");
  chat.scrollTop = chat.scrollHeight;

  var people = document.getElementById("people");
  people.scrollTop = people.scrollHeight;
  }
}, 4);

function showl(){
showlog = true;

}
function hidel(){
var chat = document.getElementById("chat");
  chat.scrollTop = chat.scrollHeight;
  var people = document.getElementById("people");
  people.scrollTop = people.scrollHeight;
showlog = false;
}








</script>









<style>
body{
background-color:#0076A5;

}
#p{
margin-top:9px;
}
#people{

background-color:#AB0C2F;
width:220px;
height:440px;
margin-left:767px;
margin-top:-462px;
border: 6px solid white;



}
#pr{
font-size:12px;
margin-top:-34px;
margin-left: 82px;
}
#memechat{
background-color:#000000;
font-family: monospace;
color:white;
font-size: 20px;
text-align:center;
border: 2px solid white;
border-radius:15px;
width:210px;
height:60px;

}

#btn{
background-color: white;
font-size:15px;
font-family: Verdana;
color:black;
width:56px;
height:51px;
text-align: center;
margin-left:0px;
border-radius:10px;
outline:none;
border: 2px solid #e74c3c;

}
#btn1{
background-color: white;
font-size:15px;
font-family: Verdana;
color:black;
width:100px;
height:40px;
text-align: center;
margin-left:1040px;
margin-top: -40px;
border-radius:10px;
outline:none;
border: 2px solid #e74c3c;

}
#messageInput{
 margin-left: 532px;
text-align:center;
border-radius:10px;
outline:none;
shadow:none;
font-size:15px;
font-family: Verdana;
color:black;
width:250px;
height:50px;
}


#t {
text-align:left;
font-size:15px;
font-family: Verdana;
color:black;
border: 2px solid #AB0C2F;
  margin-top: -5px;
  margin-left: 72px;
  width:200px;
  height:90px;
  background-color:white;
  border-radius:12px;
  resize: none;
      outline: none;

}
#chat{

border: 6px solid white;
width:459px;
background-color:#888B8D;
margin:auto;
border-radius: 10px;
margin-left:300px;
}

::-webkit-scrollbar {
	display: none;
}
#circle{
width:50px;
height:50px;
border-radius:100px;
border: 5px solid white;
margin-left:25px;
background-color:#AB0C2F;

}
#circle1{
width:50px;
height:50px;
border-radius:100px;
border: 5px solid white;
margin-left:25px;
background-color:#3498db;

}

</style>

</html>

`
return <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
}
export default Chat;