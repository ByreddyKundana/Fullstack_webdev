 //var add=(a=0,b=0)=>a+b

 //console.log(add(10,20))

//const greet=(Name)=>'hi'+ Name
//console.log(greet('priya'))

var arr=['go to the gym','eat food',"clean house"]

//for(var i=0;i<arr.length;i++){
//    console.log(arr[i])
//}

var callbackFunction=()=>{
    console.log('i ran')
}
arr.forEach(callbackFunction)

var callbackFunction=(element,index)=>{
    console.log(element,index)
}
arr.forEach(callbackFunction)

arr.forEach((element,index)=>{
    console.log(element,index)
})