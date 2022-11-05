// in config.js
import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "./DogPicture.jsx";

const botName = "매끄쪼";

const config = {
  initialMessages: [createChatBotMessage(`안녕 난 ${botName}야`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: props => <DogPicture {...props} />,
    },
  ],
};

export default config;
