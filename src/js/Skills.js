import React from "react";
import { useDark } from "../ThemeContext";

const Skills = () => {
    const { isDark } = useDark();

    return (
        <section
            id="skills"
            className={"section " + (isDark ? "dark" : "white")}
        >
            <div className="title">
                <span>Skills</span>
            </div>
            <div className="skills_content">
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                    alt="html5"
                />

                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                    alt="css3"
                />

                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="javascript"
                />

                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                    alt="react"
                />

                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                    alt="sass"
                />
                {/* <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    alt="typescript"
                /> */}

                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                    alt="mysql"
                />

                {/* <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg"
                    alt="socketio"
                /> */}
                <div></div>
                <div>
                    <span>
                        I'm still learning <br />
                        like this <br /> &rarr; 🖥🤦‍♀️
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Skills;

// language, framework/library, cloud, tools, database