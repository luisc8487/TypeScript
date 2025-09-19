// interface ButtonProps {
//   label: string;
//   onClick: () => void;
// }

// function Button({label, onClick}: ButtonProps) {
//   return <button onClick={() => onClick()}>{label}</button>;
// }

// interface IconButtonProps extends ButtonProps {
//     // New property specific to IconButton

//     // Inherited properties from ButtonProps
//     // label: string;
//     // onClick: () => void;

//   icon: string;
// }

// interface IconButton({label, onClick, icon}: IconButtonProps) {
//     return <button onClick={() => onClick()}>{icon}{label}</button>;
// }