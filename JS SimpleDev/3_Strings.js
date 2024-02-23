/*
Strings represent text


What should we use to create a string?
1. Use ' . . . ' by default
2. If we need interpolation, multi-line strings
use
*/

typeof 2;
("number");

typeof "hello";
("string");

// Concatenation

"hello" + 3;
("hello3");

"some" + "text";
("sometext");

"$" + 20.95 + 7.99;
("$20.957.99");

"Items (" + (1 + 1) + "):$" + (2095 + 799) / 100;
"Items (2):$28.94"`some
text`;
("some\ntext");

// Exercises

// 3a
let name = 'My name is:';
name
'My name is:'

// 3b
let myName = 'Arpita'

// 3c
name+myName
'My name is:Arpita'

//3d

'Total cost: $' + (5 + 3)
'Total cost: $8'

//3e

`Total cost: $${5 + 3}`
'Total cost: $8'

//3f

alert(`Total cost: $${5 + 3}`);

//3g

'Total cost: $' + (599 + 295) / 100
'Total cost: $8.94'

//3h

`Total cost: $${(599 + 295) / 100}`
'Total cost: $8.94'

//3i

alert(`Total cost: $${(599 + 295) / 100}`);

// 3j

alert(`Total cost: $${(599 + 295) / 100}
Thank you, come again!`);

// 3k

`Items (${2 + 2}): $${(2 * 2095 + 2 * 799) / 100}`
'Items (4): $57.88'

// 3l

`Shipping & handling: $${(499 + 499) / 100}`
'Shipping & handling: $9.98'

// 3m
// 3n