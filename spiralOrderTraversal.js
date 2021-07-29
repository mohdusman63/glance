//Spiral Order Traversal In Matrix 
function spiralOrderTraversal(arr,m,n){
  let l=0,k=0
  while(l<n &&k<m  ){
  for(let i=l;i<n;i++){
    console.log(arr[l][i])
   }
   k++
   for(let i=k;i<m;i++){
     console.log(arr[i][n-1])
   }
   n--
   for(let i=n-1;i>=l;i--){
     console.log(arr[m-1][i])
   }
   m--;
   for(let i=m-1;i>=k;i--){
     console.log(arr[i][l])

   }
   l++

  }
}


let arr = [ [1, 2, 3, 4, 5, 6],
            [7, 8, 9, 10, 11, 12],
            [13, 14, 15, 16, 17, 18]
            ,[19, 20, 21, 22, 23, 24]
          ];
let r = arr.length;
let c = arr[0].length;
//console.log(r,c)
spiralOrderTraversal(arr,r,c)

------------------------------------------------------------------------------------------------------------------------

Snake Order Traversal In Matrix


function snakeOrderTraversal(arr,m,n){

 for(let i=0;i<m;i++){
   if(i%2===0){
     for(let j=0;j<n;j++)
   console.log(arr[i][j])

   }
   else{
     for(let j=n-1;j>=0;j--)
   console.log(arr[i][j])

   }
  }
}



let arr = [ [1, 2, 3, 4, 5, 6],
            [7, 8, 9, 10, 11, 12],
            [13, 14, 15, 16, 17, 18]
            ,[19, 20, 21, 22, 23, 24]
          ];
let r = arr.length;
let c = arr[0].length;
//console.log(r,c)
snakeOrderTraversal(arr,r,c)


-------------------------------------------------------------------------------------------------------------------

Linked List Insertion

class Node {
  constructor(data){
    this.data=data
    this.next=null
  }
}
class LinkedList{
  constructor(){
    this.head=null
    this.tail=null

  }
  append(data){
    let node=new Node(data) 
    if(this.head===null){
      this.head=node
      this.tail=node
    }
    else{
      this.tail.next=node
      this.tail=node


    }
  }
  print(){
    let value=this.head
    while(value){
      console.log(value.data)
      value=value.next
    }
  }
  
}
let list=new LinkedList()
list.append(12)
list.append(24)
list.append(36)
list.print()
console.log(list)
