// Hashing Search Example in JavaScript
// Using a Map to store key-value pairs for efficient searching
// In this example, we store user information with email as the key
// and retrieve user details based on the email.
// Time Complexity: O(1) for search operation
// Space Complexity: O(n) for storing n entries
// Author: Amit Kumar

let store = new Map();
store.set("amit@gmail.com",{id:1,name:"Amit"});
store.set("amitkumar@gmail.com",{id:2,name:"Amit Kumar"});
store.set("amit2@gmail.com",{id:3,name:"Amit 2"});
function searchByEmail(email){
    return store.get(email);
}

console.log(searchByEmail("amitkumar@gmail.com"));