/**
 * @name FactoryMethod
 * @description This makes an instance of several derived classes based on interfaced data or events
 * @type creational
 * @related Abstract Factory , Builder , Prototype , Singleton
*/
//! About
/*
* The Factory pattern is concerned with the notion of creating objects.
* It does not explicitly require the use of a constructor.
* A Factory should provide a generic interface for the creating objects,
* where we can specify the type of object we wish to be created.

*/
//? When to use the factory Pattern
/*
*When our object or compenent setup involves a high level of complexity
*When we need to easily generate different instances of objects depending on the environment we are in.
*When we're working with many small objects or components that share the same properties.
*When composing objects with instances of other objects that need only satisfty an APU contract (AKA Duck Typing)
*to work. This is useful for decoupling.
*/
//! Example
class Car {
    constructor(options) {
        this.doors = options.doors || 4;
        this.state = options.state || "Brand New";
        this.color = options.color || "Silver";
    }
}

class Truck {
    constructor(options) {
        this.state = options.state || "Used";
        this.wheelSize = options.wheelSize || "Large";
        this.color = options.color || "Blue";
    }
}
class VehicleFactory{
    constructor(){
    this.vehicleClass = Car
    }
    createVehicle(options){
        switch(options.vehicleType){
            case "Car":
                this.vehicleClass = Car;
                break;
            case "Truck":
                this.vehicleClass = Truck;
                break;    
        }
        return new this.vehicleClass(options)
    }
}
let carFactory = new VehicleFactory()
let car = carFactory.createVehicle({
    vehicleType:"Car",
    color:"yellow",
    doors:6,
})
let movingTruck = {
    vehicleType:"Truck",
    state:"like new",
    color:"red",
    wheelsize:'small'
}
let truck = carFactory.createVehicle(movingTruck)
console.log(car)
console.log(car instanceof Car)
console.log(truck)
console.log(truck instanceof Truck)