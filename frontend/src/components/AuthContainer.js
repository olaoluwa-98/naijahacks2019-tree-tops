import React from "react";
import Logo from "assets/img/logo.svg";

export default function AuthContainer({ children }) {
  return (
    <div className="auth-container">
      <div className="form-container d-flex flex-column">
        <div>
          <img src={Logo} width={150} />
          {children}
        </div>
      </div>
      <div className="banner d-flex flex-column justify-content-center align-items-center">
        <h1>
          Easily Monitor your progess as you aim for the best in your college
          education.
        </h1>
        <p>
          TreeTops provide university students with some thing something
          something TreeTops provide university students with some thing
          something something.
        </p>
      </div>
    </div>
  );
}
