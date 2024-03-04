// DropdownContext.js
import { createContext, useState } from "react";

export const DropdownContext = createContext();

// eslint-disable-next-line react/prop-types
export const DropdownProvider = ({ children }) => {
  const [dropdown, setDropdown] = useState("Arbitrum Rinkeby");

  return (
    <DropdownContext.Provider value={{ dropdown, setDropdown }}>
      {children}
    </DropdownContext.Provider>
  );
};
