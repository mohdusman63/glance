
//https://www.hackerrank.com/challenges/migratory-birds/problem
// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    let min= Math.min(...arr)    // 1
let max=Math.max(...arr)
let result=[]
for(let i=0;i<arr.length;i++){
    if(!result[arr[i]])
    result[arr[i]] = 0
    result[arr[i]]++
}
let findmax=0,index=0;
for (let i = min; i <=max; i++)
{
    if(result[i]>0)

    {
        if(result[i]>findmax)
        {
        findmax=result[i]
        index=i
        }
    }
}

return index;

}
