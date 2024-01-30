/*
 Mouse click
    keyboard event 
    form event
    preint event and many more
*/


// event handling
/*
event handliung in js--->

node.event=()=>{
    //handle here
}
*/
let btn1 = document.querySelector("#btn1");

btn1.ondblclick=()=>{
   console.log("btn clicked 2 times") ;
}

let div= document.querySelector(".boxer");
div.onmouseover=()=>{
    console.log("mouse is on div");
}


// event object 

/*
node.eent=(e)=>{
  //handle here
}

e.target,e.type,e.clientX,e.clickY
*/

btn1.onclick=(evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
}


//event Listner
/*
node.addEventListner(event,callback)
node.removeEventListner(event,callback)
*/

let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click",(evt)=>{
    console.log("btn2 was clicked ");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
})
btn2.addEventListener("click",()=>{
    console.log("btn2 was clicked handler 2");
    
})

btn2.addEventListener("click",()=>{
    console.log("btn2 was clicked handler 3");
    
})



const handler3 =()=>{
    console.log("btn2 was clicked handler 4");
    
}


btn2.addEventListener("click",handler3);

// remove the event 
btn2.removeEventListener("click",handler3)


/*
Ques-> create a toggl button that changes th screen to
dark mode when clicked &light mode when clicked again

*/

let modeBtn = document.querySelector("#mode");
let currMode="light";

modeBtn.addEventListener("click",()=>{
    
    if(currMode==="light")
    {
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else
    { currMode="light";
    document.querySelector("body").style.backgroundColor="white";
}
    console.log(currMode);
})