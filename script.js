let obj1 = {name: "Person 1", age: 5};
let obj2 = {age: 5, name: "Person 1"};


let Obj1 = JSON.stringify(obj1, Object.keys(obj1).sort());
let Obj2 = JSON.stringify(obj2, Object.keys(obj2).sort());


if (Obj1 === Obj2) {
  console.log("The objects are equal");
} else {
  console.log("The objects are not equal");
}
