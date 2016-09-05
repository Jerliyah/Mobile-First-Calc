
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
var equals = grab('equals');

// Create variable for calc screen
var screen = grab('screen');



/* Variables */
var calc = [];
var btn_value = '';



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
click(equals);




/* Main Functions */
function click(btn) {
    // Calculate values on screen if equal sign pressed
    if ( btn.id === 'equals' ) {
        btn.addEventListener( 'click',  function() { calculate() } );
    }
    // Simply add values to screen if numbers or operators
    else {
        btn.addEventListener( 'click',  function() { add_to_screen(btn) } );
    }
}


function add_to_screen(btn) {
    // Trim HTML because outside space and line breaks in markup will appear
    btn.innerHTML = btn.innerHTML.trim();

    // If btn is an operation, put space around its symbol for calc screen
    if ( btn.classList.contains('opr') ) {
        var added_space_html = btn.innerHTML.replace(/\s/g, '&nbsp;&nbsp;');
        screen.innerHTML += ' ' + added_space_html + ' ';
    }
    // Otherwise, no spacing
    else {
        screen.innerHTML += btn.innerHTML;
    }

    add_to_calc(btn);
}


function add_to_calc(btn) {
    // Strip btn html to its value
    // HTML Format:<h2> ? </h2>
    var btn_value = btn.innerHTML.slice(5,6);

    // Add that value to calc array for later calculation
    // Convert strings to numbers
    if( parseInt(btn_value) ) {
        var btn_num = parseInt(btn_value);
        calc.push(btn_num);
    }
    // If they can't be converted (the operations), just push to calc as string of symbol
    else {
        calc.push(btn_value);
    }

    console.log(calc);
}


function calculate() {
    var mathInput = screen.innerHTML;
    console.log(mathInput);
}




// Faster Way
