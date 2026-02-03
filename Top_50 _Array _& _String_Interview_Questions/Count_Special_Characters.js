//   Count Special Characters
let Word=(str)=>{
    let count =0;
    for(let ch of str){

            if(!(ch >= "0" && ch <= "9") && !(ch >= "A" && ch <= "Z")&& !(ch >= "a" && ch <= "z") ) count++
        
    }
    return count
}
console.log(Word("hello@123#world!"))