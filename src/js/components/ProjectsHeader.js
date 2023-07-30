import React from "react";
import { useDark } from "../../ThemeContext";
import BackBtn from "./BackBtn";

const ProjectsHeader = () => {
    const { isDark } = useDark();

    return (
        <>
            <nav className={"nav " + (isDark ? "dark" : "white")}>
                <BackBtn />
                <div className="title">
                    <span>Projects</span>
                </div>
            </nav>
        </>
    );
};

export default ProjectsHeader;
