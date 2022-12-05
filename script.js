const but = document.querySelector("#btn")
but.addEventListener("click",()=>{
    const clr=document.querySelectorAll(".a")
    for(let i=0;clr.length;i++){
        clr[i].style.color="red"
    }
})