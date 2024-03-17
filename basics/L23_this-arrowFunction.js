 // this---------------------
 /* Note: The 'this' keyword in JavaScript is a contextual(have special meanings in multiple contexts) keyword that refers to the current object */
 const user = {
    username : 'anurag',
    price: 2393,
    welcomeMessage:function(){
        console.log(`${this.username} welcome to Myntra`);
        console.log(this);
    }
 }

 user.welcomeMessage // welcome message is a method
 user.welcomeMessage()/**anurag welcome to Myntra
 {
   username: 'anurag',
   price: 2393,
   welcomeMessage: [Function: welcomeMessage]
 } */
 user.username = 'sam'
 user.welcomeMessage()/**sam welcome to Myntra
 {
   username: 'sam',
   price: 2393,
   welcomeMessage: [Function: welcomeMessage]
 } */
 
 console.log(this);// {} // here in node the global bject is {}
 /**Note: console.log(this); will print window object, what is present in browser as global object */
 //--------------------------------------------------------------------------------------------------------
 function chai(){
    let username = "anurag"
    console.log(this);// global random object
    console.log(this.username);// undefined : this work with object not function
 }
 //chai()
 //-----------------------
 const chai1 = function(){
    let username = "tarai"
    console.log(this);// global random object
    console.log(this.username);// undefined :this work with object not function
 }
// chai1()
//-------------------------
const chai2 = ()=>{
    let username = "tarai"
    console.log(this);// {}
    console.log(this.username);// undefined :this work with object not function
 }
 chai2()
 /* ---------------------------------------------------------------------------------- */
 // Arrow function
 /*Note: Explicit means something is clear and unambiguous(without doubts/clear), while implicit means something is understood but not clearly described */
// Explicit return-----
 const addNum =(num1,num2)=>{
        return num1+num2;
 }
 console.log(addNum(2,5));// 7

 // implicit return-----
 const add2Num =(num1,num2)=>( num1+num2);
console.log(add2Num(34,4));// 38

/*Note: {} use return , but if () does not use return */

/* Note:if we want to return object, wrap it with ()*/
const returnObject =()=>({name:'anurag',class:'mca'})
console.log(returnObject());//{ name: 'anurag', class: 'mca' }