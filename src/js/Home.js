import React from "react";
import About from "./About";
import ProjectThumbnail from "./ProjectThumbnail";
import Contact from "./Contact";
import Skills from "./Skills";
import ToggleBtn from "./components/ToggleBtn";
import { useDark } from "../ThemeContext";

const Home = () => {
    const { isDark } = useDark();
    return (
        <div className={"home" + (isDark ? " dark" : "")}>
            <About />
            <ProjectThumbnail />
            <Skills />
            <Contact />
            <ToggleBtn />
        </div>
    );
};

export default Home;
