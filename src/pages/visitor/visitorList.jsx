import React, { useEffect } from "react";
import { useHistory } from "react-router";

const VisitorList = (props) => {
  // console.log(props.authService.onLogout);
  const history = useHistory();

  const onLogout = () => {
    props.authService.logout();
  };

  useEffect(() => {
    props.authService.onAuthChange((user) => {
      if (!user) {
        history.push("/visitor");
      }
    });
  });
  return (
    <>
      <div className="header">
        <div onClick={onLogout}>logout</div>
      </div>
    </>
  );
};

export default VisitorList;
