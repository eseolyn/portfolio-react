import React, { forwardRef } from "react";
import About from "./About";
import ProjectThumbnail from "./ProjectThumbnail";
import Contact from "./Contact";
import Skills from "./Skills";
import ToggleBtn from "./components/ToggleBtn";
import { useDark } from "../ThemeContext";

const Home = (_, ref) => {
    const { isDark } = useDark();
    return (
        <div className={"home" + (isDark ? " dark" : "")}>
            {/* 이동할 컴포넌트에서 forwardRef 내부 함수의 두 번째 인자로 ref를 받고 ref.current 배열에 DOM을 넣어줌 */}
            <About ref={ref} />
            <ProjectThumbnail ref={ref} />
            <Skills ref={ref} />
            <Contact ref={ref} />
            <ToggleBtn />
        </div>
    );
};

export default forwardRef(Home);
