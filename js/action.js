
/* Grab Elements from HTML */

// Grab html elements by their id name
function grab(idName) {
    return document.getElementById(idName);
}

// Create variables for numbered buttons
var btn_1 = grab('one');
var btn_2 = grab('two');
var btn_3 = grab('three');

var btn_4 = grab('four');
var btn_5 = grab('five');
var btn_6 = grab('six');

var btn_7 = grab('seven');
var btn_8 = grab('eight');
var btn_9 = grab('nine');

var btn_0 = grab('zero');

// Create variables for operation butttons
var plus = grab('plus');
var minus = grab('minus');
var times = grab('times');
var divided = grab('divided');

// Create variable for calc screen
var screen = grab('screen');



/* On click event */

// Add click event for numbered buttons
for (var i=0; i < 10; i++) {
    var specified_btn = 'btn_' + i;
    // Convert specified_btn from string to var for the click function
    click( eval(specified_btn) );
}

// Add click event for operation buttons
click(plus);
click(minus);
click(times);
click(divided);




/* Main Functions */
function click(btn) {
    btn.addEventListener( 'click',  function() { add_to_screen(btn) } );
}

function add_to_screen(btn) {
    screen.innerHTML += btn.innerHTML;
}




// Faster Way
