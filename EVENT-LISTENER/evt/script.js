let h1=document.querySelector("h1");
  

window.addEventListener("keydown",function(dits){
    if(dits.key ===" "){
        h1.textContent="spc"
    }
    else{
         h1.textContent=dits.key;
   
    }
});