function greet(Name,age=19) {
    console.log('hey' +Name+ "your age is" +age)
}
greet('Priya') 


//function add(a=0,b=0){  
 //   var sum=a+b
 //   return sum
//}
//console.log(sum)
//var result= add(10,20)
//  console.log(result)
   //nan: not a number

var add=(a=0,b=0)=>{
    var sum=a+b
    return sum
 }

console.log(add(10,20))

