// Team Phantom Tollbooth :: Clyde Sinclair, Fierce Dragon 
// SoftDev pd0
// K27 -- Basic functions in JavaScript
// 2022-02-03r
// --------------------------------------------------


// as a duo...
// pair programming style,
// implement a fact and fib fxn


//Do whatever you think is needed. Think: S I M P L E.   Think: S M A R T.

var fib = (n) => {
	if (n <= 1) {
		return n;
	} else {
		return fib(n - 1) + fib(n - 2);
	}
}

var fact = (n) => {
	if (n == 0) {
		return 1;
	} else {
		return n * fact(n - 1);
	}
}

var iota = (n) => {
	if (n == 0) {
		return [];
	} else {
		return iota(n - 1).concat(n);
	}
}