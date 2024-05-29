const input = document.getElementById("input");
//const result = document.getElementById("result")

function calculate() {

  try {
   input.value = eval(input.value) == undefined?"enter a valid input" : eval(input.value) ;
   
  } catch (error) {
    input.value ="enter a valid input";
    setTimeout(() => {
        input.value =" ";
    }, 2000);
  }
}

window.addEventListener("keydown", (e) => {
  if (e.key === "=" || e.key === "Enter") {
    calculate()
  }
});

