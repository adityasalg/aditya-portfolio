import React, { useEffect, useState } from "react";
import "./Popup.css";

const Popup = (props) => {
  const [showMinError, setShowMinError] = useState(false);
  const [showMaxError, setShowMaxError] = useState(false);
  const [name, setName] = useState("");

  const onNameType = (e) => {
    console.log(e.target.value);
    if (e.target.value.trim().length < 21) {
      setShowMaxError(false);
      setShowMinError(false);
      setName(e.target.value);
    } else if (e?.target?.value && e.target.value.trim().length > 20) {
      setShowMaxError(true);
    }
  };

  const onEnterClick = () => {
    if (name.trim().length > 0) {
      props.onSaveName(name);
    } else {
      setShowMinError(false);
    }
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <h2>May I have your name, please?</h2>
        <input
          className="name-input"
          placeholder="Type here..."
          onChange={onNameType}
          value={name}
        />
        <div className="warning-container">
          <h4
            className="name-warning-text"
            style={{ display: showMinError || showMaxError ? "" : "none" }}
          >
            {showMinError
              ? "Name is required"
              : "Maximum allowed character is 20"}
          </h4>
        </div>
        <div className="enter-button-container">
          <button className="enter-button" onClick={onEnterClick}>
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
