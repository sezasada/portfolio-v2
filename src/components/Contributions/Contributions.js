import React from "react";
import { FormattedMessage } from "react-intl";
import fieldnotesVideo from "../../assets/videos/fieldnotes.mp4";
import homepageVideo from "../../assets/videos/homepage.mp4";
import listingVideo from "../../assets/videos/listingpage.mp4";
import marketWatcherVideo from "../../assets/videos/marketWatchervideo.mp4";
import Carousel from "../../design/Carousel/Carousel";
import chatbotImage from "../../assets/images/contribution-images/chatbot-image.png";
import farmworksImage from "../../assets/images/contribution-images/farmworks.png";
import confidentialImage from "../../assets/images/contribution-images/confidential.png";

import css from "./Contributions.module.css";

const Contributions = () => {
  const contributions = [
    {
      id: "Contributions.scheels",
      image: confidentialImage,
      title: "Contributions.scheelsTitle",
    },
    {
      id: "Contributions.fieldnotes",
      video: fieldnotesVideo,
      link: "https://landtrust.com/fieldnotes",
      title: "Contributions.fieldnotesTitle",
    },
    {
      id: "Contributions.homepage",
      video: homepageVideo,
      link: "https://landtrust.com",
      title: "Contributions.homepageTitle",
    },
    {
      id: "Contributions.listingPage",
      video: listingVideo,
      link: "https://landtrust.com/l/sheehy-ranch/62156d20-7762-48d2-aa67-e0f89a7a3552",
      title: "Contributions.listingPageRedesignTitle",
    },
    {
      id: "Contributions.chatbot",
      image: chatbotImage,
      title: "Contributions.chatbotTitle",
      link: "https://www.sebastienzasada.com/chatbot",
    },
    {
      id: "Contributions.marketWatcher",
      video: marketWatcherVideo,
      title: "Contributions.marketWatcherTitle",
      code: "https://github.com/sezasada/Solo",
    },
    {
      id: "Contributions.farmWorks",
      image: farmworksImage,
      title: "Contributions.farmWorksTitle",
      code: "https://github.com/sezasada/task_portal",
    },
  ];

  return (
    <div className={css.containerStyles}>
      <div className={css.wrapperStyles}>
        <div className={css.bodyStyles}>
          <div className={css.titleWrapper}>
            <div className={css.titleStyles}>
              <FormattedMessage id="Contributions.title" />
            </div>
          </div>

          <div className={css.subtitleStyles}>
            <FormattedMessage id="Contributions.subtitle" />
          </div>
        </div>
        <hr className={css.divider} />
        <div className={css.carouselContainer}>
          <div className={css.carouselStyles}>
            <Carousel items={contributions} id="contribution-carousel" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributions;
