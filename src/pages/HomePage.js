import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function createNewRoom(e) {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
    toast.success("Created a new room");
  }

  function joinRoom(e) {
    if (!roomId || !userName) {
      toast.error("Room Id and username are required");
      return;
    }

    navigate(`/editor/${roomId}`, {
      state: {
        userName,
      },
    });
  }

  function handleInputEnter(e) {
    if (e.code === "Enter") {
      joinRoom();
    }
  }

  return (
    <div className="homepage-wrapper">
      <div className="form-wrapper">
        <img src="/refactoring.png" className="img-logo" alt="logo"/>
        <h4 className="label">Paste invitation Room ID</h4>
        <div className="input-wrapper">
          <input
            type="text"
            className="input"
            placeholder="Room ID"
            value={roomId}
            onChange={(e) => {
              setRoomId(e.target.value);
            }}
            onKeyUp={handleInputEnter}
            ref={inputRef}
          ></input>
          <input
            type="text"
            className="input"
            placeholder="Username"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            onKeyUp={handleInputEnter}
          ></input>
          <button className="btn btn-join" onClick={joinRoom}>
            Join
          </button>
          <span className="create-info">
            If you don't have an invite then create a &nbsp;
            <a href="" className="create-new-room" onClick={createNewRoom}>
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h5>Share with your friends</h5>
      </footer>
    </div>
  );
};

export default HomePage;
