var h={}
var str="xxxxxwwwwwweeeeee"
for(i=0;i<str.length;i++){
  
  if(!h[str.charCodeAt(i)-97])
  h[str.charCodeAt(i)-97]=0
  h[str.charCodeAt(i)-97]++
}
for(i=0;i<str.length;i++){
      if(h[str.charCodeAt(i)-97]>0){
   console.log(`string is  ${String.fromCharCode(str.charCodeAt(i))}  ${h[str.charCodeAt(i)-97]} `);
    h[str.charCodeAt(i)-97]=0
    }
  
}
