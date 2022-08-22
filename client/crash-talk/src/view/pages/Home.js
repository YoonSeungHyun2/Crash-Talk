import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const onNameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const onRoomChangeHandler = (event) => {
    setRoom(event.target.value);
  };

  const onClickLinkHandler = (event) => {
    if (!name || !room) event.preventDefault();
  };

  return (
    <div className={"classes.joinOuterContainer"}>
      <div className={"classes.joinInnerContainer"}>
        <h1 className={"classes.heading"}>Join</h1>
        <div>
          <input
            placeholder={""}
            className={"classes.joinInput"}
            type={"text"}
            onChange={onNameChangeHandler}
          />
        </div>
        <div>
          <input
            placeholder={""}
            className={`${"classes.joinInput"} ${"classes.mt20"}`}
            type={"text"}
            onChange={onRoomChangeHandler}
          />
        </div>
        <Link onClick={onClickLinkHandler} to={`/chat/${name}`}>
          <button className={`${"classes.button"} ${"classes.mt20"}`}>
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
