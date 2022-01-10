import React, { useState } from "react";
import selfie2 from "../../images/me2.png";
import githubImg from "../../images/githubIcon.svg";
import velogImg from "../../images/velogImg.jpg";
import { useEffect } from "react";

const Read = ({ likeButton }) => {
  // console.log(likeButton, "<<<<<<<라이크버튼");
  const selfTitle = [
    { title: "””『출생』──┼", item: "1992年 12月 6日" },
    { title: "””『직업』──┼", item: "개발자♬" },
    { title: "””『폰번』──┼", item: "010-2213-7129☎" },
    { title: "””『별명』──┼ ", item: "땅주" },
    { title: "””『mbti』──┼ ", item: "ⓘⓝⓣⓟ" },
    {
      title: "””『좋아하는 것』──┼ ",
      item: "카페에서 코딩하기, 추리소설읽고 범인추리하기, 방 탈출하기, 맛있는거먹기, 멍 때리기",
    },
    {
      title: "””『싫어하는 것』──┼",
      item: "더운 날씨♨, 우울감, 배부를 때, 깻잎, 오이...!",
    },
    {
      title: "””『자기소개』──┼ ",
      // item: " 열정과 노력이 없으면 시체🌱 ",
    },
  ];

  let [count, setCount] = useState(0);

  const handleClick = (e) => {
    setCount((count = count + 1));
    e.target.classList.add(
      "heart_color",
      "animate__animated",
      "animate__bounce"
    );
    likeButton.saveLike(count);
  };

  const goGithub = (e) => {
    console.log(e.target.className);
    if (e.target.className === "selfieGithub") {
      window.open("https://github.com/ddangju");
    } else if (e.target.className === "selfievelogImg") {
      window.open("https://velog.io/@duswn38");
    }
  };

  useEffect(() => {
    ///변수 생성
    const stopSync = likeButton.syncLike((count) => {
      setCount(count, "count");
    });
    ///unmount한다. retunr과 동시에 stopSync()를 호출한다.
    return () => stopSync();
  }, [count, likeButton]);

  return (
    <div className="readContainer">
      <div className="selfie_container">
        <img src={selfie2} alt="selfie2" className="selfie2Img" />
        <div className="selfie_btn_container">
          <div className="heartContainer">
            <i className="fas fa-heart selfie_heart" onClick={handleClick}></i>
            <div className="heart_count">{count}</div>
          </div>
          <img
            src={githubImg}
            alt="githubImg"
            className="selfieGithub"
            onClick={goGithub}
          />
          <img
            src={velogImg}
            alt="velogImg"
            className="selfievelogImg"
            onClick={goGithub}
          />
        </div>
      </div>

      <div className="contextContainer">
        <p className="contextHeader">★ 김 연 주 (女)</p>
        <div className="titleContainer">
          {selfTitle.map((item, idx) => {
            return (
              <div className="title-header" key={idx}>
                <div className="context-title" key={item.id}>
                  {item.title}
                </div>
                <p className="context-context">{item.item}</p>
              </div>
            );
          })}
        </div>
        <div className="introduceContext">
          {/* <div> */}
          안녕하세요 프론트개발자 김연주입니다🤗 <br />이 웹은 windows98을
          모티브로하여 포트폴리오로 제작되었습니다. <br />
          현재 계속해서 리팩토링과 추가구현이 진행중입니다. <br />
          Skill : Html/css(Scss, animate-css), JavaScript(ES6),
          React(react-router-dom, function Component), Youtube API, googleAPI,
          githubAPI, facebookAPI <br />
          형상관리: git/github <br />
          배포: vercel <br />
          데이터베이스: firebase <br />
          문의 및 버그 제보는 duswn4338@gmail.com
          {/* </div> */}
          {/* <p className="text">
            개발자로 전향을 마음먹기 전, 서비스업에 근무하며 고객들의 원트를
          </p>
          <p className="text">
            이해하고 불편함을 해소하는것과 상품pr에 대하여 팀원들과 함께 고민
          </p>
          <p className="text">
            했습니다. 그렇게 자연스럽게 '시각적으로 재미있고 상상력에 자극을
          </p>
          <p className="text">
            주는 일을 하고싶다' 라는 생각을 가지게 되었습니다. 그 첫 시작이
          </p>
          <p className="text">
            "yeondows98"프로젝트입니다. 사람들에게 "나"에 대해 표현할 수 있는
          </p>
          <p className="text">
            제일 좋은 방법은 상상만으로만 생각해왔던 것을 기획하고 구현해보는
          </p>
          <p className="text">
            것이었습니다. "내가 할 수 있을까?" 이라는 의문을 계속 가지며 이 프로
          </p>
          <p className="text">
            젝트가 끝날때 쯤은 어제보다 더 성장한 저를 기대했습니다. 그리고 결과
          </p>
          <p className="text">
            적으로 "노력하면 무엇이든 가능하다!" 라는 확신을 가지며 자신감을
          </p>
          <p className="text">
            얻었습니다. 이 프로젝트를 시작으로 계속해서 "물음표"를 "느낌표"로
          </p>
          <p className="text">바꾸어가는 개발자가 되고싶습니다😄</p> */}
        </div>
      </div>
    </div>
  );
};

export default Read;
