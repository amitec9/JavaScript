let employees = [
  { name: "Amit", age: 30 },
  { name: "Ravi", age: 25 },
  { name: "John", age: 35 }
];

employees.sort((a,b)=> a.age - b.age);

console.log(employees);