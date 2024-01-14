const name = 'anurag'
const repoCount= 20

console.log(name + repoCount+ 'tarai');// this method for concatenate is old // outDated and not recommended

// latest way=================================
console.log(`${name}${repoCount}${'tarai'}`);// use of back ticks and place holder// sting interpolation
console.log(`name is ${name} and repo count is ${repoCount}`);

const gameName = new String('pubg')// another way to declare string

console.log(typeof String);