let arr=['usman','belal','usman','ali','ali']
let res={}
for(let i=0;i<arr.length;i++)
{
 if(!res[arr[i]])
   res[arr[i]]=0
   res[arr[i]]++;
 
}
for(let i=0;i<arr.length;i++){
       if(res[arr[i]]>0)
  console.log(arr[i],res[arr[i]])
   res[arr[i]]=0
}
