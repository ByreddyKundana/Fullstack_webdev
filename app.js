var button=document.querySelector('button')
var input=document.querySelector('input')
var list=document.querySelector('ul')

//const callbackfunc=(event)=>{
 //   console.log(event.target)
 //   console.log(input.value)
//}

//button.addEventListener('click',callbackfunc)

const callbackfunc=(event)=>{
    const inputvalue=input.value
    const element=document.createElement('li')
    const textnode=document.createTextNode(inputvalue)
    element.appendChild(textnode)
    list.appendChild(element)
}
button.addEventListener('click',callbackfunc)