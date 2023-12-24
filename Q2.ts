let shopingcart: any[] = [1, 2, 3, 4, 5];

function additem(item: string) {
  shopingcart.push(item);
  console.log(`${shopingcart}`);
}

function removeitem(quantity: number) {
  shopingcart.splice(2, quantity);
  console.log(`${shopingcart}`);
}
function updateitem(item: string) {
  shopingcart.splice(2, 0, item);
  console.log(`${shopingcart}`);
}
additem("apple");
removeitem(1);
updateitem("apple");
