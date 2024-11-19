import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import codyImage from "../../assets/images/testimonials/cody.jpg";
import joshImage from "../../assets/images/testimonials/josh.jpg";
import nicImage from "../../assets/images/testimonials/nic.jpg";
// import robImage from "../../assets/images/testimonials/rob.webp";
import { ReactComponent as Quotes } from "../../assets/icons/quotes.svg";
import Marquee from "react-fast-marquee";

import css from "./Testimonials.module.css";

const Testimonials = () => {
  const [marqueeSpeed, setMarqueeSpeed] = useState(20);

  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth >= 1024) {
        setMarqueeSpeed(50);
      } else {
        setMarqueeSpeed(20);
      }
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);

    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  const handleCodyClick = () => {
    window.open("https://www.linkedin.com/in/cody-allen-hebert/", "_blank");
  };

  const handleJoshClick = () => {
    window.open("https://www.linkedin.com/in/jhint/", "_blank");
  };

  // const handleRobClick = () => {
  //   window.open("https://www.linkedin.com/in/rob-rotarius-97b49812/", "_blank");
  // };

  const handleNicClick = () => {
    window.open("https://www.linkedin.com/in/nicdecastro/", "_blank");
  };

  return (
    <div className={css.containerStyles}>
      <div className={css.wrapperStyles}>
        <div className={css.bodyStyles}>
          <div className={css.titleStyles}>
            <FormattedMessage id="Testimonials.title" />
          </div>
          <div className={css.subtitleStyles}>
            <FormattedMessage id="Testimonials.subtitle" />
          </div>
          <hr className={css.divider} />
          <Marquee autoFill pauseOnHover speed={marqueeSpeed}>
            <div className={css.testimonialContainer}>
              <div className={css.testimonialWrapper}>
                <div className={css.testimonialBox} onClick={handleCodyClick}>
                  <img
                    src={codyImage}
                    alt="employee"
                    className={css.sectionImage}
                  />
                  <div className={css.testimonialBio}>
                    <div className={css.testimonialName}>
                      <FormattedMessage id="Testimonials.cody" />
                    </div>
                    <div className={css.testimonialJonTitle}>
                      <FormattedMessage id="Testimonials.codyJobTitle" />
                    </div>
                  </div>
                  <div className={css.quoteIconStyles}>
                    <Quotes />
                  </div>
                </div>
                <div className={css.testimonialReferral}>
                  <FormattedMessage id="Testimonials.codyReferral" />
                </div>
              </div>
              <div className={css.testimonialWrapper}>
                <div className={css.testimonialBox} onClick={handleJoshClick}>
                  <img
                    src={joshImage}
                    alt="employee"
                    className={css.sectionImage}
                  />
                  <div className={css.testimonialBio}>
                    <div className={css.testimonialName}>
                      <FormattedMessage id="Testimonials.josh" />
                    </div>
                    <div className={css.testimonialJonTitle}>
                      <FormattedMessage id="Testimonials.joshJobTitle" />
                    </div>
                  </div>
                  <div className={css.quoteIconStyles}>
                    <Quotes />
                  </div>
                </div>
                <div className={css.testimonialReferral}>
                  <FormattedMessage id="Testimonials.joshReferral" />
                </div>
              </div>
              <div className={css.testimonialWrapper}>
                <div className={css.testimonialBox} onClick={handleNicClick}>
                  <img
                    src={nicImage}
                    alt="employee"
                    className={css.sectionImage}
                  />
                  <div className={css.testimonialBio}>
                    <div className={css.testimonialName}>
                      <FormattedMessage id="Testimonials.nic" />
                    </div>
                    <div className={css.testimonialJonTitle}>
                      <FormattedMessage id="Testimonials.nicJobTitle" />
                    </div>
                  </div>
                  <div className={css.quoteIconStyles}>
                    <Quotes />
                  </div>
                </div>
                <div className={css.testimonialReferral}>
                  <FormattedMessage id="Testimonials.nicReferral" />
                </div>
              </div>
              {/* <div className={css.testimonialWrapper}>
                <div className={css.testimonialBox} onClick={handleRobClick}>
                  <img
                    src={robImage}
                    alt="employee"
                    className={css.sectionImage}
                  />
                  <div className={css.testimonialBio}>
                    <div className={css.testimonialName}>
                      <FormattedMessage id="Testimonials.rob" />
                    </div>
                    <div className={css.testimonialJonTitle}>
                      <FormattedMessage id="Testimonials.robJobTitle" />
                    </div>
                  </div>
                  <div className={css.quoteIconStyles}>
                    <Quotes />
                  </div>
                </div>
                <div className={css.testimonialReferral}>
                  <FormattedMessage id="Testimonials.robReferral" />
                </div>
              </div> */}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
