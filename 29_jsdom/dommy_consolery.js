/*
   your PPTASK:
   
   Test drive each bit of code in this file,
    and insert comments galore, indicating anything
     you discover,
    	have questions about,
    		or otherwise deem notable.
    		
    		Write with your future self or teammates in mind.
    		
    		If you find yourself falling out of flow mode, consult 
    		other teams
    		MDN

   A few comments have been pre-filled for you...
   
   (delete this block comment once you are done)
*/

// Team Persons :: Justin Morrill, Cameron Nelson, Austin Ngan
// SoftDev pd2
// K29
// 2022-02-9
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)
console.log("AYO");

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
  var j=30;
  return j+x;
};


//instantiate an object
var o = { 'name' : 'Thluffy',
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };


var addItem = function(text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};


var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};


var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};


var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};

//insert your implementations here for...
// FIB
// FAC
// GCD

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

var gcd = (a, b) => {
	if (b !== 0) {
		return gcd(b, a % b);
	} else {
		return a;
	}
}

var gen_fact = () => {
	document.getElementById("fact_div").innerHTML = fact(5);
}
var gen_fib = () => {
	document.getElementById("fib_div").innerHTML = fib(5);
}
var gen_gcd = () => {
	document.getElementById("gcd_div").innerHTML = gcd(10, 6);
}

document.getElementById("fact_button").addEventListener('click', gen_fact);
document.getElementById("fib_button").addEventListener('click', gen_fib);
document.getElementById("gcd_button").addEventListener('click', gen_gcd);