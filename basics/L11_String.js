const name = 'anurag'
const repoCount= 20

console.log(name + repoCount+ 'tarai');// this method for concatenate is old // outDated and not recommended

// latest way=================================
console.log(`${name}${repoCount}${'tarai'}`);// use of back ticks and place holder// string interpolation
console.log(`name is ${name} and repo count is ${repoCount}`);// more readable, reliable

const gameName = new String('pubg')// another way to declare string 

console.log(typeof gameName);// object

console.log(gameName [0]);//p // see the sreen short in ipad js folder L11 about prototype
console.log(gameName.__proto__);// {}

console.log(gameName.length);
console.log(gameName.toUpperCase());// PUBG // this does not change the original value ---> L10 stack and heap
console.log(gameName);// [String: 'pubg'] 

console.log(gameName.charAt(3));// g
console.log(gameName.indexOf('g'));// 3

