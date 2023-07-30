import React, { useEffect, useRef } from "react";
// import { MdSunny } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { HiMiniArrowUp } from "react-icons/hi2";
import { useDark } from "../../ThemeContext";

const ToggleBtn = () => {
    const scrollRef = useRef();
    useEffect(() => {
        // const scrollUpBtn = document.querySelector(".scrollUpBtn");
        // console.log(scrollUpBtn);
        // window.scrollY < 200 이면 보이지 않도록
        // useState(false) className="active"
    }, []);
    const handleScroll = () => {
        if (!window.scrollY) return;
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const { isDark, onToggle } = useDark();

    return (
        <div className="toggle">
            <div className="toggle_wrap">
                <button
                    className={
                        "toggle_btn scrollUpBtn " +
                        (isDark ? "darkBtn" : "whiteBtn")
                    }
                    onClick={handleScroll}
                    ref={scrollRef}
                >
                    <HiMiniArrowUp />
                </button>
                <button
                    className={
                        "toggle_btn DarkModeBtn " +
                        (isDark ? "darkBtn" : "whiteBtn")
                    }
                    onClick={onToggle}
                >
                    <BsSunFill />
                </button>
            </div>
        </div>
    );
};

export default ToggleBtn;
