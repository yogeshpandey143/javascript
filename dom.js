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


// attribute 

// get Attribute

let div1= document.querySelectorAll(".box");
console.log(div1);

let name= div1[0].getAttribute("name");
console.log(name);

//set attribute

let heading2 = document.querySelector(".hello");
let newHello=heading2.setAttribute("name","newHello");
console.log(newHello);


// Style

//node.style

div1[0].style.backgroundColor="green";
div1[0].style.fontSize="20px";


/*
insert element -->>

create element 
node.append(ele) add in the end of node(inside)
node.prepend(ele) add at the start of node (inside)
node.before(ele) add before the node (outside)
node.after(ele)// add after the node(outside)


*/


let newBtn = document.createElement("button");
 
newBtn.innerText="click me";
newBtn.style.backgroundColor="red";

let  innerDiv= document.querySelector(".inner");

// innerDiv.append(newBtn);
// innerDiv.prepend(newBtn);
// innerDiv.before(newBtn);
// innerDiv.after(newBtn);


/**
 delete element 
 
 node.remove(element);  delete node not element

 */

 innerDiv.remove();


 /*
ques->> create a new button element .give it a twxt "click me", background color of red and text color of white 
insert the button as the fisrt elemnet inside the body tag
 */

let newbutton =document.createElement("button");
newbutton.innerText="click me!";
newbutton.style.backgroundColor="red";
newbutton.style.color="white";
document.querySelector("body").prepend(newbutton);
 /*
ques->> create a paragraph in HTML,give it a class & some style .
Now cteate a class in css and try to append this class to the <p> element 

 */

let para = document.querySelector(".para");

para.setAttribute("class","newpara");