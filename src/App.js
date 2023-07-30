import React from "react";
import Navigation from "./js/components/Navigation";
import Main from "./js/Main";
import Projects from "./js/projects/Projects";
import { ThemeContextProvider } from "./ThemeContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
    return (
        <>
            <ThemeContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Navigation />
                                    <Main />
                                </>
                            }
                        />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </BrowserRouter>
            </ThemeContextProvider>
        </>
    );
}

export default App;
