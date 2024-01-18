import React, { useContext, useState } from "react";
import "./MessageBox.css";
import { storeMessage } from "../../utils/http";
import UserContext from "../../utils/UserContext";

const MessageBox = () => {
  const userContext = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [showError, setShowError] = useState(false);

  const onMessageType = (e) => {
    if (e?.target?.value && e.target.value.trim().length) {
      setShowError(false);
    }
    setMessage(e.target.value);
  };

  const onSendClick = async () => {
    if (message.trim().length > 0) {
      await storeMessage(message, userContext['userName']);
      setMessage("");
      setShowError(false);
    } else {
      setShowError(true);
    }
  };
  return (
    <div className="message-input-container">
      <div className="message-box">
        <input
          className="message-input"
          placeholder="Write a message"
          value={message}
          onChange={onMessageType}
        />
        <button className="send-btn" onClick={onSendClick}>
          <img
            className="send-logo"
            src={require(`../../assets/logo/send.png`)}
          />
        </button>
      </div>
      <div className="warning-container">
        <h4
          className="warning-text"
          style={{ display: showError ? "" : "none" }}
        >
          Atleast say hi!
        </h4>
      </div>
    </div>
  );
};

export default MessageBox;
