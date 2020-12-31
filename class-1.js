class Rectangle{
  constructor(height,width){
    this.height=height;
    this.width=width;

  }
  get calcArea(){
    return this.calculate();
  }
  calculate(){
    return this.height*this.width;
  }
}
const square = new Rectangle(10, 10);
const poly=new Rectangle(1,2);

console.log(square.calcArea); // 100
console.log(poly.calcArea); //2

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes


class Area{
  constructor(length,width){
    this.length=length;
    this.width=width;
  }
   rectangle(){
    return this.length*this.width;

  }
 
}
let n=new Area(3,2);
  console.log(n.rectangle());
