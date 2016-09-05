
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

// Create variables for calc screen
var calc_screen = grab('screen');
var clear_screen = grab('clear-screen');
var clear_history = grab('clear-history');



/* Variables */
var calc = [];
var btn_value = '';
var buttons_pressed = [];



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

// Add click event for clear buttons
click(clear_screen);
click(clear_history);




/* Main Functions */
function click(btn) {
    // Calculate values on screen if equal sign pressed
    if ( btn.id === 'equals' ) {
        btn.addEventListener( 'click',  function() { calculate() } );
    }
    // Clear screen and calc array
    else if (btn.id === 'clear-screen') {
        btn.addEventListener( 'click', function() { clear_the_screen() } );
    }
    // Clear history of selected buttons
    else if (btn.id === 'clear-history') {
        btn.addEventListener( 'click', function() { clear_the_history() } );
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
        calc_screen.innerHTML += added_space_html;
    }
    // Otherwise, no spacing
    else {
        calc_screen.innerHTML += btn.innerHTML;
    }

    add_to_calc(btn);
}


function add_to_calc(btn) {
    // Strip btn html to its value
    // HTML Format:<h2> ? </h2>
    var btn_value = btn.innerHTML.slice(5,6);

    // Add value to calc array
    calc.push(btn_value);
    console.log(calc);
}


function calculate() {
    // Join calc array to string and find answer
    var answer = eval( calc.join('') );
    console.log(answer);

    // Show answer on calc screen
    calc_screen.innerHTML = '<h2> ' + answer + ' </h2>';

    calc = [];
    console.log('calc emptied');
}


function clear_the_screen() {
    console.log('clear the screen');

    // Empty calc array
    calc = [];

    // Screen shows cleared message for 1 second, then empties
    calc_screen.innerHTML = '<h2> Cleared </h2>';
    setTimeout( function(){ calc_screen.innerHTML = '' }, 1000 );
}


function clear_the_history() {
    console.log('clear the history');

     calc = [];
     buttons_pressed = [];

     calc_screen.innerHTML = '<h2> History Cleared </h2>';
     setTimeout( function(){ calc_screen.innerHTML = ''}, 1000 );
}
