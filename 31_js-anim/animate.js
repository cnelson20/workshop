// Team Phantom Tollbooth :: Clyde Sinclair, Fierce Dragon
// SoftDev pd0
// K31 -- canvas based JS animation
// 2022-02-15t

// model for HTML5 canvas-based animation

// SKEELTON


//access canvas and buttons via DOM
var c = document.getElementById("playground"); // GET CANVAS
var dotButton = document.getElementById("buttonCircle"); // GET DOT BUTTON
var stopButton = document.getElementById("buttonStop"); // GET STOP BUTTON

	//prepare to interact with canvas in 2D
var ctx = c.getContext('2d'); // YOUR CODE HERE

	//set fill color to team color
ctx.fillStyle = 'blue'; // YOUR CODE HERE

var requestID;  //init global var for use with animation frames


//var clear = function(e) {
var clear = (e) => {
	console.log("clear invoked...")
	ctx.clearRect(0, 0, c.clientWidth, c.clientHeight);
	// YOUR CODE HERE
};


var radius = 0;
var growing = true;

var drawCircle = () => {
	clear();
	ctx.beginPath();
	ctx.arc(c.clientWidth / 2, c.clientHeight / 2, radius, 0,  2 * Math.PI);
	ctx.fill();
	if (growing) {
		if (++radius == Math.min(c.clientWidth / 2,c.clientHeight / 2)) {
			growing = false;
		}
	} else {
		if (--radius == 0) {
			growing = true;
		}
	}
}

//var drawDot = function() {
var drawDot = () => {
	console.log("drawDot invoked...")

	window.cancelAnimationFrame(requestID);
	requestID = window.requestAnimationFrame(drawCircle);
	/*
      ...to
      Wipe the canvas,
      Repaint the circle,

      ...and somewhere (where/when is the right time?)
      Update requestID to propagate the animation.
      You will need
      window.cancelAnimationFrame()
      window.requestAnimationFrame()

	*/
};


//var stopIt = function() {
var stopIt = () => {
	console.log("stopIt invoked...")
	console.log( requestID );

	window.cancelAnimationFrame(requestID);
	// YOUR CODE HERE
	/*
      ...to
      Stop the animation

      You will need
      window.cancelAnimationFrame()
	*/
};


dotButton.addEventListener( "click", drawDot );
stopButton.addEventListener( "click",  stopIt );
