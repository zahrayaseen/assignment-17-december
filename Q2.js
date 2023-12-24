"use strict";
let shopingcart = [1, 2, 3, 4, 5];
function additem(item) {
    shopingcart.push(item);
    console.log(`${shopingcart}`);
}
function removeitem(quantity) {
    shopingcart.splice(2, quantity);
    console.log(`${shopingcart}`);
}
function updateitem(item) {
    shopingcart.splice(2, 0, item);
    console.log(`${shopingcart}`);
}
additem("apple");
removeitem(1);
updateitem("apple");
