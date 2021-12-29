import React, { useCallback, useEffect, useState } from "react";
import google from "../../images/google.svg";
import { useHistory } from "react-router";
import computer from "../../images/컴퓨터.gif";
import githubImg from "../../images/githubIcon.svg";
import facebookImg from "../../images/facebook.svg";

const VisitorLogin = (props) => {
  const history = useHistory();
  const [loginInfo] = useState(null);
  // console.log(props.authService, "login");

  const goVisitor = useCallback(
    (item) => {
      // console.log("govisitor", item);
      history.push({
        pathname: "/visitor/list",
        state: { id: item },
      });
    },
    [history]
  );

  const handleLogin = (e) => {
    props.authService.login(e.target.className, goVisitor);
  };

  //loginInfo값이 바뀌면 goVIsitor에 인자로 값을 넣어 실행한다.
  // useEffect(() => {
  //   console.log(loginInfo, "2");

  //   if (loginInfo) {
  //     goVisitor(loginInfo);
  //   }
  // }, [goVisitor, loginInfo]);

  // 만약에 loginInfo가 있다면 리스트로 이동한다.(uid를 가지고 )
  useEffect(() => {
    // console.log(loginInfo, "4");
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
        <div className="google_container">
          <img
            src={google}
            alt="google"
            className="Google"
            onClick={handleLogin}
          />
          {/* <p className="googleLogin">Google 로그인</p> */}
        </div>
        <div className="github_container">
          <img
            src={githubImg}
            alt="githubImg"
            className="Github"
            onClick={handleLogin}
          />
          {/* <p className="githubLogin">github 로그인</p> */}
        </div>
        <div className="facebook_container">
          <img
            src={facebookImg}
            alt="facebookImg"
            className="Facebook"
            onClick={handleLogin}
          />
          {/* <p className="facebookLogin">Facebook 로그인</p> */}
        </div>
      </div>
      {/* <button onClick={() => console.log(loginInfo)}>버튼</button> */}
    </div>
  );
};
export default VisitorLogin;
