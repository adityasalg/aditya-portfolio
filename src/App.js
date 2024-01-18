import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Greet from "./components/Greet/Greet";
import Feedback from "./components/Feedback/Feedback";
import Popup from "./components/Popup/Popup";
import UserContext from "./utils/UserContext.js";

function App() {
  const [name, setName] = useState("World");

  useEffect(() => {
    const localName = localStorage.getItem("name");
    if (localName && localName.length > 0) {
      setName(localName);
    } else {
      setName('');
    }
  }, []);

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const feedbackRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const onNavBarSelect = (section) => {
    if (section === "ABOUT") {
      scrollToSection(aboutRef);
    } else if (section === "SKILLS") {
      scrollToSection(skillsRef);
    } else if (section === "EXPERIENCE") {
      scrollToSection(experienceRef);
    } else if (section === "FEEDBACK") {
      scrollToSection(feedbackRef);
    }
  };

  const onSaveName = (name) => {
    setName(name);
    localStorage.setItem("name", name);
  };

  return (
    <>
      <UserContext.Provider value={{ userName: name }}>
        <div className="App">
          {!(name.length > 0) && <Popup onSaveName={onSaveName} />}
          <Navbar onClick={onNavBarSelect} />
          <Greet onFeedbackBtnClick={onNavBarSelect} />
          <About onClick={onNavBarSelect} ref={aboutRef} />
          <Skills ref={skillsRef} />
          <Experience ref={experienceRef} />
          <Feedback ref={feedbackRef} />
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
