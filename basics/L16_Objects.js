 // singleton
 // object.create

const mySym = Symbol("key1")

 // object literals
 const JsUser = {
    name:"anurag",
    "full name": "anurag tarai",
    [mySym]:"key1",
    age:22,
    phone:203280940
 }// keys : name,age,phone; value:anurag,22,203280940

// access properties of object
// console.log(JsUser.name);
// console.log(JsUser["full name"]);


// [mySym] syntax for symbol access
//console.log(JsUser[mySym]);// key1
//console.log(JsUser); 
/*{
   name: 'anurag',
   'full name': 'anurag tarai',
   age: 22,
   phone: 203280940,
   [Symbol(key1)]: 'key1'
 }*/

// Object.freeze()--------
// Object.freeze(JsUser)
// JsUser.age = 25
// console.log(JsUser.age);// 22

// function as value of object
JsUser.greeting = function(){
   console.log("hello js user");
}
console.log(JsUser.greeting);//[Function (anonymous)]
console.log(JsUser.greeting());// hello js user

JsUser.greetingtwo = function(){
   console.log(`hello js user,${this.name}`);
}
console.log(JsUser.greetingtwo());// hello js user,anurag