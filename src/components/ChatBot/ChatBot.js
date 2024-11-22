import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { ReactComponent as SendLight } from "../../assets/icons/send-light.svg";
import { ReactComponent as SendDark } from "../../assets/icons/send-dark.svg";
import css from "./ChatBot.module.css";

const ChatBot = () => {
  const [inputValue, setInputValue] = useState("");
  const [placeholder, setPlaceholder] = useState("Message ChatGPT");
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5228/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputValue }),
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      setResponse(data.response);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={css.containerStyles}>
      <div className={css.inputStyles}>
        {response && <div className={css.responseStyles}>{response}</div>}
        {error && <div className={css.errorStyles}>{error}</div>}
      </div>
      {!response && (
        <div className={css.headerStyles}>
          <FormattedMessage id="ChatBot.title" />
        </div>
      )}
      <div
        className={`${css.inputStyles} ${
          response ? css.inputStylesAtBottom : ""
        }`}
      >
        <div className={css.inputWrapper}>
          <input
            type="text"
            placeholder={placeholder}
            className={css.textBoxStyles}
            value={inputValue}
            onChange={handleInputChange}
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
