// DOM 

// GetElementById("")

// //?easiest way to find the element

// //!   document.getElementById('main-headng');

// let items = document.getElementsByClassName("list-items");
// console.log(items);


// let tagItems = document.getElementsByTagName("li");
// console.log(tagItems);


// const container = document.querySelector("div");//(div adli ilk ogeyi yakalar)
// console.log(container);


// const container2 = document.querySelectorAll("div");(div adli tum ogleri yakalar)
// console.log(container2);


//!-----------------------STYLING--------------------------------------------

// const listItems = document.querySelectorAll(".list-items");
// console.log(listItems);



// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = "2rem";

// }

//!--------------------CREATE--------------------------------------------

// ?   ---adding
// const ul = document.querySelector("ul");

// const li = document.createElement("li");

// ul.append(li)



// const li= document.querySelectorAll("li")[1];

// li.innerText = "X-Men";

// li.setAttribute("id","main-heading");
// li.removeAttribute("id");

// const title = document.querySelector("main-heading");


const ul = document.querySelector("ul");
const li = document.createElement("li");
const div = document.querySelector("div");

li.innerText = "X-Men";
li.classList.add("list-items");
ul.appendChild(li);







const hrElements = document.querySelectorAll("hr");


for (let i = 0; i < hrElements.length; i++) {
    hrElements[i].style.borderColor = "black"; // Change the color
    hrElements[i].fontSize = "bolder"
}


//!-----------------Traverse DOM-------

// console.log(ul);

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentNode);

// const html = document.documentElement;

// console.log(html.parentNode);
// console.log(html.parentElement);


// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = "blue";

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// console.log(div.childNodes);
// console.log(ul.previousSibling);
// console.log(ul.nextSibling);


// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

//!--------Event Listeners------------------------


