import React, { useRef } from "react";
import Navigation from "./js/components/Navigation";
import Home from "./js/Home";
import Projects from "./js/projects/Projects";
import { ThemeContextProvider } from "./ThemeContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
    const scrollRef = useRef([]);
    return (
        <>
            <ThemeContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    {/* scrollRef의 배열을 props로 넘겨줌 */}
                                    <Navigation scrollRef={scrollRef} />
                                    <Home ref={scrollRef} />
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
