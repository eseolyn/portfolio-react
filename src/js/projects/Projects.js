import React, { useState } from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import ToggleBtn from "../components/ToggleBtn";
import ProjectsHeader from "../components/ProjectsHeader";
import { useDark } from "../../ThemeContext";

// taps
const Projects = () => {
    const [activeTab, setActiveTab] = useState(0);
    const { isDark } = useDark();
    const tabArr = [
        { header: "Project1", content: <Project1 /> },
        { header: "Project2", content: <Project2 /> },
        { header: "Project3", content: <Project3 /> },
    ];
    return (
        <>
            <ProjectsHeader />
            <section className={"tab section " + (isDark ? "dark" : "white")}>
                <div className="project-headers">
                    {tabArr.map((el, index) => (
                        <div
                            className={
                                "project-header" +
                                (activeTab === index ? "active" : "")
                            }
                            onClick={() => setActiveTab(index)}
                        >
                            {el.header}
                        </div>
                    ))}
                </div>
                <div className="tab-body">{tabArr[activeTab].content}</div>
            </section>
            <ToggleBtn />
        </>
    );
};

export default Projects;
