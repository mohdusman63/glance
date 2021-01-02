let name1={
     firstname:"usman",
	 lastname:"ali",
	      }
let fullname=function (hometown,pin){
	 console.log(this.firstname,this.lastname,hometown,pin)
	 }

let name2={
     firstname:"mohd",
	 lastname:"ahmed",
        }
let name3={
     firstname:"belal",
	 lastname:"ali",
	 }
	 
  fullname.call(name2,'lko',123)
  
  fullname.apply(name3,['vns',11])
  fullname.call(name3)
let bindd=fullname.bind(name3,'lko',123)      
console.log(bindd) 
bindd();
	 
	 //call,apply, method is directly invoked 
	 //bind return a function 
