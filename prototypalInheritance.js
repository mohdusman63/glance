function Person(firstname,lastname){
   this.firstname=firstname;
   this.lastname=lastname;
   }
Person.prototype.greeting=function(){
return `hellow there ${this.firstname} ${this.lastname} `;}
let p=new Person('usman','azmi')
//console.log(p)

function Customer(firstname,lastname,phone,membership){
   Person.call(this,firstname,lastname)
   this.phone=phone
   this.membership=membership
    }
	//inherit the person
	Customer.prototype=Object.create(Person.prototype)
	let p1=new Customer('bella','ali',1234,'sr')
	console.log(p1)
	console.log(p1.greeting())

