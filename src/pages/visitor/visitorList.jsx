import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import CardList from "./cardList";
import "../../styles/visitor/visitorList.scss";
import chatImg from "../../images/chat.svg";

const VisitorList = ({ cardRepository, authService, imgChange }) => {
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
  const textareaRef = useRef();
  const inputRef = useRef();

  ///updated의 card.id라는 key 값에 접근하여 card를 할당해준다
  ///{1640610742929 : card}
  const addCard = (card) => {
    // console.log(card, "나 입력한 카드");

    setCards((cards) => {
      // console.log(cards, "state 카드가 들어옴");

      const updated = { ...cards };
      // console.log(updated, "state 카드를 변수에 저장");

      updated[card.id] = card;

      // console.log(
      //   updated[card.id],
      //   "state로 저장한 카드에 입력한 카드의 아이디에 카드를 저장"
      // );

      // console.log(updated, "리턴하는 updated");
      return updated;
    });

    ///usrId는 사용자가 입력한 아이디, card는 입력한 카드의 값
    cardRepository.saveCard(card);
    // console.log("<<<<<<<<<<<<<<<<");
  };

  const cardDelete = (item) => {
    // cardRepository.deleteCard(item);
    // console.log(item, "<<<<<아이템");
    cardRepository.deleteCard(item);
  };

  const fileUpload = (file) => {
    // console.log("파일업로드");
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
    // console.log(file, "나파일");
    // setFile({ fileName: null, fileURL: null });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const year = String(date.getFullYear());
    let month = String(date.getMonth() + 1);
    let day = String(date.getDate());

    month = month.padStart(2, "0");
    day = day.padStart(2, "0");
    const today = year + month + day;
    const userCard = {
      id: Date.now(),
      today: today,
      nameRef: nameRef.current.value || "",
      titleRef: titleRef.current.value || "",
      // selectRef: selectRef.current.value,
      textareaRef: textareaRef.current.value || "",
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };
    // console.log(userCard, "userCard");
    formRef.current.reset();
    addCard(userCard);
    // console.log("클릭했음");
  };

  const onLogout = () => {
    authService.logout();
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
    const uploaded = await imgChange.upload(e.target.files[0]);
    setLoading(false);
    // console.log(uploaded);
    // setTest(uploaded);

    fileUpload({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  const onFileEdit = () => {
    // setFile.fileURL(null);
    inputRef.current.click();
  };

  ///만약에 user 내용이 없다면 visitor로 돌려보낸다.
  useEffect(() => {
    authService.onAuthChange((user) => {
      // console.log(user, "visitorList");
      // console.log("uid", user);
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/visitor");
      }
    });
  }, [history, authService]);

  ///사용자 아이디가 없다면 실행하지않고
  //있다면 실행한다.
  useEffect(() => {
    if (!userId) {
      return;
    }
    // props.cardRepository.syncCard(userId, (cards) => {
    //   setCards(cards);
    // });

    const stopSync = cardRepository.syncCard((cards) => {
      // console.log("sync");
      setCards(cards);
    });
    return () => stopSync();
  }, [cardRepository, userId]);
  // console.log("file>>>>", file);
  return (
    <>
      <div className="visitorList_container">
        <div className="visitorList_header">
          <div className="visitor_img_box">
            <div className="visitorList_context">소곤소곤</div>
            <img src={chatImg} alt="chatImg" className="chatImg" />
          </div>
          {/* <div className="visitorList_Header">
          <div className="visitorList_context">방명록</div> */}
          <div className="logoutBtn" onClick={onLogout}>
            logout
          </div>
        </div>
        <form className="visitorList_list_container" ref={formRef}>
          <div className="user_img_edit_container">
            <div className="user_img_container">
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
                !loading && <img src={file.fileURL} alt="phot" />
              )}
            </div>
            <div className="editBtn" onClick={onFileEdit}>
              edit
            </div>
          </div>
          <div className="user_editor_container">
            <div className="user_editor_name_title">
              <input className="user_name" placeholder="이름" ref={nameRef} />
              <input className="user_title" placeholder="제목" ref={titleRef} />
              {/* <select className="theme" ref={selectRef}>
                <option value="Green">초록색</option>
                <option value="Blue">파랑색</option>
              </select> */}
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
          <CardList cards={cards} cardDelete={cardDelete}></CardList>
          {/* <div className="user_name"></div>
          <div className="user_age"></div> */}
        </div>
      </div>
    </>
  );
};

export default VisitorList;
