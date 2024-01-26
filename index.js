// variable creation


let marks_of_student1 =96;
let marks_of_student2=82;

// object creation 

let marks ={
 stdent1:97,
 student2:85
}

// array creation

let heroes=["ironman","hulk"];

let marks_of_stu =[65,43,23,23];
console.log(marks_of_stu);

// we can create array of different datatype in javascript

let info= ["ram",96,"boston"];
console.log(info);

let str="yogesh pandey";
console.log(info[0]);







//looping 

 for(let i =0; i<=info.length;i++ )
 {
    console.log(info[i]);
 }


 // for-of loop

 for(let ele of marks_of_stu){
    console.log(ele);
 }



 let cities =["varanasi","chandauli","ramnagar"];


 for(let city of cities)
 {
    console.log(city.toUpperCase())
 }



 // average ofmarks os sudent 

let studentmarks  =[85,97,44,37,76,60];

let sum=0;

for(let mos of studentmarks)
{
    sum+=mos;

}

let average = sum/studentmarks.length;
console.log(`average of marks os student = ${average}`);


// discount problem


let price = [250,645,300,900,50];


for(let ele of price)
{
   let amount_discount = ele/10;
   let new_ammount = ele-amount_discount;
   ele = new_ammount;

   console.log(ele);
}


/* predefined methods in array
push()  to add in array
pop() to delete from array

toString() to change the array into string
concat() to join multiple array and return result

unshift() add to start
shift()   delete from start & return 
*/

let food_item=["potato","tomato","burger","chicken roll"]
food_item.push("momo");

for(let food of food_item)
{
   console.log(food);
}

let deleted_item = food_item.pop();
console.log(deleted_item);




let marvel =["thor","spiderman","ironman"]

let dc = ["batman","flash","superman"]

let superhero= marvel.concat(dc);

console.log(superhero);


// slice(start_index,end_index ) cut into pieces


console.log(marvel.slice(0,2));

// splice(startIdx,delCount,newEl1)

console.log(marvel.splice(2,2,"antman"));
console.log(marvel.toString());


//******************************************************** */

// Funtion

function myfun(){
   console.log("my function store string");
}

myfun();


// arrow function 


function summation(a,b){
   return a+b;
}//sum function


//now using arrow function

const arrowsum=(a,b)=>{
   console.log(a+b);
}


let arrowmul=(a,b)=>{
   return a*b;
}


const  printHello=()=>{
   console.log("hello");
}
let alpha ="sdfougia"

function no_of_vowels(alpha)
{
   let count=0;
   for(let ele of alpha)
   {
      if(ele=='a'|ele=='e'|ele=='i'|ele=='o'|ele=='u')
      {
count++;
      }
   }
   console.log(count);
}

no_of_vowels(alpha); 


const counte=(alpha)=>{
   let count=0;
   for(let ele of alpha)
   {
      if(ele=='a'|ele=='e'|ele=='i'|ele=='o'|ele=='u')
      { 
count++;
      }
   }
   console.log(count);
}

counte(alpha);



// for each loop in array
let myarr=[2,4,5,7,2,1,5];



myarr.forEach(function printval(val){

   console.log(val);
});

// using arrow funcion

// for eachloop is used when wee want to perforaym aspecific task on every element of ara
let mya=["hulk","yogi","name","superman"];
mya.forEach((val)=>{
console.log(val.toUpperCase());
});



//Ques-> print the sqauare of each value using the forEach loop

myarr.forEach(function square(val){
   console.log(val*val);
});


// another method

let calSquare = (num)=>{
   console.log(num*num);

};

myarr.forEach(calSquare);



/* methods in array
map method

filter method

reduce method
*/


//map
let newarr =[4,6,2,7,3];
let mynewarr=newarr.map((val)=>{
   return val*3;
})

console.log(mynewarr);
// output -> [12,18,6,21,9]

//filter
let fltarr =[4,6,3,2,9];

  let filterarray =fltarr.filter((val)=>{
return val%2===0;
  });


  console.log(filterarray);

  // output -> [4,6,2]

  //reduce




  // ques-> we are given array of marks of student .filter out of the marksof student that scored 90+


  let arrayOfMarks=[80,70,90,95,93];


  let filtermarks = arrayOfMarks.filter((val)=>
  {
   return val>90;
  })

  console.log(filtermarks);

