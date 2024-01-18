import React, { forwardRef } from "react";
import "./Feedback.css";
import MessageBox from "../MessageBox/MessageBox";

const Feedback = ({ props }, ref) => {
  return (
    <div ref={ref} className="feedback-container">
      <div className="footer-heading-container">
        <h1 className="footer-heading">Leave a mesage</h1>
      </div>
      <div className="footer-message-container">
        <p className="footer-message">I am always excited to work on some awesome projects, great ideas, message me and let's discuss.</p>
      </div>
      <div>
        <MessageBox />
      </div>
      <div className="footer-info-container">
        <div className="footer-info-section">
          <div className="copyright-container">
            <h4 className="copyright-text">
              No <span>&#169;</span> copyright issues.
            </h4>
            <p className="copyright-info">
              Feel free to copy. If you need any help, ping me!
            </p>
          </div>
        </div>
        <div className="footer-info-section">
          <h2 className="author-name">Aditya Salgaonkar</h2>
          <h4 className="made-with-text">Made with ♥️</h4>
        </div>
        <div className="footer-info-section">
          <h4 className="connect-with-text">Connect with me on:</h4>
          <div className="social-media-container">
            <a
              href="https://www.linkedin.com/in/aditya-salgaonkar-7876621a5/"
              target="_blank"
            >
              <img
                className="social-logo"
                src={require(`../../assets/logo/linkedin.png`)}
              />
            </a>
            <a href="mailto: adityasalg97@gmail.com" target="_blank">
              <img
                className="social-logo"
                src={require(`../../assets/logo/gmail.png`)}
              />
            </a>
            <a href="https://www.instagram.com/ad1_salgaonkar/" target="_blank">
              <img
                className="social-logo"
                src={require(`../../assets/logo/instagram.png`)}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-image-container">
        <img
          className="footer-img"
          src={require(`../../assets/images/footer.png`)}
        />
      </div>
    </div>
  );
};

export default forwardRef(Feedback);
