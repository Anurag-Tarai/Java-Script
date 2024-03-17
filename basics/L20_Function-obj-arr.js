// Here '...' is called rest operator
function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200,22,56))// [ 200, 22, 56 ]

/* NOTE: The return statement ends function execution and specifies a value to be returned to the function caller. No values mean stop execution of function without return any value */ 

/* ------------------------------------------- */

// Passing Object in the function

const UserDetail = {
    UserName : {
        FirstName : "Anurag",
        LastName : "Tarai"
    },
    UserAddress : "Balugaon, Khorda",
    Id : "232080923098"
}
function GetUserDetail(obj){
    //console.log(`First Name : ${obj.UserName.FirstName} \nAddress : ${obj.UserAddress}`);
}

GetUserDetail(UserDetail)
/*First Name : Anurag 
Address : Balugaon, Khorda */

GetUserDetail({
    UserName : {
        FirstName : "Satyam",
        LastName : "Sundaryai"
    },
    UserAddress : "Bangalur, India",
    Id : "232080923098"
})
/*First Name : Satyam 
Address : Bangalur, India */
/* -------------------------------------------- */
// Passing array in the function
const arr = [23,4,4,56]

function returnArr(arr){
    return arr[1]
}
console.log(returnArr(arr));// 4
console.log(returnArr([293,32,312,2425,6]));// 32