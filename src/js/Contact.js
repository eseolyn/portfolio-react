import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { SiNotion } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
// import { RiMailSendLine } from "react-icons/ri";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        setName(e.target.name.value);
        setEmail(e.target.email.value);
        setMessage(e.target.message.value);
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.message.value = "";
    };

    const handleCopyClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            alert("email 주소가 복사되었습니다.");
        } catch (e) {
            alert("email 복사에 실패하였습니다.");
        }
    };

    const GithubUrl = "https://github.com/eunseolYun";
    const GoogleEmail = "skopdt73@gmail.com";
    return (
        <>
            <div className="contact section">
                <div className="title">
                    <span>Contact</span>
                </div>
                <div className="content contactContent">
                    <div className="contactItem contactLeft">
                        <div>want contact me?</div>
                        <div className="contactIcons">
                            <BsGithub
                                className="contactIcon"
                                onClick={() => window.open(`${GithubUrl}`)}
                            />
                            <SiNotion className="contactIcon" />
                            <BiLogoGmail
                                className="contactIcon"
                                onClick={() =>
                                    handleCopyClipboard(`${GoogleEmail}`)
                                }
                            />
                            {/* 아이콘에 페이지 링크하기, 메일은... 어떻게하지? */}
                        </div>
                    </div>
                    <form
                        className="contactItem contactForm"
                        onSubmit={onSubmit}
                    >
                        <input
                            name="name"
                            className="contactInput"
                            type="text"
                            placeholder="your name"
                            required
                        ></input>
                        <input
                            name="email"
                            className="contactInput"
                            type="email"
                            placeholder="your email"
                            required
                        ></input>
                        <textarea
                            name="message"
                            className="contactMessage"
                            placeholder="message"
                            rows={5}
                            cols={30}
                            required
                        ></textarea>
                        <button className="contactSubmit" type="submit">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;

// tab 입력시 다음 element로 넘어가지 않게끔=> https://wazacs.tistory.com/52
// send 누르면 전송확인 모달창 띄우기
// value 사용해 나에게 email보내기
// github, notion, ... => click시 해당 페이지로 이동(새 창 또는 탭 <= window.open() 사용)
// const URL = "외부링크 url", onClick={() => window.open("URL")
