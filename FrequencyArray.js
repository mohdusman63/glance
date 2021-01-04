var arr=[1,1,2,2,2,3,4,4,4,4,4,1,1,1]
let max=Math.max(...arr)
let min=Math.min(...arr)
var res={}
for(let i=0;i<arr.length;i++){
  if(!res[arr[i]])
  res[arr[i]]=0
  res[arr[i]]++
}
for(let i=min;i<=max;i++){
  if(res[i]>0){
    console.log(i,res[i])
  }
}
