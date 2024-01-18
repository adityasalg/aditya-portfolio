import React, { useContext } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Greet.css";
import UserContext from "../../utils/UserContext";

const Greet = (props) => {
  const userContext = useContext(UserContext);
  const [typeEffect] = useTypewriter({
    words: ["a Full Stack Developer 👾", "a React Dev ⚛️", "a Traveller ✈️"],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 70,
  });

  return (
    <div className="greet-container">
      <div className="greet-visitor">
        <h1 className="visitor">[ Hello {userContext['userName']}! ]</h1>
      </div>
      <div>
        <h1 className="name"><span className="iam">I am </span>Aditya Salgaonkar</h1>
      </div>
      <div className="type-container">
        <h3>
          <span className="type-effect">{typeEffect}</span>
          <Cursor cursorColor="#fff" cursorBlinking={false} />
        </h3>
      </div>
      <div className="button-container">
        <button
          className="feedback-btn"
          onClick={() => props.onFeedbackBtnClick("FEEDBACK")}
        >
          Leave a message
        </button>
      </div>
    </div>
  );
};

export default Greet;
