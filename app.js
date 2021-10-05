var button=document.querySelector('button')
var input=document.querySelector('input')
var list=document.querySelector('ul')

//const callbackfunc=(event)=>{
 //   console.log(event.target)
 //   console.log(input.value)
//}

//button.addEventListener('click',callbackfunc)

var chores=[]

var deleteItem=(value)=>{
const index =chores.indexOf(value)
chores.splice(index,1)
   console.log(chores)
}

const callbackfunc=(event)=>{
    const inputvalue=input.value
    if(chores.includes(inputvalue)){console.log('already exists')}
    else{
     chores.push(inputvalue)
     const element=document.createElement('li')
     const textnode=document.createTextNode(inputvalue)
     element.appendChild(textnode)
     list.appendChild(element)
     element.addEventListener('click',(e)=>{
     deleteItem(e.target.innerHTML)})
    }
}
button.addEventListener('click',callbackfunc)