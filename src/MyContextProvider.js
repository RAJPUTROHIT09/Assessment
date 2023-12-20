import React, { useState } from 'react';
import MyContext from './MyContext';

// Create the context provider component
const MyContextProvider = ({ children }) => {
  // Define state variables for citizenship and age status
  const [isCitizen, setIsCitizen] = useState(false);
  const [isOver21, setIsOver21] = useState(false);

  // Create an object with context values
  const contextValue = {
    isCitizen,
    setIsCitizen,
    isOver21,
    setIsOver21,
  };

  // Provide the context values to the children components
  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};

// Export the context provider component
export default MyContextProvider;
