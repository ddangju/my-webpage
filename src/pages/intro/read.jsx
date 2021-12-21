import React, { useState } from "react";
import selfie2 from "../../images/me2.jpg";
import githubImg from "../../images/githubIcon.svg";
import velogImg from "../../images/velogImg.jpg";

const Read = () => {
  let [count, setCount] = useState(0);

  const handleClick = (e) => {
    setCount((count = count + 1));
    e.target.classList.add(
      "heart_color",
      "animate__animated",
      "animate__bounce"
    );
  };

  const goGithub = (e) => {
    console.log(e.target.className);
    if (e.target.className === "selfieGithub") {
      window.open("https://github.com/ddangju");
    } else if (e.target.className === "selfievelogImg") {
      window.open("https://velog.io/@duswn38");
    }
  };
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

      <div className="ContextContainer">
        <p className="contextHeader">★ 김 연 주 (女)</p>
        <div className="birthContainer">
          <p className="birth">””『출생』──┼ </p>
          <p>1992年 12月 6日</p>
        </div>
        <div className="ageContainer">
          <p className="age">””『나이』──┼ </p>
          <p>30</p>
        </div>
        <div className="jobContainer">
          <p className="job">””『직업』──┼ </p>
          <p>개발자♬</p>
        </div>
        <div className="phoneContainer">
          <p className="phone">””『폰번』──┼ </p>
          <p>010-2213-7129☎</p>
        </div>
        <div className="nickNameContainer">
          <p className="nickName">””『별명』──┼ </p>
          <p>땅주™</p>
        </div>
        <div className="mbtiContainer">
          <p className="mbti">””『mbti』──┼ </p>
          <p>ⓘⓝⓣⓟ★</p>
        </div>
        <p className="favorite">””『좋아하는 것』──┼ </p>
        <p className="text2">
          카페에서 코딩하기, 추리소설읽고 범인추리하기, 방 탈출하기, 맛있는거
          먹기, 멍 때리기
        </p>
        <p className="dislike">””『싫어하는 것』──┼ </p>
        <p className="text2">더운 날씨♨, 우울감, 배부를 때, 깻잎, 오이...!</p>
        <p className="introduce">””『자기소개』──┼ </p>
        <p className="motto">"열정과 노력이 없으면 시체🌱"</p>
        <div className="introduceContext">
          <p className="text">
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
          <p className="text">바꾸어가는 개발자가 되고싶습니다😄</p>
        </div>
      </div>
    </div>
  );
};

export default Read;
