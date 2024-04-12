import React, { useState } from "react";
import Client from "../components/Client";
import Editor from "../components/Editor";

const EditorPage = () => {
  const [clients, setClients] = useState([
    { socketId: 1, userName: "Shivam" },
    { socketId: 2, userName: "Cristiano" },
    { socketId: 3, userName: "Goku" },
  ]);

  return (
    <div className="editorpage-wrapper">
      <div className="sidebar">
        <div className="sidebar-inner">
          <div className="logo-container">
            <img src="/refactoring.png" className="img-logo" alt="logo" />
          </div>
          <h3>Connected Users: </h3>
          <div className="client-list">
            {clients.map((client) => (
              <Client userName={client.userName} key={client.socketId} />
            ))}
          </div>
        </div>
        <button className="btn btn-copy">Copy Room Id</button>
        <button className="btn btn-leave">Leave</button>
      </div>
      <div className="editor-wrapper">
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
