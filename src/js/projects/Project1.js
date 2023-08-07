import React from "react";
import { useDark } from "../../ThemeContext";
import portfolio_about from "../../img/portfolio_img/portfolio_about.png";
import portfolio_projects from "../../img/portfolio_img/portfolio_projects.png";
import portfolio_skills from "../../img/portfolio_img/portfolio_skills.png";

const Project1 = () => {
    const { isDark } = useDark();
    return (
        <>
            <div className="projectCard">
                <div className="projectCard_desc">
                    Etiam tempus iaculis mauris, ut interdum felis. Integer
                    hendrerit, erat vitae tempor lobortis, nulla mi viverra
                    ante, accumsan eleifend risus leo ut neque. Quisque tempus
                    lacinia bibendum.
                </div>
                <div>
                    <img
                        className="projectCard_img"
                        src={portfolio_about}
                        alt="portfolio_about"
                    />
                </div>
            </div>
            <div className="projectCard">
                <div className="projectCard_desc">
                    Etiam tempus iaculis mauris, ut interdum felis. Integer
                    hendrerit, erat vitae tempor lobortis, nulla mi viverra
                    ante, accumsan eleifend risus leo ut neque. Quisque tempus
                    lacinia bibendum.
                </div>
                <div>
                    <img
                        className="projectCard_img"
                        src={portfolio_projects}
                        alt="portfolio_projects"
                    />
                </div>
            </div>
            <div className="projectCard">
                <div className="projectCard_desc">
                    Etiam tempus iaculis mauris, ut interdum felis. Integer
                    hendrerit, erat vitae tempor lobortis, nulla mi viverra
                    ante, accumsan eleifend risus leo ut neque. Quisque tempus
                    lacinia bibendum.
                </div>
                <div>
                    <img
                        className="projectCard_img"
                        src={portfolio_skills}
                        alt="portfolio_skills"
                    />
                </div>
            </div>
            <div className={"GoToRepoBtn" + (isDark ? " darkBtn" : "")}>
                Go to Repository
            </div>
        </>
    );
};

export default Project1;
