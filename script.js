
 const randomcolor=["#c4b1ae","#b4ada3","#bfb59e","#cab7a2","#858786"]

const button =document.getElementById('btn');
const reults=document.getElementById("result");

button.addEventListener("click",()=>{
    const color= randomcolor[Math.floor(Math.random()*randomcolor.length)];
    document.body.style.backgroundColor=color;
    reults.textContent=color;
})