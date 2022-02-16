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

var requestID = false;  //init global var for use with animation frames


//var clear = function(e) {
var clear = (e) => {
	console.log("clear invoked...")
	ctx.clearRect(0, 0, c.clientWidth, c.clientHeight);
	// YOUR CODE HERE
};


var radius = 0;
var growing = true;

var paddleHeight = 90;
var paddleWidth = 10;
var paddleMovementSpeed = 5;

var paddle1_x = 15;
var paddle1_y = c.clientHeight / 2 - paddleHeight / 2;

var paddle2_x = c.clientWidth - 15 - paddleWidth;
var paddle2_y = c.clientHeight / 2 - paddleHeight / 2;

var ball_size = 10;

var x2 = 100;
var x2vel = 2.2;
var y2 = 150;
var y2vel = -2;


/* storage variables */
var xdiff;
var ydiff;
var j;
var radius_squared;

async function drawCircle() {
	clear();
	
	ctx.fillStyle = 'blue';
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
	ctx.fillStyle = 'black';
	ctx.beginPath();
	ctx.arc(x2, y2, ball_size, 0, 2 * Math.PI);
	ctx.fill();
	
	x2 += x2vel;
	y2 += y2vel;
	if (x2 <= ball_size) {
		x2 = c.clientWidth / 2;
		x2vel = 2.2;
	} else if (x2 >= c.clientWidth - ball_size) {
		x2 = c.clientWidth / 2;
		x2vel = -2.2;
	}
	if (y2 <= ball_size) {
		y2vel *= -1;
	} else if (y2 >= c.clientHeight - ball_size) {
		y2vel *= -1;
	}
	
	//ctx.beginPath();
	//ctx.strokeRect((c.clientWidth - 15) - paddleWidth - ball_size,0,c.clientWidth,c.clientHeight);
	//ctx.stroke();
	if (x2vel > 0 && x2 >= c.clientWidth - 15 - paddleWidth - ball_size) {
		radius_squared = ball_size * ball_size; 
		xdiff = paddle2_x - (x2 + 15);
		ydiff = paddle2_y - y2;
		j = 0;
		while(j <= 1.0) {
			if (xdiff * xdiff + ydiff * ydiff < radius_squared) {
				x2vel *= -1;
				break;
			}
			xdiff = (paddle2_x + paddleWidth) - (x2 + 15);
			if (xdiff * xdiff + ydiff * ydiff < radius_squared) {
				x2vel *= -1;
				break;
			}
			j += 0.1;
			ydiff += 0.1 * paddleHeight;
		}
	} else if (x2vel < 0 && x2 <= 15 + paddleWidth + ball_size) {
		radius_squared = ball_size * ball_size; 
		xdiff = paddle1_x - x2;
		ydiff = paddle1_y - y2;
		j = 0;
		while(j <= 1.0) {
			if (xdiff * xdiff + ydiff * ydiff < radius_squared) {
				x2vel *= -1;
				x2 = paddle1_x + paddleWidth + ball_size;
				break;
			}
			xdiff = (paddle1_x + paddleWidth) - x2;
			if (xdiff * xdiff + ydiff * ydiff < radius_squared) {
				x2vel *= -1;
				x2 = paddle1_x + paddleWidth + ball_size;
				break;
			}
			j += 0.1;
			ydiff += 0.1 * paddleHeight;
		}
	}
	
	ctx.fillStyle = 'gray';
	ctx.fillRect(paddle1_x, paddle1_y, paddleWidth, paddleHeight);
	ctx.fillRect(paddle2_x, paddle2_y, paddleWidth, paddleHeight);
	
	requestID = window.requestAnimationFrame(drawCircle);
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
	requestID = false;
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

window.addEventListener('keydown', (e) => {
	//console.log(e);
	//console.log(e.key);
	if (requestID !== false) {
		if (e.keyCode == 87 /* W */) {
			paddle1_y = Math.max(0, paddle1_y - paddleMovementSpeed);
		} else if (e.keyCode == 83 /* S */) {
			paddle1_y = Math.min(paddle1_y + paddleMovementSpeed, c.clientHeight - paddleHeight);
		} else if (e.keyCode == 73 /* I */) {
			paddle2_y = Math.max(0, paddle2_y - paddleMovementSpeed);
		} else if (e.keyCode == 75 /* K */) {
			paddle2_y = Math.min(paddle2_y + paddleMovementSpeed, c.clientHeight - paddleHeight);
		}
	}
});
