import React from "react";
import { useDark } from "../../ThemeContext";
import { useNavigate } from "react-router-dom";

const BackBtn = () => {
    const { isDark } = useDark();
    const navigate = useNavigate();
    return (
        <>
            <div
                className={"backBtn" + (isDark ? " darkBtn" : " whiteBtn")}
                onClick={() => navigate("/")}
            >
                &larr;
            </div>
        </>
    );
};

export default BackBtn;
