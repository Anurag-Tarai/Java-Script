// const marvel_heros = ['thor','ironman','captain']
// const dc_heros = ['batman','superman','flash']

// concat--------
// const allHeros = marvel_heros.concat(dc_heros)// concat merge two array and return a new array
// console.log(allHeros);// [ 'thor', 'ironman', 'captain', 'batman', 'superman', 'flash' ]

// spread operator (...)--------
// const allHeros2 = [...marvel_heros,...dc_heros]
// console.log(allHeros2);// [ 'thor', 'ironman', 'captain', 'batman', 'superman', 'flash' ]

// flat()----------
// const another_array = [1,2,4,[3,57,3,6,32,[4,5,6,7]]]
// const arrFlat = another_array.flat(Infinity)
// console.log(arrFlat);//[  1, 2,  4, 3, 57,  3, 6, 32, 4,  5, 6, 7 ]

//Array.isArray(arg)---------
// console.log(Array.isArray("Anurag"))// false

//Array.from(arg)// convert any value to array-----------
// console.log(Array.from("Anurag"));//[ 'A', 'n', 'u', 'r', 'a', 'g' ]

// console.log(Array.from({name:"anurag"}));//[] //interesting case : can't decide keys ka array banau, ya values ka array banau !


// Array.of(arg1,arg2,arg3....) // create a new array using all values of arg----------
// let score1 = 298
// let score2 = 983
// let score3 = 239
// console.log(Array.of(score1,score2,score3));//[ 298, 983, 239 ]