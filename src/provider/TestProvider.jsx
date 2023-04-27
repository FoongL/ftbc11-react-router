import { createContext } from "react";

export const TestContext = createContext();
export const MoreContext = createContext();

const TestContextProvider = ({ children }) => {
  const testObj = {
    name: "Bob",
    number: 17,
    truthy: true,
  };

  return (
      <TestContext.Provider value={testObj}>{children}</TestContext.Provider>
  );
};

export default TestContextProvider;

