import React, { useEffect, useRef, useState, memo } from "react";
import "../../styles/youtube/youtubeNav.scss";
import { useHistory, Link } from "react-router-dom";
import search from "../../images/search.png";
import logo from "../../images/logo.png";

const YoutubeNav = memo((props) => {
  console.log("nav");
  console.log(props.user);
  let inputRef = useRef();
  const history = useHistory();
  const [name, setName] = useState();

  const handleSearch = (e) => {
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
    // console.log("gomain");
    history.push({
      pathname: "/youtubeMain",
      state: { inputValue: props.user },
    });
  };

  // const inputValue = props.user;

  // localStorage.setItem("id", JSON.stringify(inputValue));
  // useEffect(() => {
  //   console.log("4");
  //   const saved = localStorage.getItem("id");
  //   if (saved !== null) {
  //     setName(saved);
  //   }
  //   // console.log(name, "name");
  //   // if (saved === "") {
  //   //   setName("사용자");
  //   // }
  // }, [inputValue]);
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
        <i className="fas fa-search searchImg2" onClick={handleClick}></i>
        {/* <img
          className="searchImg"
          src={search}
          alt="검색"
          
        /> */}
      </div>

      <p className="userName">{props.user}님, 안녕하세요!😀</p>
      <Link to="/" className="homeLink">
        <i className="fas fa-home homeIcon"></i>
      </Link>
    </div>
  );
});

export default YoutubeNav;
