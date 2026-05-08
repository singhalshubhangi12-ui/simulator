let light=document.getElementsByClassName("light");
let result=document.querySelector(".result");
let active=document.getElementById("active");
let b1=document.querySelector("#b1")
let b2=document.querySelector("#b2")
let state="red";
let interval = null;
b1.addEventListener('click',function(e){
    if (interval!==null) return;
    interval=setInterval(() => {
        
        document.getElementById("red").classList.remove("active");
        document.getElementById("yellow").classList.remove("active");
        document.getElementById("green").classList.remove("active"); 
        result.classList.remove("active");
   if (state === "red") {
        document.getElementById("red").classList.add("active");
        result.classList.add("active");
        result.innerText = "RED";
        state = "yellow";

    } else if (state === "yellow") {
        document.getElementById("yellow").classList.add("active");
        result.classList.add("active");
        result.innerText = "YELLOW";
        state = "green";

    } else {
        document.getElementById("green").classList.add("active");
        result.classList.add("active");
        result.innerText = "GREEN";
        state = "red";
    }



},2000)
})

 
b2.addEventListener('click',function(e){
   clearInterval(interval);
   interval = null
    
   
})


    



