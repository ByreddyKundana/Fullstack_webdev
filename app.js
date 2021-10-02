var heading=document.getElementById('heading')
heading.innerHTML="hi from js"
console.log(heading)
console.log(typeof heading)
var para=document.getElementsByClassName('para')
console.log(para)//html collection
console.log(para.length)
console.log(para[0])
console.log(para[1])

var tags=document.getElementsByTagName('a')
console.log(tags)

var query=document.querySelector('.para')
console.log(query)