function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum += arr[i] * arr[i];
    } else {
      sum += Math.sqrt(arr[i]);
    }
  }
  return sum;
}
console.log(arraySum([2, 3, 4, 5]));
