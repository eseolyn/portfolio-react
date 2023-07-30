import React from "react";
import { Link as ScrollTo } from "react-scroll";
import { useDark } from "../../ThemeContext";

const Navigation = () => {
    const { isDark } = useDark();
    return (
        <nav className={"nav " + (isDark ? "dark" : "white")}>
            <div className="navigation">
                <ScrollTo to="about" spy={true} smooth={true}>
                    <div className="navigation_item">About</div>
                </ScrollTo>
                <ScrollTo to="projectThumbnail" spy={true} smooth={true}>
                    <div className="navigation_item">projects</div>
                </ScrollTo>
                <ScrollTo to="skills" spy={true} smooth={true}>
                    <div className="navigation_item">skills</div>
                </ScrollTo>
                <ScrollTo to="contact" spy={true} smooth={true}>
                    <div className="navigation_item">contact</div>
                </ScrollTo>
            </div>
            {/* scroll bar : position absolute, 위치 vw,em, mask?? */}
            {/* or using progressBar tag */}
            <div className="progressBar ">
                <progress id="progress" value="28" max="100"></progress>
            </div>
        </nav>
    );
};

export default Navigation;
