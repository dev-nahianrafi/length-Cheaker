let textare = document.querySelector(".inte")
let btn = document.querySelector(".btn")
let result = document.querySelector(".result")

btn.addEventListener("click", function(){
    result.innerHTML = "Your Length is : "+ textare.value.length;
})