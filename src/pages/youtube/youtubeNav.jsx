import React, { useRef } from "react";
import "../../styles/youtubeNav.scss";
import search from "../../images/search.png";
import logo from "../../images/logo.png";

const YoutubeNav = (props) => {
  let inputRef = useRef();

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
  return (
    <div className="navContainer_youtube">
      <div className="logoContainer">
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

      <p className="userName">{props.name}님, 안녕하세요!</p>
    </div>
  );
};

export default YoutubeNav;
