/**---------Return of forEach----------- */
const newArray = [2,4,5,6,7,8,9]

const values = newArray.forEach((item)=>{
    return item;
})
console.log(values);// undefined

/**Note : forEach loop does not return any values */
/* ------------------------------------------------------------------*/

/**-----------------------Filter--------------------- */
// : filter() method is used to create a new array with elements that pass a certain test defined by a callback function
// It return a new Array !
const filterArray = newArray.filter((num)=>num>4) // implicit return in L23
console.log(filterArray);//[ 5, 6, 7, 8, 9 ]
//----------Example for practice-------------

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const filterBooks = books.filter((bk)=>bk.genre==="History")
console.log(filterBooks);/**[
    {
      title: 'Book Three',
      genre: 'History',
      publish: 1999,
      edition: 2007
    },
    {
      title: 'Book Seven',
      genre: 'History',
      publish: 1986,
      edition: 1996
    }
  ] */

  const newFilterBooks = books.filter((bk)=>bk.publish>2000 && bk.edition<2015) // if 'bk.publish>2000 && bk.edition<2015' is true call back will return current element
  console.log(newFilterBooks);/**[
    {
      title: 'Book Five',
      genre: 'Science',
      publish: 2009,
      edition: 2014
    }
  ] */
  /**--------------------------------------------------------------------------- */

  /**-------------------------map------------------------ */
  /**Note : map() is a higher-order function that is used to transform elements of an array. It creates a new array by applying a function to each element of the original array. The map() function does not change the original array; instead, it returns a new array with the results of applying the provided function to each element. */
const num = [2,5,7,8]
const newNum = num.map((num)=>num+10)
console.log(newNum);// [ 12, 15, 17, 18 ]

//-----------map Vs filter------------
/**map():----------

Purpose: map() is used to transform each element of an array into a new value based on a callback function.

Return Value: It returns a new array containing the transformed elements, with a one-to-one correspondence to the original array elements.

Callback Function: The callback function used with map() should return a value for each element. This value will be included in the new array. */

/**filter():---------

Purpose: filter() is used to create a new array with elements from the original array that satisfy a certain condition.

Return Value: It returns a new array containing only the elements for which the callback function returns true.

Callback Function: The callback function used with filter() should return a boolean value (true or false). Elements for which the callback returns true are included in the new array. */

/**--------------------------Chaining ------------------------- */
const chainNum = num.map((num)=>num*10).map((num)=>num+1).filter((num)=> num>=50)
console.log(chainNum);// [ 51, 71, 81 ]
/**----------------------------------------------------------------------------------------------- */

/**----------------------------reduce------------------------- */
/** reduce() is higher-order function that is used to process elements of an array and accumulate a single result. Unlike map() and filter(), which create new arrays, reduce() is used to perform a reduction operation on the elements of an array, resulting in a single value. This can be anything from a sum of numbers, concatenation of strings, finding the maximum/minimum value, or even more complex operations. */

const costs = [1,2,3]
const total = costs.reduce((acc,currVal)=>{
        console.log(`acc ${acc} and currVal ${currVal}`);
        return acc + currVal
},0)
console.log(total);/**acc 0 and currVal 1
acc 1 and currVal 2
acc 3 and currVal 3
6 */

//----------Example : Find the Total -----------
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

console.log(`total price is : ${shoppingCart.reduce((acc,curr)=>acc+curr.price,0)}`);// total price is : 22996