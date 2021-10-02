var heading=document.getElementById('heading')
var body=document.querySelector('body')
console.log(heading)

heading.innerHTML="i was added by JS"
heading.style="color:red;font-size:2rem"
console.log(heading.classList)
heading.classList.add('five')
console.log(heading.classList)
heading.classList.remove('one')
console.log(heading.classList)
body.classList.add('dark')
