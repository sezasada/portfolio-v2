import React, { useState, useEffect, useRef } from "react";
import { FormattedMessage } from "react-intl";
import { sendMessageToChatBot } from "../../api/chatApi";
import { ReactComponent as SendLight } from "../../assets/icons/send-light.svg";
import { ReactComponent as SendDark } from "../../assets/icons/send-dark.svg";
import { ReactComponent as Spinner } from "../../assets/icons/spinner.svg";
import { ReactComponent as Bot } from "../../assets/icons/bot.svg";
import css from "./ChatBot.module.css";

const ChatBot = () => {
  const [inputValue, setInputValue] = useState("");
  const [placeholder, setPlaceholder] = useState("Message ChatGPT");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleInputFocus = () => {
    setPlaceholder("");
  };

  const handleInputBlur = () => {
    if (!inputValue) {
      setPlaceholder("Message ChatGPT");
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) {
      setError("Message cannot be empty.");
      return;
    }

    const userMessage = { role: "user", content: inputValue };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue("");
    setPlaceholder("Message ChatGPT");
    setIsLoading(true);
    setError("");

    try {
      const response = await sendMessageToChatBot(inputValue);
      const botResponse = { role: "bot", content: response };

      setMessages((prevMessages) => [...prevMessages, botResponse]);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !isLoading) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div
      className={`${css.containerStyles} ${
        messages.length > 0 ? css.containerStylesAtTop : ""
      }`}
    >
      {messages.length > 0 && (
        <div className={css.messagesWrapper}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={
                message.role === "user" ? css.userMessage : css.botMessage
              }
            >
              {message.role === "bot" && (
                <div className={css.botMessageWrapper}>
                  <Bot className={css.botIconStyles} />
                  <div>{message.content}</div>
                </div>
              )}
              {message.role === "user" && <div>{message.content}</div>}
            </div>
          ))}
          {isLoading && (
            <div className={css.botMessage}>
              <Spinner className={css.spinnerStyles} />
            </div>
          )}
          <div ref={messagesEndRef}></div>
          {error && <div className={css.errorStyles}>{error}</div>}
        </div>
      )}
      {messages.length === 0 && (
        <div className={css.headerStyles}>
          <FormattedMessage id="ChatBot.title" />
        </div>
      )}
      <div
        className={`${css.inputStyles} ${
          !messages.length === 0 ? css.inputStylesAtBottom : ""
        }`}
      >
        <div className={css.inputWrapper}>
          <input
            type="text"
            placeholder={placeholder}
            className={css.textBoxStyles}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            disabled={isLoading}
          />
          <div
            onClick={!isLoading ? handleSendMessage : null}
            className={css.iconWrapper}
          >
            {isLoading ? (
              <SendLight className={css.iconStyles} />
            ) : inputValue ? (
              <SendLight className={css.iconStyles} />
            ) : (
              <SendDark className={css.iconStyles} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
