// Type Annotations
// TypeScript can infer types, but you can also explicitly define them.
const hours: number = 10;
const myName: string = "me";

// Function with type annotations
// This function takes a number and returns a number
function square(val: number): number {
  return val ** 2;
}

// Class with type annotations
// This class has string properties and a method that returns a string
class Profile {
  // Properties with type annotations
  firstName: string = "me";
  lastName: string = "me";

  // Method that returns a string
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
