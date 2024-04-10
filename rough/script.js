setTimeout(()=>{
    console.log("first");
},2000)
setTimeout(()=>{
    console.log("second");
}, 5000) 
setInterval(()=>{
    const time = new Date()
    console.log(`time : ${time.toLocaleTimeString()}`);
},1000)
