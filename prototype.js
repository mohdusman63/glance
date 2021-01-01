var mobile=function (model_no){
  this.model_no=model_no

}

var samsung=new mobile('samsung')
var vivo=new mobile('vivo')
mobile.prototype.color="red"


console.log(samsung.color)
console.log(samsung)
console.log(vivo)
