var list=document.querySelector('ul')

console.log(list)

var arr=['Go to the gym','cook oatmeal','eat']
 
arr.push('complete assignment')

for(var i=0;i<arr.length;i++){
    var element=document.createElement('li')
    var textnode=document.createTextNode(arr[i])
    element.appendChild(textnode)
    list.appendChild(element)
}