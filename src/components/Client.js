import React from "react";
import Avatar from "react-avatar";

function Client({userName }) {
  return (
    <div className="client">
      <Avatar name={userName} size={50} round="50%" />
      <span className="userName">{userName}</span>
    </div>
  );
}

export default Client;
