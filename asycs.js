function hello(){
    console.log("hello");
}


setTimeout(hello,2000)  //timeout 1000-> 1sec


setTimeout(()=>{console.log("Myname is tonhf")},3000)


// callback

function sum(a,b)
{
  console.log(a+b);

}

function calculator(a,b, sumCallback)
{
    sumCallback(a,b);
}

calculator(5,3,(a,b)=>{
    console.log(a+b);
});
calculator(1,3,sum);


//callback hell is a problem with callback


function getData(dataId,getNextData){


setTimeout(()=>{
    console.log("data",dataId);
    getNextData();
},2000);

}



//calback hell

getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{});
    });
})


// to solve callback problem we use promises

// promises 


let promise = new Promise((resolve,reject)=>{
   console.log("i am a promise"); 
//    resolve(132);

reject("some error");
})
  // promise has three states 

/*  
pending state  --> the result is undefined  


fulfill state  --> the esult is a value (fulfilled)


rejected state --> the resultis an error object

*/



function getMydata(dataId,getNextData)
{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        console.log("data",dataId);
        resolve("success");
         if(getNextData){getNextData(); }
          
      }, 5000);  
    })

}

getMydata(2,()=>{});


// if promice fulfilled , we use .then() to prnt message
// if promice rejected  , we use .catch() to print the error or message


const getPromise =()=>{
  return new Promise((resolve,reject)=>{
         console.log("iam a promise ");
         resolve("successful"); // fulfilled  or resolved
    })
}

let mypromise = getPromise();

// if fulfilled the promise, .then() method is used to give the message 
mypromise.then((res)=>{
    console.log("successful message",res)
});

// if rejected the promise, .catch() method is used to give the message 
mypromise.catch((err)=>{
    console.log("some error messsage",err) 
})

