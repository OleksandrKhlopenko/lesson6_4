"use strict"

function sortByAge(arr) {
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

let user1 = { 
  name: "user1", 
  age: 25 
};
let user2 = { 
  name: "user2", 
  age: 30 
};
let user3 = { 
  name: "user3", 
  age: 28 
};

let arr = [ user1, user2, user3 ];

sortByAge(arr);

alert(arr[0].name); 

alert(arr[1].name);

alert(arr[2].name)