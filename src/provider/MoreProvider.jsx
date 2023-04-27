import { createContext } from "react";

export const MoreContext = createContext();

const MoreContextProvider = ({ children }) => {
  const testObj = {
    more: true
  };

  return (
      <MoreContext.Provider value={testObj}>{children}</MoreContext.Provider>
  );
};

export default MoreContextProvider;