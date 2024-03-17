// Here '...' is called rest operator
function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200,22,56))// [ 200, 22, 56 ]

/* ---------------------------------------------------------------- */

const UserDetail = {
    UserName : {
        FirstName : "Anurag",
        LastName : "Tarai"
    },
    UserAddress : "Balugaon, Khorda",
    Id : "232080923098"
}
function GetUserDetail(obj){
    console.log(`First Name : ${obj.UserName.FirstName} \nAddress : ${obj.UserAddress}`);
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