import React from "react";
import { useDark } from "../../ThemeContext";
import BackBtn from "../components/BackBtn";

const ProjectsNav = () => {
    const { isDark } = useDark();

    return (
        <>
            <nav className={"nav" + (isDark ? " dark" : "")}>
                <BackBtn />
                <div className="projectsNav">
                    <span>Projects</span>
                </div>
            </nav>
        </>
    );
};

export default ProjectsNav;
