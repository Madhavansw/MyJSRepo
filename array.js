
const arr =  [12,40,2,4,6,7,60,30];
 const res =arr.push(12,34,5,60);
 console.log(`This result of push :${res}`)
// push() adds elements to the end of the array and returns the new length
 const func = (...args) => {
  args.forEach((el, index, a) => {
    console.log(`Element: ${el}, Index: ${index}, Array: ${a}`);
  });
};



 // callling fun function
 func(12,40,34,67,100);
