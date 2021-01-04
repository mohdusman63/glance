
let Person={
 firstname:'usman',
 lasname:'ali',
 fullName:function(){
   console.log(`first name is ${this.firstname} lastname is ${this.lasname}`)
      }
    }
 let Men={
    firstname:'belal',
    lasname:'mohd',
 }
 let b=Person.fullName.bind(Men)
 b() 
Person.fullName.call(Men)//same output both
