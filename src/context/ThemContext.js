// use createContext hook

//import
import { useState, createContext, useContext } from "react";
// 1.vaiables of custom hook
const ThemeContext = createContext();

//
// 2.provider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3.custom hook
const useTheme = () => useContext(ThemeContext);
export { useTheme, ThemeProvider };
