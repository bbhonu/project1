

var drophere = document.getElementById("drophere");
drophere.addEventListener("drop", drop);
drophere.addEventListener("dragenter", cancelEvent);
drophere.addEventListener("dragover", cancelEvent);

var dropback = document.getElementById("dropback");
dropback.addEventListener("drop", drop);
dropback.addEventListener("dragenter", cancelEvent);
dropback.addEventListener("dragover", cancelEvent);

