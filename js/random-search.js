let loadMoreBTN=document.querySelector(".load-more")
let loadMoreDiv=document.querySelector(".load-more-div")
let loadLessBTN=document.querySelector(".load-less")

loadMoreBTN.onclick=function(){
        loadMoreDiv.classList.remove("d-none")
        loadMoreBTN.classList.add("d-none")
}
loadLessBTN.onclick=function(){
        loadMoreDiv.classList.add("d-none")
        loadMoreBTN.classList.remove("d-none")
}