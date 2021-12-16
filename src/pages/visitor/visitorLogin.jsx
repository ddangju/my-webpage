import React from "react";
import google from "../../images/google.png";
import { useHistory } from "react-router";

const VisitorLogin = () => {
  const history = useHistory();
  const goVisitor = () => {
    history.push("/visitor/list");
  };

  const handleLogin = () => {};

  return (
    <div className="visitor_login_container">
      <p onClick={goVisitor}>바로가기</p>
      <img
        src={google}
        alt="google"
        className="googleImg"
        onClick={handleLogin}
      />
    </div>
  );
};

export default VisitorLogin;
