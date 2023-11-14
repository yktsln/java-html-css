

let openBtn = document.querySelector("button");
let closeBtn = document.querySelector(".close-btn");
let model = document.querySelector(".modal1");

openBtn.addEventListener("click", function () {
    model.style.display = "block";
});

closeBtn.addEventListener("click", function () {
    model.style.display = "none";
});


window.addEventListener("click",function(e){
   
    if(e.target === model){
        model.style.display = "none";
    }
})



 