import React, { useCallback, useEffect, useState } from "react";
import google from "../../images/google.png";
import { useHistory } from "react-router";

const VisitorLogin = (props) => {
  const history = useHistory();
  const [loginInfo, setLoginInfo] = useState(null);
  // console.log(props.authService, "login");

  const goVisitor = useCallback(
    (item) => {
      console.log(item);
      history.push({
        pathname: "/visitor/list",
        state: { id: item },
      });
    },
    [history]
  );

  const handleLogin = (e) => {
    props.authService.login(e.currentTarget.textContent, setLoginInfo);
  };

  //loginInfo값이 바뀌면 goVIsitor에 인자로 값을 넣어 실행한다.
  useEffect(() => {
    if (loginInfo) {
      console.log(loginInfo, "1");
      goVisitor(loginInfo);
    }
  }, [goVisitor, loginInfo]);

  ///재로그인
  // // loginInfo가 있다면 goVisitor로 이동한다.(uid를 가지고 )
  useEffect(() => {
    props.authService.onAuthChange(
      (user) => {
        console.log(user);
        user && goVisitor(user.uid);
        // loginInfo && goVisitor(console.log("Gd"));
      }
      //사용자가 바뀌면 실행하는 함수
    );
  });

  return (
    <div className="visitor_login_container">
      <p onClick={goVisitor}>바로가기</p>
      {/* <img
        src={google}
        alt="google"
        className="googleImg"
        onClick={handleLogin}
      /> */}
      <p onClick={handleLogin}>Google</p>
      <p onClick={handleLogin}>Github</p>
      <button onClick={() => console.log(loginInfo)}>버튼</button>
    </div>
  );
};
export default VisitorLogin;
