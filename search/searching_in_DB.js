// Searching in DB → Indexing बहुत important है।

// Example:

// // MongoDB
// db.users.find({ email: "abc@test.com" }).explain("executionStats");

// // MySQL (Node.js)
// SELECT * FROM users WHERE email='abc@test.com'; 
// -- ensure INDEX on email


// 👉 Without index → Linear search (O(n))
// 👉 With index → B-tree/B+Tree (O(log n))