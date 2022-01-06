import React, { useState } from "react";
import "../styles/footer.scss";
import bottomPhoto from "../images/badge.png";
import Modal from "../components/modal";

const Footer = () => {
  const [show, setShow] = useState(false);

  const handleMenu = () => {
    setShow(!show);
  };
  return (
    <div className="bottom_section">
      {show && <Modal></Modal>}
      <div className="bottom">
        <div className="bottom-inner" onClick={handleMenu}>
          <img src={bottomPhoto} alt="사진" className="windowImg" />
          <div className="bottom-inner-start">시작</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
