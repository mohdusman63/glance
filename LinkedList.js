class Node{
  constructor(data,next=null){
    this.data=data
    this.next=next
  }
}
class LinkedList{
  constructor(){
    this.head=null
    this.size=0
  }
  InsertFirst(data){
   this.head=new Node(data,this.head)
  
   }
   printListData(){
      let current=this.head
      while(current){
        console.log(current.data)
        current=current.next
        this.size++
      }
       console.log(this.size)
}

}
let ll=new LinkedList()
ll.InsertFirst(100)
ll.InsertFirst(200)
ll.InsertFirst(300)
console.log(ll)
ll.printListData()
