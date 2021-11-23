import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const YoutubeMain = (props) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=bts&key=AIzaSyBtSx52AF2YErFcpaadtOsl9YgE5EE-7l4&key=AIzaSyBtSx52AF2YErFcpaadtOsl9YgE5EE-7l4\n",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  let [name, setName] = useState();
  const history = useHistory();
  // const inputValue = history.location.inputValue;

  const inputValue = history.location.state;

  localStorage.setItem("id", JSON.stringify(inputValue));
  useEffect(() => {
    const saved = localStorage.getItem("id");
    if (saved !== null) {
      setName(saved);
    }
  }, [inputValue]);

  // if (saved !== null) {
  //   const parseTodo = JSON.parse(saved);
  //   name(parseTodo);
  // }

  return (
    <div>
      <h4>{name}님, 안녕하세요</h4>
    </div>
  );
};

export default YoutubeMain;
