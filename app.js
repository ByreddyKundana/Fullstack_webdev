const a=document.querySelectorAll('input')[0]
const b=document.querySelectorAll('input')[1]
const add=document.querySelector('#add')
const multiply=document.querySelector('#multiply')
const subract=document.querySelector('#subract')
const resultbox=document.querySelector('.result')
 
//const sum=()=>{
  //  const result=parseInt(a.value)+parseInt(b.value)
    //resultbox.innerHTML=result
//}

//const product=()=>{
 //   const result=parseInt(a.value)+parseInt(b.value)
   // resultbox.innerHTML=result
//}

const calculate=(event,operation)=>{
  //  console.log(event.target)
   //if(operation=='add') {
     //  console.log('adding')
   //}else if (operation=='multiply'){
     //  console.log('multiply')
   //}
   switch(operation){
       case "add":
           resultbox.innerHTML=parseInt(a.value)+parseInt(b.value)
           break
      case "multiply":
           resultbox.innerHTML=parseInt(a.value)*parseInt(b.value)
           break
      case "subract":
           resultbox.innerHTML=parseInt(a.value)-parseInt(b.value)
           break    
      default:
          resultbox.innerHTML="Not a valid operation"
   }
}
multiply.addEventListener('click',(event)=>{
    calculate(event,'multiply')
})
add.addEventListener('click',(event)=>{
    calculate(event,'add')
})
subract.addEventListener('click',(event)=>{
    calculate(event,'subract')
})