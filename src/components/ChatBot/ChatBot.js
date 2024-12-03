import React, { useState, useEffect, useRef } from "react";
import { FormattedMessage } from "react-intl";
import { sendMessageToChatBot } from "../../api/chatApi";
import { ReactComponent as SendLight } from "../../assets/icons/send-light.svg";
import { ReactComponent as SendDark } from "../../assets/icons/send-dark.svg";
import { ReactComponent as Bot } from "../../assets/icons/bot.svg";
import css from "./ChatBot.module.css";

const ChatBot = () => {
  const [inputValue, setInputValue] = useState("");
  const [placeholder, setPlaceholder] = useState("Message ChatGPT");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [partialMessage, setPartialMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, partialMessage]);

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

  const simulateTyping = async (response) => {
    let partialResponse = "";
    const typingSpeed = response.length > 50 ? 10 : 20;

    for (const char of response) {
      partialResponse += char;
      setPartialMessage(partialResponse);
      await new Promise((resolve) => setTimeout(resolve, typingSpeed));
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
    setPartialMessage("");

    try {
      const response = await sendMessageToChatBot(inputValue);
      await simulateTyping(response);
      setPartialMessage("");

      const botMessage = { role: "bot", content: response };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
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
          {partialMessage && (
            <div className={css.botMessage}>
              <div className={css.botMessageWrapper}>
                <Bot className={css.botIconStyles} />
                <div className={css.partialMessage}>
                  {partialMessage}
                  <span className={css.blinkingCursor}>|</span>
                </div>
              </div>
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
