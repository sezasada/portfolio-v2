import React from "react";
import { FormattedMessage } from "react-intl";
import fieldnotesVideo from "@public/videos/fieldnotes.mp4";
import homepageVideo from "@public/videos/homepage.mp4";
import listingVideo from "@public/videos/listingpage.mp4";
import marketWatcherVideo from "@public/videos/marketWatchervideo.mp4";
import Carousel from "../../design/Carousel/Carousel";
import cryptoImage from "@public/images/contribution-images/crypto-exchange.png";
import farmworksImage from "@public/images/contribution-images/farmworks.png";

import css from "./Contributions.module.css";

const Contributions = () => {
  const landtrustContributions = [
    { id: "Contributions.fieldnotes", video: fieldnotesVideo },
    { id: "Contributions.homepage", video: homepageVideo },
    { id: "Contributions.listingPage", video: listingVideo },
  ];

  const skillsTwo = [
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
          <hr className={css.divider} />
          <div className={css.serviceStyles}>
            <FormattedMessage id="Contributions.landtrustCopy" />
          </div>
        </div>
        <div className={css.carouselContainer}>
          <div className={css.carouselStyles}>
            <Carousel items={landtrustContributions} />
          </div>
        </div>
        <div className={css.bodyStyles}>
          <hr className={css.divider} />
          <div className={css.serviceStyles}>
            <FormattedMessage id="Contributions.personalCopy" />
          </div>
        </div>
        <div className={css.carouselContainer}>
          <div className={css.carouselStyles}>
            <Carousel items={skillsTwo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributions;
