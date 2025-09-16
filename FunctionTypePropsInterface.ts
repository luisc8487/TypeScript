// Function Type Props Interface in TypeScript
// This interface defines a function type that takes two parameters and returns a string.

// import React from "react";

// Defining the interface for the component props
interface ColorPickerProps {
  // An array of color strings
  color: string[];
  // A function that takes a color string and returns void
  handleColorSelect: (color: string) => void;
}

// A React functional component that uses the ColorPickerProps interface for its props
function ColorPicker({color, handleColorSelect}: ColorPickerProps) {
  const renderColor = color.map((c) => {
    return (
      <button key={c} onClick={() => handleColorSelect(c)}>
        {c}
      </button>
    );
  });

  return <div>{renderColor}</div>;
}
