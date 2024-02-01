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


function asyncFunc(){

    return new Promise((resolve,reject)=>
    setTimeout(()=>
    {
       console.log("some data 1");
       resolve("success!")
    },4000)
    )
}




function asyncFunc2(){

    return new Promise((resolve,reject)=>
    setTimeout(()=>
    {
       console.log("some data 2");
       resolve("success!")
    },4000)
    )
}

/* data 1 and data 2 fetched simultanuosly after 4 sec */
// console.log("fetching data 1")
// let p1 = asyncFunc();
// p1.then((res)=>{
//     console.log(res);
// })


// console.log("fetching data 2")
// let p2 = asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// })



/* data 1 and data 2 fetched one after one,  after 4 sec */
// by using promise chain


console.log("fetching data 1")
let p1 = asyncFunc();
p1.then((res)=>{
    console.log(res);
// promise chaning -> one promise after another
console.log("fetching data 2")
let p2 = asyncFunc2();
p2.then((res)=>{
    console.log(res);
})

});


// Async-Await


async function hello(){
    console.log("hello");
}


// await -> it pauses the execution of its surrounding async function until the promise is settled




function api(){

   
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("weather data");
        resolve(200);
    },2000)
   
   }) 
}


// await api(); we cannot call awiat function in this manner

async function getWeatherData(){
    await api();
    await api();
}

