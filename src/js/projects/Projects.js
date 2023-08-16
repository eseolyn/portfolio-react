import React, { useState } from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import ToggleBtn from "../components/ToggleBtn";
import ProjectsNav from "./ProjectsNav";
import { useDark } from "../../ThemeContext";

// taps
const Projects = () => {
    const [activeTab, setActiveTab] = useState(0);
    const { isDark } = useDark();
    const tabArr = [
        { header: "Project1", content: <Project1 /> },
        { header: "Project2", content: <Project2 /> },
        { header: "Project3", content: <Project3 /> },
        { header: "more", content: <button>more</button> },
    ];
    return (
        <>
            <ProjectsNav />
            <div className={"tabs" + (isDark ? " dark" : "")}>
                <div className="tabWrap">
                    <div className="projectHeaders">
                        {tabArr.map((el, index) => (
                            <div
                                className={
                                    "projectHeader" +
                                    (isDark ? " darkTab" : "") +
                                    (activeTab === index ? " activeTab" : "") +
                                    (isDark && activeTab === index
                                        ? " activeDarkTab"
                                        : "")
                                }
                                onClick={() => setActiveTab(index)}
                                key={index}
                            >
                                {el.header}
                            </div>
                        ))}
                    </div>
                    <div className={"tabBody" + (isDark ? " darkBorder" : "")}>
                        {tabArr[activeTab].content}
                    </div>
                </div>
            </div>
            <ToggleBtn />
        </>
    );
};

export default Projects;
