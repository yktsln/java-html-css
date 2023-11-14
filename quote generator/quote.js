let btn = document.querySelector("#button");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

console.log(btn);
console.log(quote);
console.log(person);


const quotes = [{
    quote:"Be yourself; everyone else is already taken.",
    person:"Oscar Wilde"
},
{
    quote:"Do not go where the path may lead, go instead where there is no path and leave a trail.",
    person:"Ralph Waldo Emerson"
},
{
    quote:"It is during our darkest moments that we must focus to see the light.",
    person:"Aristotle"
},
{
    quote:"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart",
    person:"Helen Keller"
},
{
    quote:"Well done is better than well said",
    person:"Benjamin Franklin"
},
{
    quote:"Do one thing every day that scares you",
    person:"Eleanor Roosevelt"
},
{
    quote:"The only thing we have to fear is fear itself",
    person:"Franklin D. Roosevelt"
}

];


btn.addEventListener("click",function(){

let random = Math.floor(Math.random() * quotes.length);


quote.innerText = quotes[random].quote;
person.innerText = quotes[random].person;


});