console.log(document.body);
console.dir(document.body);


// accessing element 

// select by id

let heading = document.getElementById("header");
console.log(heading);

// select by class
let headclass = document.getElementsByClassName("head");
console.log(headclass);
console.dir(headclass);
// select by tagname
let paras = document.getElementsByTagName("p");
console.log(paras);


// select by querySelecter 

let firstEle = document.querySelector("p"); // 1st element 
console.dir(firstEle);

let allEle = document.querySelectorAll("p"); // 1st element 
console.dir(allEle);

let firstClass = document.querySelector(".head"); // 1st element 
console.dir(firstClass);

let allClass = document.querySelectorAll(".head"); // 1st element 
console.dir(allClass);


// DOM manipulation
/*
tagName -> return tag for element nodes
innerText ->returns the text content of the elemrnt and all its children
innerHTML -> return the plain text or Html content in the element
textContent -> return textual content even for hidden element 
*/

let div = document.querySelector("div");
console.dir(div);

let head = document.querySelector("h1");
console.log(head);

let h2 = document.querySelector("h2");
console.log(h2.innerText);

h2.innerText= h2.innerText + " from Yogesh Pandey";// concatination

console.log(h2.innerText);

let divs = document.querySelectorAll(".box");

divs[0].innerText= "yogesh pandey";
divs[1].innerText= "Dheeraj";
divs[2].innerText= "Kishan";