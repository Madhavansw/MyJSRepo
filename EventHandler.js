
const arr = [1, 2, 3, 4, 6];
const obj = { name: "John", age: 25 };

console.log(typeof arr); // object
console.log(typeof obj); // object
const _aa = [1, 2, 3, 4, 6];
if(Array.isArray(_aa)){
    console.log("This is array");
}
else{
    console.log("This is n't Array!");
}

