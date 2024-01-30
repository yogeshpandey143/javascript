/* OBJECTS**/

const student ={
    fullName: "Yogesh pandey",
    marks: 70.5,
    printMarks: function(){
        console.log("marks = ",this.marks);
    },

}

// function into obeject 
const employee ={
    calTax(){
        console.log("tax rate is 10%");
    }
}




const karan ={
    salaty: 100000,
}
// use one object functio into another
//prototype
karan.__proto__= employee;
console.log(karan.calTax());





const arjun ={
    salary :4344344,
     calTax(){
        console.log("tax rate is 50%");
    }

}
arjun.__proto__= employee;
// here 50% tax will print becaue its take the function that defined in itself
console.log(arjun.calTax());


/* CLASS**/

// class
class MyClass{
  // constructor
    MyClass()
    {
console.log("creating constructor");
    }
}


class ToyotaCar{
   
   // function
    start(){
   console.log("Start");
    }


    //  function stop
    stop(){
      console.log("stop");
    }
}

// obeject of classs
let fortuner = new ToyotaCar();
let supra = new ToyotaCar();

console.log(fortuner.start());




// inharitance in js

class Parent{
    hello(){
        console.log("hello");
    }
}

class Child extends Parent{
  
}


class Person{

    constructor(){
        this.species="homo ssks";
        console.log("Emter parent constructor");
    }

    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}
 

class Enginner extends Person{
// super keyword -> used to call parent constructorr in child class
    constructor(branch)
    {
       
        console.log("enter child constructor");
    
        super();
        this.branch= branch;

         console.log("after child constructor");

    }
    work(){

        // accessing parent function in child function
         super.eat();
        console.log("work");
    }

}

let eng1 = new Enginner("chemical");




// super keyword -> used to call parent constructorr in child class


/*
ques->  you are creating a website for your college. create a class Uxser  with 2 property , name & email. it also has a method called viewData() that allow user o view website data
*/ 

  class User{
    constructor(name,email)
    {
        this.name=name;
        this.email= email;
    }

    viewData(){
      console.log("name of person = ",this.name);   
      console.log("email of person = ",this.email);   
      
    }
  }

  let user = new User("yogesh","yogi@gmail.com");
  user.viewData();



  /*
ques->   Cteate a new class called Admin which inherits from User . Add a new method called editData to Adminthat allows it to edit wesite data
*/ 

class Admin extends User{

  constructor(name,email){
  super(name,email);    
}

    editData(myname,myemail)
    {
        this.name= myname;
        this.email= myemail;
    }

}

let admin =new Admin();
admin.editData("yogi","hfbewbfjwbf");


// error handling


let a=5;
let b = 10;
console.log("a = ",a );
console.log("b = ",b );

console.log("a+b = ",a+b );

try{
console.log("a+b = ",a+c );// this line give error because c is not declared
}
catch(err){
console.log(err);
}
console.log("a+b = ",a+b );
console.log("a+b = ",a+b );
