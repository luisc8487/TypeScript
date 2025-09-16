// Defining an interface with properties and methods

interface Car {
  model: string;
  year: number;
  // Methods in interfaces define functions that the implementing object must have.
  setYear(year: number): void;
  setModel(model: string): void;
  getDecription(): string;
}

function printCar(car: Car) {
  console.log(car);
}

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