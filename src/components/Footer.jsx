import React from "react";
import "../styles/footer.scss";
import bottomPhoto from "../images/badge.png";

const Footer = () => {
  return (
    <div>
      <div className="bottom_section">
        <div className="bottom-top" width="100" height="20"></div>
        <div className="bottom">
          <div className="bottom-inner">
            <img src={bottomPhoto} alt="사진" className="windowImg" />
            <div className="bottom-inner-start">시작</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
