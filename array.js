
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
 console.log("This is string starting!");

 const _arr_fruit = ["apple","mango","orange", "goava", "hyderaba"];
   
   _arr_fruit.forEach((el,index, arr) => {
    console.log(`element: ${el} index: ${index} array: ${arr}`);

   })

// this is adding map function and veryfing it functinnalities around all this in array!
   console.log("String array is ending");
console.log("Movie starting!");
   const _arr_movie = ["telugu movies","hindi movies", "tamil movies", "kanda movies", "bengali movies"];
const _res_movie = _arr_movie.map((movie, index, arr) => {
     return movie.toUpperCase();
})
console.log(_res_movie);


