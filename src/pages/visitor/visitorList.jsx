import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import CardList from "./cardList";
import "../../styles/visitor/visitorList.scss";

const VisitorList = (props) => {
  // console.log(props);
  const history = useHistory();
  let state = history.location.state;
  const [userId, setUserId] = useState(state && state.id);

  // console.log("props확인", history.location.state);

  const [file, setFile] = useState({ fileName: null, fileURL: null });
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState({});
  const formRef = useRef();
  const nameRef = useRef();
  const titleRef = useRef();
  const selectRef = useRef();
  const textareaRef = useRef();
  const inputRef = useRef();

  ///updated의 card.id라는 key 값에 접근하여 card를 할당해준다
  ///{1640610742929 : card}
  const addCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });

    props.cardRepository.saveCard(userId, card);
  };

  const fileUpload = (file) => {
    // console.log("파일업로드");
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());
    const today = year + month + day;
    const userCard = {
      id: Date.now(),
      today: today,
      nameRef: nameRef.current.value || "",
      titleRef: titleRef.current.value || "",
      selectRef: selectRef.current.value,
      textareaRef: textareaRef.current.value || "",
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };
    formRef.current.reset();
    addCard(userCard);
    // console.log("클릭했음");
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
    setLoading(true);
    // console.log("사진바꾸기1");
    const uploaded = await props.imgChange.upload(e.target.files[0]);
    setLoading(false);
    // console.log(uploaded);
    // setTest(uploaded);

    fileUpload({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  ///만약에 user 내용이 없다면 visitor로 돌려보낸다.
  useEffect(() => {
    props.authService.onAuthChange((user) => {
      // console.log("uid", user);
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/visitor");
      }
    });
  }, [history, props.authService]);

  ///사용자 아이디가 없다면 실행하지않고
  //있다면 실행한다.
  useEffect(() => {
    if (!userId) {
      return;
    }
    // props.cardRepository.syncCard(userId, (cards) => {
    //   setCards(cards);
    // });

    const stopSync = props.cardRepository.syncCard(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [props.cardRepository, userId]);
  // console.log("file>>>>", file);
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
            {loading && <div className="loading"></div>}
            {!file.fileURL ? (
              <button className="imgBtn" onClick={onBtnClick}>
                사진올리기
              </button>
            ) : (
              <img src={file.fileURL} />
            )}
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
