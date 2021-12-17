import React from "react";
import google from "../../images/google.png";
import { useHistory } from "react-router";

const VisitorLogin = (props) => {
  console.log(props.authService.login, "login");
  const history = useHistory();
  const goVisitor = () => {
    history.push("/visitor/list");
  };

  const handleLogin = (e) => {
    console.log(e.currentTarget.textContent);
    props.authService.login(e.currentTarget.textContent);
  };

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
    </div>
  );
};

export default VisitorLogin;
