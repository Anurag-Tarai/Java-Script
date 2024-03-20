// Stack (premitive), Heap (non premitive )

// stack-- copy of original value
// heap-- reference of original value

//============EXAMPLE STACK==============================
let value1 = "anurag"// store anurag in stack
let value2 = value1 // copy original value of value1 to value2
value2 = "tarai"// reassign value2

console.log(value2);
console.log(value1);

//=============EXAMPLE HEAP==============================
let userOne = { 
    name: 'anurag',
    age:22
} // here anurag and 22 stored in HEAP and userOne in stack which take reference from HEAP
// see the diagram in revision note book
let userTwo = userOne// this also take reference from heap, not copy

console.log(userOne);// { name: 'anurag', age: 22 }
console.log(userTwo);// { name: 'anurag', age: 22 }

userTwo.name = 'tarai'// changing the value in object

console.log(userTwo);// { name: 'tarai', age: 22 }
console.log(userOne);// { name: 'tarai', age: 22 }
// because reference change the original value 
// reference mean we work with original value not copy of it 