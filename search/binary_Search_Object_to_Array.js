// Binary Search for Object in Sorted Array by Email
// Works only on a sorted array of objects based on the 'email' property.
// Uses the divide and conquer approach by repeatedly halving the search space.
// Time Complexity: O(log n)
// Author: Amit Kumar
function binarySearch(arr, email) {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid].email === email) {return arr[mid];}
    if (arr[mid].email < email){l = mid + 1;}
    else{ r = mid - 1;}
  }
  return null;
}

let usersSorted = [
  {email: "a@test.com", id: 1},
  {email: "b@test.com", id: 2},
  {email: "john@example.com", id: 3},
  {email: "z@test.com", id: 4}
];

console.log(binarySearch(usersSorted, "john@example.com")); 
