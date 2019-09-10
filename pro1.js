//Print the first p tag to the console using the ID, class, and tag selectors.
let pid = document.getElementById('first');
console.log(pid.innerText);

let pclass = document.getElementsByClassName("special");
console.log(pclass[0].innerHTML);

let ptag = document.getElementsByTagName("p");
console.log(ptag[0].innerText);
//Print the special class using both the query selector and query all selector.
let pqu = document.querySelectorAll("p.special");
let pqu1 = document.querySelector("p.special");
for (let x = 0; x < pqu.length; x++){
console.log(pqu[x].innerHTML);}
console.log(pqu1.innerHTML);

//Change the color of the h1 statement to blue.
let htag = document.getElementsByTagName("h1");
htag[0].style.color = "blue";

//Change the color of the last p tag to yellow.
ptag[ptag.length - 1].style.color = "yellow";