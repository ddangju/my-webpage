import React, { useRef } from "react";
import defaultIMg from "../../images/react.png";

const DEFAULT_IMAGE = defaultIMg;

function Card({ item, cardDelete }) {
  const { nameRef, titleRef, fileURL, fileName, textareaRef, today } = item;

  // let year = today.getFullYear();
  // let month = today.getMonth();
  // let day = today.getDate();

  ///파일url이 있다면 이걸쓰고

  // const themeChange=(theme)=>{
  //   if(theme==="dark"){

  //   }

  // }
  const passwordCheck = useRef();

  console.log(item, "아이템<<<<<<<");

  const url = fileURL || DEFAULT_IMAGE;
  return (
    <div className="cardContainer">
      <div className="cardImgContainer">
        <img src={url} alt={fileName} className="cardImg" />
        <div className="user_name">{nameRef}</div>
      </div>
      <div className="user_card">
        <div className="user_delete">
          <div className="user_title">{titleRef}</div>
          <div className="deleteContainer">
            <div
              className="deleteBtn"
              onClick={() => cardDelete(item || passwordCheck.current.value)}
            >
              삭제
            </div>
            {item.password && (
              <input
                className="nonmember-password"
                placeholder="비밀번호"
                ref={passwordCheck}
              />
            )}
          </div>
        </div>
        <div className="user_message">{textareaRef}</div>
        <div className="user_date">Date.{today}</div>

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
