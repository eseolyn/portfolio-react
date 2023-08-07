import React from "react";
import Navigation from "./js/components/Navigation";
import Home from "./js/Home";
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
                                    <Home />
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
