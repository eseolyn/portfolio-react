import React from "react";
import { useDark } from "../../ThemeContext";
import BackBtn from "./BackBtn";

const ProjectsNav = () => {
    const { isDark } = useDark();

    return (
        <>
            <nav className={"nav" + (isDark ? " dark" : "")}>
                <BackBtn />
                <div className="title">
                    <span>Projects</span>
                </div>
            </nav>
        </>
    );
};

export default ProjectsNav;
