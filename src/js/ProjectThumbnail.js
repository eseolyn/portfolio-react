import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDark } from "../ThemeContext";
import portfolio_about from "../img/portfolio_img/portfolio_about.png";
import portfolio_projects from "../img/portfolio_img/portfolio_projects.png";
import portfolio_skills from "../img/portfolio_img/portfolio_skills.png";

const ProjectThumbnail = (_, ref) => {
    const { isDark } = useDark();
    const navigate = useNavigate();
    return (
        <div
            className="projectThumbnail section"
            ref={(thumbnailRef) => (ref.current[1] = thumbnailRef)}
        >
            <div className="title">
                <span>Projects</span>
            </div>
            <div className="content thumbNailsContents">
                <div className="thumbNailItem thumbNail1">
                    <img src={portfolio_about} alt="example" />
                    <div className="thumbNailItem_desc">
                        <div>Kakao Clone</div>
                        <p>
                            Vestibulum luctus finibus condimentum. Praesent quis
                            tempus velit. Maecenas sapien.
                        </p>
                    </div>
                    {/* about */}
                </div>
                <div className="thumbNailItem thumbNail2">
                    <img src={portfolio_projects} alt="example" />
                    <div className="thumbNailItem_desc">
                        <div>Zoom Clone</div>
                        <p>
                            Donec quis lacus ut leo accumsan dignissim non
                            lobortis neque.
                        </p>
                    </div>
                    {/* projects */}
                </div>
                <div className="thumbNailItem thumbNail3">
                    <img src={portfolio_skills} alt="example" />
                    <div className="thumbNailItem_desc">
                        <div>Youtube Clone</div>
                        <p>
                            Duis sollicitudin ligula et justo consectetur
                            aliquam. Vivamus nec congue.
                        </p>
                    </div>
                    {/* skills */}
                </div>
                <button
                    className={"thumbNailBtn" + (isDark ? " darkBtn" : "")}
                    onClick={() => navigate("/projects")}
                >
                    more
                </button>
            </div>
            {/* thumbnail hover => anim size up */}
        </div>
    );
};

export default forwardRef(ProjectThumbnail);

// hover on thumbnail, anim effect(like auto scrolling)
// or div horizontal scroll
// 카카오 클론(HTML, CSS), 유튜브 클론(nodejs, scss, (babel, mongoose, pug)),
// 트위터클론(firebase, social-login), 줌 클론(socketIO, express)
// movie web(fetch...?), 크롬 클론(toDo CRUD, weather fetch, canvas === vanillaJS)
// masterclass( ing )
