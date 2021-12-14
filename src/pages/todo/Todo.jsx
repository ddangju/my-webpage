import React, { useState, useRef } from "react";
import close from "../../images/close.png";
import minizewindow from "../../images/windowminimize.png";
import "../../styles/todo/todo.scss";
import line1 from "../../images/취소선2.png";
import deleteBtn from "../../images/삭제.png";
import checkBtn from "../../images/체크.png";
const Todo = () => {
  // let inputRef = useRef();
  let [text, setText] = useState("");
  let [list, setList] = useState([]);

  const pressEnter = (e) => {
    if (e.keyCode === 13) {
      clickSubmit(e);
    }
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    if (text !== "") {
      let test = [...list];
      test.push(text);
      setList(test);
      setText("");
    }
  };
  const handleCheck = (e) => {
    console.log(e.currentTarget.previousSibling.lastChild);
    const targetImg = e.currentTarget.previousSibling.lastChild;
    // e.currentTarget.parentElement.remove();
    targetImg.classList.add("show");
  };

  const handleDelete = (e) => {
    e.currentTarget.parentElement.remove();
  };
  return (
    <div>
      <div className="animate__animated animate__zoomIn todoContainer">
        <div className="todo-main-canvas">
          <div className="todo-canvas-top">
            <div className="todo-canvas-top-icons">
              <img
                className="intro-Minimizedwindow-icon"
                src={minizewindow}
                width="15"
                alt="사진"
              ></img>
              <img
                className="intro-close-icon"
                src={close}
                width="25"
                alt="사진"
              />
            </div>
          </div>
          <div className="todo_list_Container">
            <div className="inputTitle">오늘 할 일!</div>
            <div className="formContainer">
              <input
                className="inputContainer"
                placeholder="무엇을?"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyUp={pressEnter}
              />
              <button
                className="listSubmit"
                type="submit"
                onClick={clickSubmit}
              >
                buttons
              </button>
            </div>
            <div className="listContainer">
              {list.map((item, idx) => {
                return (
                  <div className="list-list" key={idx}>
                    <div className="list-item">
                      {item}
                      <div className="imgContainer">
                        <img className="lineImg" src={line1} alt="이미지" />
                      </div>
                    </div>
                    <button className="deleteBtn" onClick={handleCheck}>
                      <img className="checkImg" src={checkBtn} alt="체크버튼" />
                    </button>
                    <button className="deleteBtn" onClick={handleDelete}>
                      <img
                        className="checkImg"
                        src={deleteBtn}
                        alt="체크버튼"
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
