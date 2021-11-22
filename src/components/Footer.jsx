import React from "react";
import "../styles/footer.scss";
import bottomPhoto from "../images/badge.png";

const Footer = () => {
  return (
    <div>
      <div class="bottom_section">
        <div class="bottom-top" width="100" height="20"></div>
        <div class="bottom">
          <div class="bottom-inner">
            <img src={bottomPhoto} alt="사진" className="windowImg" />
            <div class="bottom-inner-start">시작</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
