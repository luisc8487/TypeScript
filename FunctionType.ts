// Defining an interface with properties and methods

/*
Analogy: Think of MathOperation as a "recipe" for making a sandwich. 
The interface defines the ingredients (two numbers) and the result (a number). 
Different recipes (add, multiply) use the same ingredients but produce different sandwiches (results).
*/

// Function Type Interface
interface MathOperation {
  (a: number, b: number): number;
}

// Example usage:
// Implementing the MathOperation interface with different functions
// Interface ensures both functions adhere to the same structure 
// (two number inputs and a number output)
const add: MathOperation = (x, y) => x + y;
const multiply: MathOperation = (x, y) => x * y;

console.log(add(2, 3));       // Output: 5
console.log(multiply(4, 5));  // Output: 20


/*
---------------------------------------------------------
*/


// Defining an interface with properties and methods

// Analogy: Think of an interface as a blueprint for a car.
// It specifies what properties (like model and year) and methods (like setYear and getDescription) a car should have.

interface Car {
  model: string;
  year: number;
  // Methods in interfaces define functions that the implementing object must have.
  setYear(year: number): void;
  setModel(model: string): void;
  getDecription(): string;
}

// Function that takes a Car object and prints its details
function printCar(car: Car) {
  console.log(car);
}

// Analogy: Creating a specific car based on the Car blueprint
const mustang: Car = {
  model: "Mustang",
  year: 1969,
  // Implementing the methods defined in the Car interface
  // Each method must match the signature defined in the interface
  // Method to set the year of the car
  setYear(newYear: number) {
    this.year = newYear;
  },
  // Method to set the model of the car
  setModel(newModel: string) {
    this.model = newModel;
  },
  // Method to get a description of the car
  getDecription() {
    return `${this.model} - ${this.year}`;
  },
};

printCar(mustang)