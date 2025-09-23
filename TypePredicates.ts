// Type Narrowing with Type Guards
interface Image {
	src: string;
}

// User interface
interface User{
    username: string;
}

// Type Predicate function to check if value is User
function isUser(value: any): value is User{
    return 'username' in value;
}

// Example function demonstrating type narrowing with type predicates
function logOutput(value: Image | User) {
    // Using the type predicate to narrow down the type
    if(isUser(value)){
        console.log(value.username);
    }else{
        console.log(value.src);
    }
}

// Test cases
logOutput({src: 'img.png'});
logOutput({username: 'john_doe'});