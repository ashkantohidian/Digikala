let story=document.querySelectorAll("div.wrapper>div.story")
let cover=document.querySelector("div.wrapper>div.cover")
let icon=document.querySelector("div.cover>div.box>div.icon")

story.forEach(elem=>{
    elem.addEventListener("click",function(){
        cover.classList.add("display")
    })
})

icon.addEventListener("click",function(){
    cover.classList.remove("display")
})
