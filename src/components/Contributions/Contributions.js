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
      link: "Contributions.fieldnotesLink",
    },
    {
      id: "Contributions.homepage",
      video: homepageVideo,
      link: "Contributions.homepageLink",
    },
    {
      id: "Contributions.listingPage",
      video: listingVideo,
      link: "Contributions.listingPageLink",
    },
  ];

  const personalContributions = [
    { id: "Contributions.marketWatcher", video: marketWatcherVideo },
    { id: "Contributions.farmWorks", image: farmworksImage },
    { id: "Contributions.cryptoExchange", image: cryptoImage },
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
            <div className={css.serviceStyles}>
              <FormattedMessage id="Contributions.landtrustCopy" />
            </div>
            <Carousel items={landtrustContributions} id="landtrustCarousel" />
          </div>
        </div>
        <div className={css.carouselContainer}>
          <div className={css.carouselStyles}>
            <div className={css.serviceStyles}>
              <FormattedMessage id="Contributions.personalCopy" />
            </div>
            <Carousel items={personalContributions} id="personalCarousel" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributions;
