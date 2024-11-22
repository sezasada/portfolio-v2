import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

import css from "./ChatBot.module.css";

const ChatBot = () => {
  const [inputValue, setInputValue] = useState("");
  const [placeholder, setPlaceholder] = useState("Message ChatGPT");

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

  return (
    <div className={css.containerStyles}>
      <div className={css.wrapperStyles}>
        <div className={css.headerStyles}>
          <FormattedMessage id="ChatBot.title" />
        </div>
        <div className={css.inputStyles}>
          <input
            type="text"
            placeholder={placeholder}
            className={css.textBoxStyles}
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
