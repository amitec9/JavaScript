
Function.prototype.mybind = function(context,...args){
    let fn = this;
    return function(...inner){
        return fn.apply(context,[...args,...inner])
    }
    
}
Function.prototype.mycall = function(context,...args){
    context = context || globalThis;
    let fnSymbol = Symbol()
    context[fnSymbol] =this
    
    let result = context[fnSymbol](...args)
    delete context[fnSymbol] 
    return result;
    
}
Function.prototype.myapply = function(context,args){
   context = context || globalThis;
    let fnSymbol = Symbol()
    context[fnSymbol] =this
    
    let result
    if(Array.isArray(args)){
        result = context[fnSymbol](...args)  
    }else{
       result = context[fnSymbol]
    }
   
    delete context[fnSymbol] 
    return result;  
    
}


let user={
    "name":"amit"
}
function greet(age){
    console.log(this.name,age)
    
}
greet.mycall(user,"25")
greet.myapply(user,["25"])
let fn=greet.mybind(user,"25")
fn()


