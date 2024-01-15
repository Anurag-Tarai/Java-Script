// const name = 'anurag'
// const repoCount= 20

// console.log(name + repoCount+ 'tarai');// this method for concatenate is old // outDated and not recommended

// morden way=================================
// console.log(`${name}${repoCount}${'tarai'}`);// use of back ticks and place holder// string interpolation
// console.log(`name is ${name} and repo count is ${repoCount}`);// more readable, reliable

// const gameName = new String('pubg')// another way to declare string 

// console.log(typeof gameName);// object

// string prototype and method=========================================// mdn docuement in detail// very important, become familiar with string methods
// console.log(gameName [0]);//p // see the sreen short in ipad js folder L11 about prototype
// console.log(gameName.__proto__);// {}

// console.log(gameName.length);
// console.log(gameName.toUpperCase());// PUBG // this does not change the original value ---> L10 stack and heap
// console.log(gameName);// [String: 'pubg'] 

// console.log(gameName.charAt(3));// g // string methods
// console.log(gameName.indexOf('g'));// 3

// const NewString = gameName.substring(0,3)// Not include last position // no -ve value
// console.log(NewString);// pub

// const anotherString = gameName.slice(-3,3)// start from negative
// console.log(anotherString);// ub

// const string1 = '  anurag  '
// console.log(string1);
// console.log(string1.trim());// remove spaces // mdn document read more

// const url = 'http://anurag.com/tarai%20odisha'

// console.log(url.replace('%20','**'));// http://anurag.com/tarai**odisha
// console.log(url.includes('anur'));// true // to findout value present in the string or not

// const string2 = 'anurag-tarai-mca-vssut'
// console.log(string2.split('-'));// slipt into array

//==> you need familiar with string methods




