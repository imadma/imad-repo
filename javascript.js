const btn = document.getElementById("btn");
const colortext = document.querySelector(".color");
const mainbg = document.getElementById("mainbg");
// end varriable declareation




let colors = ["red","pink","orange","yellow","purple","green","blue","brown"]


function change(){
//get random number frm 0-7 colors[0]=red 
const randomNumber =  Math.floor(Math.random() * 8);
mainbg.style.backgroundColor = colors[randomNumber];
colortext.innerHTML = colors[randomNumber]
}



btn.addEventListener("click",change);