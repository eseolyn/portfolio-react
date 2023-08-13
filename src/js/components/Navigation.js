import React, { useEffect, useState } from "react";
import { Link as ScrollTo } from "react-scroll";
import { useDark } from "../../ThemeContext";

const Navigation = () => {
    const { isDark } = useDark();
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        // 스크롤바 top의 위치값
        const windowScroll = document.documentElement.scrollTop;
        // 스크롤영역의 높이
        const totalHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        // 스크롤된 퍼센테이지
        const scrolled = (windowScroll / totalHeight) * 100;

        setScrollTop(scrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={"nav" + (isDark ? " dark" : "")}>
            <div className="navigation">
                <ScrollTo to="about" spy={true} smooth={true}>
                    <div className="navigationItem">About</div>
                </ScrollTo>
                <ScrollTo to="projectThumbnail" spy={true} smooth={true}>
                    <div className="navigationItem">projects</div>
                </ScrollTo>
                <ScrollTo to="skills" spy={true} smooth={true}>
                    <div className="navigationItem">skills</div>
                </ScrollTo>
                <ScrollTo to="contact" spy={true} smooth={true}>
                    <div className="navigationItem">contact</div>
                </ScrollTo>
            </div>
            {/* <div className="progressBar">
                <progress id="progress" value="28" max="100"></progress>
            </div> */}
            <div
                className={"progressBar" + (isDark ? " darkBtn" : "")}
                style={{ width: `${scrollTop}%` }}
            />
        </nav>
    );
};

export default Navigation;
