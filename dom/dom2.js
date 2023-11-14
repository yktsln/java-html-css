//*Click event



const button2 = document.querySelectorAll("Button")[1];
console.log(button2);


function alertBtn(){
    alert(" I love you")
}

button2.addEventListener("click",alertBtn);


//*mouseover

const newBackgroundColor = document.querySelectorAll("button")[2];

function changeBgColor(){

    newBackgroundColor.style.backgroundColor = "blue"
}

function normalBgColor(){
    
 newBackgroundColor.style.backgroundColor ="inherit"
    
}

newBackgroundColor.addEventListener("mouseover",changeBgColor);
newBackgroundColor.addEventListener("mouseleave",normalBgColor);





// // .container sınıfını seç
// let container = document.querySelector(".container");
// console.log(container);

// // Yeni bir <div> öğesi oluşturun
// let newBox = document.createElement("div");
// newBox.className = "box4"; // Oluşturulan div'e istediğiniz sınıfı ekleyebilirsiniz

// // Yeni <div> öğesini .container içine ekleyin
// container.appendChild(newBox);



const button4 = document.querySelectorAll("button")[3];
const hddenText = document.querySelector("#hidden");

function revealContent(){
const button4 = document.querySelectorAll("button")[3];
    if (hddenText.classList.contains("button4")) {
        hddenText.classList.remove("button4")
    } else {
        hddenText.classList.add("button4")
    }
};

button4.addEventListener("click",revealContent);




