let arrows2=document.querySelector(".arrows")
let gallery2=document.querySelectorAll(".gallery-2 img")
let image =document.createElement("img")
gallery2.forEach((img)=> {
    img.addEventListener("click",(e)=>{
        let overlay=document.createElement("div")
        overlay.classList.add("over")
        document.body.appendChild(overlay) 
        let imageContainer =document.createElement("div")
        imageContainer.classList.add("myDiv")
        imageContainer.appendChild(image) 
        image.src=img.src
        let span =document.createElement("span")
        let close =document.createTextNode("x")
        span.classList.add("close")
        span.appendChild(close)
        imageContainer.appendChild(span)
        document.body.appendChild(imageContainer) 
        img.classList.add("active")
        arrows2.style.display="block"
    })
});
document.addEventListener("click",function(e){
    if(e.target.classList.contains("close")){
        arrows2.style.display="none"
        document.querySelector(".over").remove()
        document.querySelector(".myDiv").remove()
        gallery2.forEach((img)=> {
            img.classList.remove("active")
        })
    }
})

let next2=document.getElementById("next")
let prev2=document.getElementById("prev")
next2.onclick=function(){
    gallery2.forEach((img)=>{
        if(img.classList.contains("active")){
            myImg=img.getAttribute("index")
            img.classList.remove("active")
        }
    })
    myImg++
    if(myImg==3){
        myImg=0
    }
    console.log(myImg);
    image.src=gallery2[myImg].src
}

prev2.onclick=function(){
    gallery2.forEach((img)=>{
        if(img.classList.contains("active")){
            myImg=img.getAttribute("index")
            img.classList.remove("active")
        }
    })
    myImg--
    if(myImg==-1){
        myImg=gallery2.length-1
    }
    console.log(myImg);
    image.src=gallery2[myImg].src
}