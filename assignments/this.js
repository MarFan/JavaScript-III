/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/global - if a funciton is in the global scope, `this` will be the window object
* 2. implicit - the scope of `this` is contained to the object that is called to the left of the dot.
* 3. explicit - `this` scope is directly tied to the specific data passed in to a constructor function
* 4. new - `this` is applied to the data that is used to create a new object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function windowBinding(name){
    console.log(`Hello, ${name}.`);
    console.log(this)
}
console.log(windowBinding);

// Principle 2

// code example for Implicit Binding
const implicitBinding = {
    favVehicle: 'VW Beetle',
    sayHello: function(name) {
        console.log(`${this.favVehicle} is ${name} favorite car.`);
        console.log(this)
    }
}

implicitBinding.sayHello('Jonah\'s');

// Principle 3

// code example for New Binding
function Car(attributes) {
    this.year = attributes.year,
    this.make = attributes.make,
    this.model = attributes.model,
    this.driver = attributes.driver,
    this.brag = function() {
        console.log(`${this.driver}, drives a ${this.year} ${this.make} ${this.model}`);
    }
}

const newCar = new Car({
    year: 1968,
    make: 'Volkswagen',
    model: 'Beetle',
    driver: 'Jonah'
});

const newCar2 = new Car({
    year: 2008,
    make: 'Honda',
    model: 'Odyssey',
    driver: 'Laura'
});

newCar.brag();
newCar2.brag();

// Principle 4

// code example for Explicit Binding
newCar.brag.call(newCar2);
newCar.brag.call(newCar);