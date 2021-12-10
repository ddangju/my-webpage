import React, { useEffect, useRef, useState } from "react";
import "../../styles/youtube/youtubeNav.scss";
import { useHistory } from "react-router-dom";
import search from "../../images/search.png";
import logo from "../../images/logo.png";

const YoutubeNav = (props) => {
  let inputRef = useRef();
  const history = useHistory();
  const [name, setName] = useState();

  const handleSearch = (e) => {
    // console.log(e.currentTarget.value);
    // props.search(e.currentTarget.value);
    const value = inputRef.current.value;
    props.search(value);
  };

  const handleClick = () => {
    handleSearch();
  };
  const handlePress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const goMain = () => {
    history.push({
      pathname: "/youtubeMain",
      state: { inputValue: props.user },
    });
  };

  const inputValue = props.user;

  localStorage.setItem("id", JSON.stringify(inputValue));
  useEffect(() => {
    const saved = localStorage.getItem("id");
    console.log(saved);
    if (saved !== null) {
      setName(saved);
    }
    if (saved === "") {
      setName("사용자");
    }
  }, [inputValue]);
  return (
    <div className="navContainer_youtube">
      <div className="logoContainer" onClick={goMain}>
        <img src={logo} alt="logo"></img>
        <p className="logo_youtube">YouTube</p>
      </div>
      <div className="searchContainer">
        <input
          ref={inputRef}
          placeholder="search"
          className="search"
          onKeyPress={handlePress}
        />
        <img
          className="searchImg"
          src={search}
          alt="검색"
          onClick={handleClick}
        />
      </div>

      <p className="userName">{name}님, 안녕하세요!</p>
    </div>
  );
};

export default YoutubeNav;
