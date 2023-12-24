"use strict";
function insertvalueinarray(array_1, index, value) {
    array_1.splice(index, 0, value);
    return array_1;
}
console.log(insertvalueinarray([1, 2, 3, 4], 2, 3));
