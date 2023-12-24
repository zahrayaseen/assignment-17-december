function insertvalueinarray(array_1: any[], index: number, value: number) {
  array_1.splice(index, 0, value);
  return array_1;
}
console.log(insertvalueinarray([1, 2, 3, 4], 2, 3));
