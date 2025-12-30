/**
 * 🔹 9. Priority Queue / Heap

Answer:

Queue where element with highest priority dequeued first.

Implemented using Heap (O(log n)).

👉 Real-time Example:

Task scheduling in OS

Job queue (urgent jobs first)

👉 Node.js Example (NPM heap library):

import Heap from "heap";
let pq = new Heap((a, b) => a.priority - b.priority);
pq.push({task: "Email", priority: 2});
pq.push({task: "Payment", priority: 1});
console.log(pq.pop()); // {task: "Payment", priority: 1}


const rateLimit = require("express-rate-limit");
app.use(rateLimit({ windowMs: 1*60*1000, max: 100 })); 

const fs = require("fs");
const stream = fs.createWriteStream("data.csv");
dbCursor.forEach(row => stream.write(row.toCSV()));
D. General DS/Algo (Medium level, Non-FAANG)

Q1: Two Sum
👉 HashMap O(n)

let nums=[2,7,11,15], target=9, map=new Map();
for(let i=0;i<nums.length;i++){
  if(map.has(target-nums[i])) console.log([map.get(target-nums[i]), i]);
  map.set(nums[i],i);
}


Q2: Longest substring without repeat (Sliding Window)
👉 O(n)

let s="abcabcbb", set=new Set(), l=0, ans=0;
for(let r=0;r<s.length;r++){
  while(set.has(s[r])) set.delete(s[l++]);
  set.add(s[r]);
  ans=Math.max(ans, r-l+1);
}
console.log(ans); // 

let n=101
if(parseInt(n/2)*2 == n){
    console.log("even")
}else{
    console.log("odd")
}
 */