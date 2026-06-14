
   
    let number= document.querySelector("h1");
    let count= document.getElementById("count");
    let decrease= document.getElementById("dec");
    let reset= document.getElementById("reset");
    let cont=0;
    count.addEventListener("click",()=>{
        cont++;
        number.innerText=cont;
    });

    decrease.addEventListener("click",()=>{
        cont--;
        number.innerText=cont;
    });
    reset.addEventListener("click",()=>{
        cont=0;
        number.innerText=cont;
    });
    
  