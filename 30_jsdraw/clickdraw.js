/* 
	Cameron Nelson, Austin Ngan
	Softdev pd2 
	K30 - drawing in js 
	2022-2-14
*/

var c = document.getElementById("slate");

var ctx = c.getContext("2d");

var mode = "rect";

var toggleMode = (e) => {
	console.log(e);
	console.log("toggling... ");
	if (mode == "rect") {
		mode = "circle";
		bToggler.textContent = " circle ";
	} else {
		mode = "rect";
		bToggler.textContent = " rectangle ";
	}
}

var drawRect = (e) => {
	var mouseX = e.clientX - c.offsetLeft;
	var mouseY = e.clientY - c.offsetTop;
	ctx.beginPath();
	ctx.fillStyle = 'red';
	ctx.fillRect(mouseX, mouseY, 100, 100);
	console.log(e);
}

var drawCircle = (e) => {
	var mouseX = e.clientX - c.offsetLeft;
	var mouseY = e.clientY - c.offsetTop;
	ctx.fillStyle = 'red';
	ctx.beginPath();
	ctx.arc(mouseX, mouseY, 50, 0, 2 * Math.PI);
	ctx.fill();
	ctx.stroke();
}

var draw = (e) => {
	if (mode == "rect") {
		drawRect(e);
	} else {
		drawCircle(e);
	}
}

var wipeCanvas = () => {
	ctx.beginPath();
	ctx.fillStyle = 'white';
	ctx.clearRect(0, 0, c.clientWidth,c.clientHeight);
}

c.addEventListener('click', draw);
var bToggler = document.getElementById("buttonToggle");
bToggler.addEventListener('click', toggleMode);
var clearB = document.getElementById("buttonClear");
clearB.addEventListener('click', wipeCanvas);
