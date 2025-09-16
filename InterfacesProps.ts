// Interfaces Annotations for Props in TypeScript
// Interfaces are used to define the shape of an object, which is particularly useful for props in React components.

import React from "react"; // Mind you React has not been imported in these examples

// Define an interface for the props
interface TaskShowProps {
  title: string;
  completed: boolean;
}

// Use the interface in a React component
// This component takes props that conform to the TaskShowProps interface
function TaskShow({title, completed}: TaskShowProps) {
  return (
    <div>
      {title} - {completed ? "Done" : "Need to complete"}
    </div>
  );
}

// Example usage of the TaskShow component
<TaskShow title="Write an interface" completed={true} />;
