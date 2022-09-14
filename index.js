
let a =    document.getElementById("userInput");

const myFunc = (num)=>{
a.value = a.value + num;


}
const myClear = ()=>{
    document.getElementById("userInput").value = "0";
}
const myDel = ()=>{
    a.value = a.value.slice(0,-1);
}
const evaluateFunc=()=>{
  try {
    a.value =eval(a.value);
  } catch (error) {
    a.value = "chodrii insan ban";
  }  
  


}
