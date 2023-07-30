import React from "react";
import { useDark } from "../../ThemeContext";

const BackBtn = () => {
    const { isDark } = useDark();
    return (
        <>
            <div className={"backBtn" + (isDark ? " darkBtn" : " whiteBtn")}>
                &larr;
            </div>
        </>
    );
};

export default BackBtn;
