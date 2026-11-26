
function callback(a,b, cb){
const _res = a+b;
 cb(_res);
}

callback(12,30, () => {console.log(_res)});

function callbackHell(a, b){
 const res = a + b;
  return () => {
    console.log(`result:${res}`);
  }
}

const calres = callbackHell(20.40);
 calres();
 
