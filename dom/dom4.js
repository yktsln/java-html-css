

document.querySelector(".box1").addEventListener("click", function (e) {
    console.log("Football clicked");
    
    const target = e.target;
    console.log(target);

    if (target.matches("span")) {
        target.style.backgroundColor = "black";
    }
});


document.querySelector(".box2").addEventListener("click", function (e) {
    console.log("Basketball clicked");
    
    const target = e.target;

    if (target.matches("span")) {
        target.style.backgroundColor = "black";
    }
});
document.querySelector(".box3").addEventListener("click", function (e) {
    console.log("Boxing clicked");
    
    const target = e.target;

    if (target.matches("span")) {
        target.style.backgroundColor = "black";
    }
});
document.querySelector(".box4").addEventListener("click", function (e) {
    console.log("Tennis clicked");
    
    const target = e.target;

    if (target.matches("span")) {
        target.style.backgroundColor = "black";
    }
});

document.querySelector(".box5").addEventListener("click", function (e) {
    console.log("golf clicked");
    
    const target = e.target;

    if (target.matches("span")) {
        target.style.backgroundColor = "black";
    }
});


const sports = document.querySelector(".container");
const newSport = document.createElement("div");
const newSportSpan = document.createElement("span");

newSportSpan.innerText = "Rugby"; // Set the text content for the span

newSport.appendChild(newSportSpan);

newSport.setAttribute("class", "box5");


sports.appendChild(newSport);
