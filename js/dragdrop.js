function drag(e) {
	e.dataTransfer.setData("Text", this.id);
}

function drop(e) {
	var words;
	words=e.dataTransfer.getData("Text");
	this.appendChild(document.getElementById(words));
	e.preventDefault();
}

function cancelEvent(e){ 
	e.preventDefault();
}

var drophere = document.getElementById("drophere");
drophere.addEventListener("drop", drop);
drophere.addEventListener("dragenter", cancelEvent);
drophere.addEventListener("dragover", cancelEvent);

var dropback = document.getElementById("dropback");
dropback.addEventListener("drop", drop);
dropback.addEventListener("dragenter", cancelEvent);
dropback.addEventListener("dragover", cancelEvent);

