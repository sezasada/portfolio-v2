import React from "react";
import { FormattedMessage } from "react-intl";
import fieldnotesVideo from "../../assets/videos/fieldnotes.mp4";
import homepageVideo from "../../assets/videos/homepage.mp4";
import listingVideo from "../../assets/videos/listingpage.mp4";
import marketWatcherVideo from "../../assets/videos/marketWatchervideo.mp4";
import Carousel from "../../design/Carousel/Carousel";
import cryptoImage from "../../assets/images/contribution-images/crypto-exchange.png";
import farmworksImage from "../../assets/images/contribution-images/farmworks.png";

import css from "./Contributions.module.css";

const Contributions = () => {
  const landtrustContributions = [
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
      id: "Contributions.marketWatcher",
      video: marketWatcherVideo,
      title: "Contributions.marketWatcherTitle",
      code: "https://github.com/sezasada/Solo"
    },
    {
      id: "Contributions.farmWorks",
      image: farmworksImage,
      title: "Contributions.farmWorksTitle",
      code: "https://github.com/sezasada/task_portal"
    },
    {
      id: "Contributions.cryptoExchange",
      image: cryptoImage,
      title: "Contributions.cryptoExchangeTitle",
      code: "https://github.com/sezasada/cryptoexchange-v2"
    },
  ];

  return (
    <div className={css.containerStyles}>
      <div className={css.wrapperStyles}>
        <div className={css.bodyStyles}>
          <div className={css.titleStyles}>
            <FormattedMessage id="Contributions.title" />
          </div>
          <div className={css.subtitleStyles}>
            <FormattedMessage id="Contributions.subtitle" />
          </div>
        </div>
        <hr className={css.divider} />
        <div className={css.carouselContainer}>
          <div className={css.carouselStyles}>
            <Carousel items={landtrustContributions} id="landtrustCarousel" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributions;
