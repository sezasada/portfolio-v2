import React from "react";
import ChatBot from "../../components/ChatBot/ChatBot";
import Navbar from "../../components/Navbar/Navbar";
import MobileNavbar from "../../components/Navbar/MobileNavbar";
import css from "./chatpage.module.css";

const ChatPage = () => {
  return (
    <div className={css.pageStyles}>
      <div className={css.mobileStyles}>
        <MobileNavbar />
      </div>
      <div className={css.pageWrapper}>
        <div className={css.navbarWrapper}>
          <div className={css.desktopStyles}>
            <Navbar />
          </div>
        </div>
        <div className={css.chatWrapper}>
          <ChatBot />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
