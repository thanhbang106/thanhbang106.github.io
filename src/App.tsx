import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import EmailForm from "./components/EmailForm/EmailForm";

import {
  SignInButton,
  Container,
  Imaab,
  Slogan,
} from "./components/EmailForm/EmailForm.styled";
function App() {
  return (
    <div
      style={{
        backgroundImage: `url("https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg")`,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ margin: "30px" }}>
          <Imaab src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" />
        </div>

        <div
          style={{
            justifyContent: "flex-end",
            flexDirection: "row-reverse",
            display: "flex",
            margin: "30px",
          }}
        >
          <SignInButton>Sign in</SignInButton>
          <div
            style={{
              border: "solid 1px red",
              background: "#333333",
              justifySelf: "flex-start",
              height: "fit-content",
            }}
          >
            <img
              style={{ width: "20px", height: "20px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/2048px-Globe_icon.svg.png"
            />
            <select
              style={{
                width: "148px",
                height: "32px",
                color: "white",
                background: "#333333",
                textAlign: "center",
              }}
            >
              <option value="0">EngLish</option>
              <option value="1">Tieng viet</option>
            </select>
          </div>
        </div>
      </div>
      <Container>
        <Header />
        <Slogan>Watch anywhere. Cancel anytime.</Slogan>
        <Slogan>
          Ready to watch? Enter your email to create or restart your membership.
        </Slogan>
        <EmailForm />
      </Container>
    </div>
  );
}

export default App;
