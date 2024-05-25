
let check = true

// Generating and changing Random Color code
function generateColor(){
   // const color = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    const color = '0123456789ABCDEF'
    let c = '#'

    for(let i=0;i<6;i++){
          c = c+color.charAt(Math.floor(Math.random()*16))
    }
    return c
}

// Changing bg color
function changingColor(){
    document.querySelector("body").style.backgroundColor = generateColor()
}

// code for starting the interval
document.getElementById("start").addEventListener("click", ()=>{
   if(check){
    check = false;
    const interval =  setInterval(()=>{
        changingColor ()
    },1000)
        document.getElementById("stop").addEventListener("click",()=>{
            clearInterval(interval);
            check = true
        })
   }
})