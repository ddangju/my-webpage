import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import CardList from "./cardList";
import "../../styles/visitor/visitorList.scss";

const VisitorList = (props) => {
  console.log(props.imgChange.upload);
  const history = useHistory();
  const [file, setFile] = useState({ fileName: null, fileURL: null });
  const [cards, setCards] = useState([]);
  const formRef = useRef();
  const nameRef = useRef();
  const titleRef = useRef();
  const selectRef = useRef();
  const textareaRef = useRef();
  const inputRef = useRef();

  const addCard = (card) => {
    const update = [...cards, card];
    setCards(update);
  };
  const fileUpload = (file) => {
    console.log(file.name);
    console.log(file.url);
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const userCard = {
      id: Date.now(),
      today: new Date(),
      nameRef: nameRef.current.value || "",
      titleRef: titleRef.current.value || "",
      selectRef: selectRef.current.value,
      textareaRef: textareaRef.current.value || "",
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };
    formRef.current.reset();
    addCard(userCard);
  };

  const onLogout = () => {
    props.authService.logout();
  };

  ///사진 올리는 버튼
  const onBtnClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  ///실제로 사진을 바꾸는 input창
  const onFileChange = async (e) => {
    const uploaded = await props.imgChange.upload(e.target.files[0]);
    // console.log(uploaded);
    fileUpload({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  ///만약에 user 내용이 없다면 visitor로 돌려보낸다.
  useEffect(() => {
    props.authService.onAuthChange((user) => {
      if (!user) {
        history.push("/visitor");
      }
    });
  });
  return (
    <>
      <div className="visitorList_container">
        <div className="visitorList_Header">
          <div className="visitorList_context">방명록</div>
          <div className="logoutBtn" onClick={onLogout}>
            logout
          </div>
        </div>
        <form className="visitorList_list_container" ref={formRef}>
          <div className="user_img_container">
            {/* <img className="user_editor_img" src="" alt="photo" /> */}
            <input
              type="file"
              accept="image/*"
              name="file"
              ref={inputRef}
              onChange={onFileChange}
              className="userImgFile"
            />
            <button className="imgBtn" onClick={onBtnClick}>
              사진올리기
            </button>
          </div>
          <div className="user_editor_container">
            <div className="user_editor_name_title">
              <input
                className="user_name"
                placeholder="사용자이름"
                ref={nameRef}
              />
              <input className="user_title" placeholder="제목" ref={titleRef} />
              <select className="theme" ref={selectRef}>
                <option value="Green">초록색</option>
                <option value="Blue">파랑색</option>
              </select>
            </div>
            <div className="textarea_container">
              <textarea className="user_textarea" ref={textareaRef}></textarea>
              <button className="user_submit" onClick={onSubmit}>
                Add!
              </button>
            </div>
          </div>
        </form>
        <div className="visitorList_preview">
          <CardList cards={cards}></CardList>
          {/* <div className="user_name"></div>
          <div className="user_age"></div> */}
        </div>
      </div>
    </>
  );
};

export default VisitorList;
