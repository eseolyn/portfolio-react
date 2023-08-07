import React from "react";
import mimoticon from "../img/memoticon_q.png";

const About = () => {
    /* if (isDark === undefined) {
        throw new Error(
            "useDarkState should be used within ThemeContextProvider"
        );
    } */
    return (
        <>
            <div className="about section">
                <div className="title">
                    <span>About</span>
                </div>

                <div className="content about_content">
                    <div className="about_item about_left">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Morbi feugiat ut diam eget ornare.
                        </p>
                        <p>
                            Ut semper elit sit amet arcu faucibus mollis.
                            Suspendisse placerat eros ut efficitur tincidunt.
                            Curabitur malesuada velit id velit ultricies
                            sodales. Etiam hendrerit elementum imperdiet. Fusce
                            pretium ipsum ligula, eu facilisis ante imperdiet
                            in.
                        </p>
                    </div>
                    <div className="about_item about_right">
                        <img
                            className="mimoticon"
                            alt="mimoticon"
                            src={mimoticon}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;

// <div className="top_half">
//     <div className="desc">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         Nam eget fringilla nibh. In vel diam feugiat, tristique
//         turpis non, egestas diam. Maecenas sit amet condimentum
//         nunc, vitae interdum eros. Sed ultricies lacus rhoncus
//         lacinia condimentum. Cras ullamcorper porta malesuada.
//         Mauris facilisis aliquam ligula ut bibendum. Proin non
//         condimentum felis. Etiam eget eleifend lorem. Nunc erat
//         dolor, facilisis non eleifend at, accumsan et lorem.
//         Suspendisse eget gravida sem. Donec vitae luctus velit.
//         Ut quis porttitor nulla, ut pellentesque eros. Phasellus
//         sit amet auctor dolor. In consectetur purus a dolor
//         ultrices accumsan.
//     </div>
// </div>
// <div className="bottom_half">about description</div>
