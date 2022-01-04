import React, { useCallback, useEffect, useState } from "react";
import google from "../../images/google.svg";
import { useHistory } from "react-router";
import computer from "../../images/컴퓨터.gif";
import githubImg from "../../images/githubIcon.svg";
import facebookImg from "../../images/facebook.svg";
import userImg from "../../images/user.svg";

const VisitorLogin = (props) => {
  const handleLogin = (e) => {
    console.log("로그인실행");
    props.authService.login(e.target.className, goVisitor);
  };

  const authLogin = () => {
    props.authService.nonMember();
  };

  const loginData = [
    { name: "google", img: google, className: "Google", goLogin: handleLogin },
    {
      name: "github",
      img: githubImg,
      className: "Github",
      goLogin: handleLogin,
    },
    {
      name: "facebook",
      img: facebookImg,
      className: "Facebook",
      goLogin: handleLogin,
    },
    {
      name: "nonMember",
      img: userImg,
      className: "nonMember",
      goLogin: authLogin,
    },
  ];
  const history = useHistory();
  const [loginInfo] = useState(null);
  // console.log(props.authService, "login");

  //loginInfo값이 바뀌면 goVIsitor에 인자로 값을 넣어 실행한다.
  // useEffect(() => {
  //   console.log(loginInfo, "2");

  //   if (loginInfo) {
  //     goVisitor(loginInfo);
  //   }
  // }, [goVisitor, loginInfo]);

  // 만약에 loginInfo가 있다면 리스트로 이동한다.(uid를 가지고 )
  const goVisitor = useCallback(
    (item) => {
      history.push({
        pathname: "/visitor/list",
        state: { id: item },
      });
    },
    [history]
  );

  ////다른 menu를 클릭하고 돌아왔을 때도 로그인 유지하기 위해 useEffect실행
  ///이 페이지가 마운트가 될때마다 onAuthChange함수를 실행하여 콜백함수를 인자로 보낸다.
  /////govisitor가 되면서 실행

  useEffect(() => {
    console.log("onAuthChange<<<<<<<");
    props.authService.onAuthChange(
      (user) => {
        user && goVisitor(user.uid);
      }
      //사용자가 바뀌면 실행하는 함수
    );
  }, [goVisitor, props.authService, loginInfo]);

  return (
    <div className="visitor_login_container">
      <img src={computer} alt="computer" className="computerImg" />
      <div className="visitor_header">발자취 남기기</div>
      <div className="visitor_btn_container">
        {loginData.map((item) => {
          return (
            <div className={`${item.name}_container`} key={item.name}>
              <img
                src={item.img}
                alt={`${item.img}`}
                className={`${item.className}`}
                onClick={item.goLogin}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default VisitorLogin;
