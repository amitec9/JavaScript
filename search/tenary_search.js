function ternarySearch(arr, left, right, target) {
  if (left > right) return -1;

  let mid1 = left + Math.floor((right - left) / 3);
  let mid2 = right - Math.floor((right - left) / 3);

  if (arr[mid1] === target) return mid1;
  if (arr[mid2] === target) return mid2;

  if (target < arr[mid1])
    return ternarySearch(arr, left, mid1 - 1, target);
  else if (target > arr[mid2])
    return ternarySearch(arr, mid2 + 1, right, target);
  else
    return ternarySearch(arr, mid1 + 1, mid2 - 1, target);
}



let arr = [2, 4, 6, 8, 10, 12, 14];
let target = 10;

let index = ternarySearch(arr, 0, arr.length - 1, target);
console.log(index); // 4
