let filter=document.querySelector(".bi-filter")
let mostSearched=document.querySelector(".most-searched")
let hideFilter=document.querySelectorAll(".hide-filter")
filter.onclick=function(){
    console.log(hideFilter);
    hideFilter.forEach((e)=>{
        if(e.classList.contains("d-none")){
            e.classList.remove("d-none")
            mostSearched.classList.add("pt-5")
        }
        else {
            e.classList.add("d-none")
            mostSearched.classList.remove("pt-5")
        }
    })
}


 let buy=document.querySelector(".buy")
 let rent=document.querySelector(".rent")
buy.onclick=function(){
    rent.classList.remove("active")
    buy.classList.add("active")
}
rent.onclick=function(){
    buy.classList.remove("active")
    rent.classList.add("active")
}



let open=document.querySelector(".open")




