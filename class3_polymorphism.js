class Animal{
  constructor(name){
    this.name=name;
  }
  speak(){
    console.log(this.name+ ' is generic sound');
  }
}
class Dog extends Animal{
  constructor(name,sound){
    super(name);
    super.speak()
    this.sound=sound

  }
  speak(){
     
      super.speak()
     console.log(`${this.sound} is ${this.name} generic sound`);
  }
}
let a1=new Animal('every animal');
let a2=new Dog('dogs','bark');
a1.speak()
a2.speak()
