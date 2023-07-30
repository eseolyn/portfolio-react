import React from "react";
import About from "./About";
import ProjectThumbnail from "./ProjectThumbnail";
import Contact from "./Contact";
import Skills from "./Skills";
import ToggleBtn from "./components/ToggleBtn";

const Main = () => {
    return (
        <main>
            <About />
            <ProjectThumbnail />
            <Skills />
            <Contact />
            <ToggleBtn />
        </main>
    );
};

export default Main;
