
//https://www.hackerrank.com/challenges/sock-merchant/problem
// Complete the sockMerchant function below.v

function sockMerchant(n, ar) {
    let min= Math.min(...ar)    
    let max=Math.max(...ar)
    let result={}
    for (let i = 0; i < n; i++) {
     if(!result[ar[i]])
        result[ar[i]] = 0;
         result[ar[i]]++;
       }
    let count=0
    for (let i = min; i <=max; i++)
     {
      if(result[i]>1)
       {
      count=count+Math.floor(result[i]/2);
       }

     }
  return count
}
