import logo from "./logo.svg";
import "./App.css";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./compo/config";
import MessageParser from "./compo/MessageParser.jsx";
import ActionProvider from "./compo/ActionProvider.jsx";
import { useState } from "react";
//buttun
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const App = () => {
  const [tog, setTog] = useState(0);

  const 숨김 = () => {
    console.log("버튼눌림");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Chatbot
          config={config}
          headerText="나를위한 심심이"
          placeholderText="이 아이는 말하는것을 싫어합니다."
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />

        <div className="static flex w-[100%] justify-end">
          <AwesomeButton
            type="secondary"
            onPress={숨김}
            className="absolute bottom-5 right-5"
          >
            chatboot
          </AwesomeButton>
        </div>
      </header>
    </div>
  );
};

export default App;
