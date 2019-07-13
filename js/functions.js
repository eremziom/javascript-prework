function printMessage(msg, id){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById(id).appendChild(div);
}

function clearMessages(clear){
	document.getElementById(clear).innerHTML = '';
}