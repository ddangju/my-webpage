import React, { useState } from "react";
import "../styles/footer.scss";
import bottomPhoto from "../images/badge.png";
import Modal from "../components/modal";
import offImg from "../images/off.jpg";

const Footer = () => {
  const [show, setShow] = useState(false);

  const handleMenu = () => {
    setShow(!show);
  };

  const offBtn = document.getElementsByClassName("offImg");

  const off = () => {
    // offBtn[0].classList.add("show");
    // console.log("test ", offBtn[0].classList);

    // console.log(offBtn[0].classList);
    // offBtn[0].classList.add("visible");
    // offImg[0].classList.add("show");
    offBtn[0].classList.add("show");
    // setTimeout(() => {
    //   console.log("Gd");
    //   window.open("", "_self", "");
    //   window.close();
    // }, 2000);
  };

  return (
    <>
      <img src={offImg} alt="offImg" className="offImg" />
      <div className="bottom_section">
        {show && <Modal off={off}></Modal>}
        <div className="bottom">
          <div className="bottom-inner" onClick={handleMenu}>
            <img src={bottomPhoto} alt="사진" className="windowImg" />
            <div className="bottom-inner-start">시작</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
