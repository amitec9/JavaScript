global.requestAnimationFrame = function (cb) {
  return setTimeout(() => cb(Date.now()), 16);
};

function mySetTimeout(cb,delay){
  let start = Date.now()
  function check(){
  let now = Date.now() 
  if(now - start >= delay){
    cb()
  } else {
      requestAnimationFrame(check);
    }
  }
requestAnimationFrame(check);
}
mySetTimeout(() => console.log("A"), 300)