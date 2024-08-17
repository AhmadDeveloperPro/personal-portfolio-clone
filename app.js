let icon = document.querySelector(".icons i")
let list = document.querySelector("ul");
icon.addEventListener("click", function(){
    list.classList.toggle("active")
    icon.classList.toggle("fa-xmark")
});