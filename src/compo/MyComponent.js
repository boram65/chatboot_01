import config from "./config";
import MessageParser from "./Messageparser.jsx";
import ActionProvider from "./ActionProvider.jsx";

const MyComponent = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};
