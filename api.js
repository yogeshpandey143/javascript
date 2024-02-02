const URL="https://cat-fact.herokuapp.com/facts";
let factPara= document.querySelector(".fact");
let btn= document.querySelector(".btn");
//let proise = fetch(url,[option])


const getFact= async ()=>{
    console.log("getting data---")
    let promise=await fetch(URL);
    console.log(promise.status);
    console.log(promise);

    // JSON format-> use json()
    let data= await promise.json();
    console.log(data[0].text);
    factPara.innerText=data[2].text;

}

btn.addEventListener("click",getFact);

//AJAX is Asynchronous JS And  XML

//JSON is javascript Object Notation 

