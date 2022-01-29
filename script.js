var base_btn=document.querySelector(".base_btn");
var output=document.querySelector("#SnackBar");
var btn=document.querySelector(".btn")
var btn1=document.querySelector("#btn_cross")
var leadbtn=document.querySelector("#lead_btn")
var leadoutput=document.querySelector("#leadbtn")
var btn2=document.querySelector(".btn2")

function myfunction(){
    output.className="show"
}
base_btn.addEventListener("click",myfunction)
    
btn.addEventListener("click",()=>{
    output.style.visibility="hidden"
})
btn1.addEventListener("click",()=>{
    output.style.visibility="hidden"
})

leadbtn.addEventListener("click",()=>{
    leadoutput.className="show"
})
btn2.addEventListener("click",()=>{
    output.style.visibility="hidden"
})
btn1.addEventListener("click",()=>{
    output.style.visibility="hidden"
})
