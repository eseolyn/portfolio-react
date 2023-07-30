import React from "react";
import { useDark } from "../ThemeContext";

const ProjectThumbnail = () => {
    const { isDark } = useDark();
    return (
        <section
            id="projectThumbnail"
            className={"section " + (isDark ? "dark" : "white")}
        >
            <div className="title">
                <span>Projects</span>
            </div>
            <div className="thumbNails_content">
                <div className="thumbNail_item"> thumbnail 1</div>
                <div className="thumbNail_item"> thumbnail 2</div>
                <div className="thumbNail_item"> thumbnail 3</div>
            </div>
            {/* thumbnail hover => anim size up */}
            {/* <button>more &rarr;</button>
            button에 '/projects'로 가는 링크 걸기 */}
        </section>
    );
};

export default ProjectThumbnail;

// hover on thumbnail, anim effect(like auto scrolling)
// or div horizontal scroll
// 카카오 클론(HTML, CSS), 유튜브 클론(nodejs, scss, (babel, mongoose, pug)),
// 트위터클론(firebase, social-login), 줌 클론(socketIO, express)
// movie web(fetch...?), 크롬 클론(toDo CRUD, weather fetch, canvas === vanillaJS)
// masterclass( ing )
