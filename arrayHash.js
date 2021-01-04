var res={}
var arr=[1,1,1,2,3,4,5,1,1,1,5]
let max=Math.max(...arr)
let min=Math.min(...arr)
console.log(min,max)
for(let i=0;i<arr.length;i++){
  if(!res[arr[i]])
  res[arr[i]]=0
  res[arr[i]]++;
}
for(let i=min;i<=max;i++){
  if(arr[i]>0){
    console.log(`number is ${i}  occurence time is ${arr[i]}`)
  }

}
