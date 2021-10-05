//console.log(this.alert('HI'))
 //let manufacturer="ferrari"
let car={
    name: "c calss",
    manufacturer:"mercedes",
    print: ()=>{
        // console.log("a")
        console.log(this)
        //let manufacturer="BMW"
        //console.log(manufacturer) 
        //console.log(car.manufacturer,car.name)
        //console.log(this.name,this.manufacturer)
        console.log(`${this.name} was created by ${this.manufacturer}`)
    }
}
// car.print('ferrari')
// console.log(car.name)
// console.log(car.manufacturer)
// console.log(car)
// console.log(typeof car)
//car.print()


// console.log(Object.keys(car))
// console.log(Object.values(car))
console.log(car.hasOwnProperty('name'))