let user ={name:"Amit kumar"}
function greet(age){
    console.log(`name ${this.name} age ${age} `)
}
greet.call(user,28)
greet.apply(user,[28])
let fn=greet.bind(user,28)
fn()