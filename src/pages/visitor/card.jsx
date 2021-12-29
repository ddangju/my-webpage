import React from "react";
import defaultIMg from "../../images/react.png";

const DEFAULT_IMAGE = defaultIMg;

function Card({ item }) {
  const { nameRef, titleRef, fileURL, fileName, textareaRef, today } = item;

  // let year = today.getFullYear();
  // let month = today.getMonth();
  // let day = today.getDate();

  ///파일url이 있다면 이걸쓰고

  // const themeChange=(theme)=>{
  //   if(theme==="dark"){

  //   }

  // }

  const url = fileURL || DEFAULT_IMAGE;
  return (
    <div className="cardContainer">
      <div className="cardImgContainer">
        <img src={url} alt={fileName} className="cardImg" />
        <div className="user_name">{nameRef}</div>
      </div>
      <div className="user_card">
        <div>{today}</div>
        <div className="user_title">{titleRef}</div>
        <div className="user_message">{textareaRef}</div>
        {/* <div className="user_fileName">{fileName}</div> */}
      </div>
    </div>
  );
}

// function getStyle(theme) {
//   switch (theme) {
//     case "dark":
//       return ".dark";
//   }
// }

export default Card;
