Array.prototype.myMap = function (callback){
    let result =[];
    for(let i=0;i<this.length;i++){
        result.push(callback(this[i],i,this))
    }
    return result;
}
let a = [1,2,3,4,5,6].myMap(num => num*2)
console.log("Map : - ",a)

Array.prototype.myforEach = function (callback){
    for(let i=0;i<this.length;i++){
        callback(this[i],i,this)
    }
   
}
let b = [1,2,3,4,5,6].myforEach((value,index,arr)=>{
    console.log("foreach", value)
    return arr
})
console.log("foreach : - ",b)


Array.prototype.myfilter = function (callback){
    let result =[]
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)) result.push(this[i])
    }
   return result
}
let c = [1,2,3,4,5,6].myfilter(num => num % 2 === 0)
console.log("filter : - ",c)

Array.prototype.myfind = function (callback){
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)) return this[i]
    }
   
}
let d = [1,2,3,4,5,6].myfind(num => num % 2 === 0)
console.log("find : - ",d)

Array.prototype.mysome = function (callback){
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)) return true
    }
   return false
}
let e = [1,2,3,4,5,6].mysome(num => num % 100 === 0)
console.log("some : - ",e)

Array.prototype.myEvery = function (callback){
    for(let i=0;i<this.length;i++){
        if(!callback(this[i],i,this)) return false
    }
   return true
}
let f = [1,2,3,4,5,6].myEvery(num => num % 1 === 0)
console.log("every : - ",f)


Array.prototype.myfindIndex = function (callback){
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)) return i
    }
   return -1
}
let g = [1,2,3,4,5,6].myfindIndex(num => num % 2 === 0)
console.log("myfindIndex : - ",g)

Array.prototype.myreduce= function(callback,intinal){
    let acc = intinal != undefined ?intinal:this[0];
      let start = intinal !== undefined ? 0 : 1;
    for(let i=start;i<this.length; i++){
     acc = callback(acc,this[i],i,this)
    }
    return acc;
}

let r =[5,2,3,4,5].myreduce((acc,curr)=>acc+curr,90)
console.log("myreduce:- ",r)