class Person{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  describe(){
    console.log(`name is ${this.name} age is ${this.age}`)
  }

}
class Programmer extends Person{
  constructor(name,age,years){
    super(name,age);
    this.years=years;
    
  }
  printing(){
    console.log(`name is ${this.name} age is ${this.age} yop ${this.years}  ` )
  }
 
     
  
}
let p=new Person('usman',1)
let p2=new Programmer('belal',10,21)
console.log(p)
console.log(p2)   
p2.printing()  //name is belal age is 10 yop 21
