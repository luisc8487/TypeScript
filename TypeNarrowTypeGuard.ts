
// Type Narrowing with Type Guards
interface Image {
	src: string;
}


// Example function demonstrating type narrowing
// function logOutput(value: string | number | string[] | Image){
// 	if(typeof value === 'string'){
// 		value.toUpperCase();
// 	}
//     if(typeof value === 'number'){
//         Math.round(value);
//     }
//     if(Array.isArray(value)){
//         value.join('');
//     }
//     if(typeof value === 'object' && !Array.isArray(value)){
//         value.src
//     }
// }