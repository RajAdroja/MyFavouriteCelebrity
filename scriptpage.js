var x = 1
function append () {
const list = document . querySelector ( 'ul' );
const item = document . createElement ( 'li' );
item . textContent = 'Item ' + x ;
x = x + 1 ;
list . appendChild ( item );
}
function insertbefore () {
const list = document . querySelector ( 'ul' );
const item = document . createElement ( 'li' );
item . textContent = 'Item ' + x ;
x = x + 1 ;
list . insertBefore ( item , list . firstElementChild );
}
function replace () {
const list = document . querySelector ( 'ul' );
const item = document . createElement ( 'li' );
item . textContent = 'Item ' + x ;
var y = x - 2 ;
list . replaceChild ( item , list . children [ y ]);
x = x + 1 ;
}
function remove () {
const list = document . querySelector ( 'ul' );
list . removeChild ( list . lastElementChild );
x = x - 1 ;
}
