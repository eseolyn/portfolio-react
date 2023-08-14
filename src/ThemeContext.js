import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    const onToggle = () => {
        console.log(isDark);
        setIsDark((current) => !current);
        console.log(isDark);
    };
    // true, false 찍히는게 이상하다? => setState 비동기 문제
    return (
        <ThemeContext.Provider value={{ isDark, onToggle }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useDark = () => useContext(ThemeContext);
