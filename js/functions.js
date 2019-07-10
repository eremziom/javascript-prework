function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function printMessage1(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('score').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function clearMessages1(){
	document.getElementById('score').innerHTML = '';
}