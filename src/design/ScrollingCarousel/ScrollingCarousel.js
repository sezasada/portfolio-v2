import React, {
    useRef,
    useEffect,
    useContext,
    useCallback,
    useMemo,
    useReducer,
    useState,
  } from "react";
  import propTypes from "prop-types";
  import classnames from "classnames";
  import { useInView } from "react-intersection-observer";
  import { injectIntl } from "react-intl";
  import { ReactComponent as IconChevronLeft } from "../../assets/icons/chevron-left.svg";
  import { ReactComponent as IconChevronRight } from "../../assets/icons/chevron-right.svg";
  import css from "./ScrollingCarousel.module.css";
  
  const CarouselContext = React.createContext(null);
  
  // Define the Step component as before
  export const Step = ({ children, index, className, onClick }) => {
    const { carousel, dispatch } = useContext(CarouselContext);
    const [ref, inView] = useInView({
      threshold: 0.75,
      root: carousel.current,
    });
  
    useEffect(() => {
      dispatch({
        type: "set_child_visibility",
        payload: { index, visible: inView },
      });
    }, [inView, dispatch, index]);
  
    return (
      <div
        ref={ref}
        className={classnames(css.step, className)}
        onClick={onClick}
      >
        {children}
      </div>
    );
  };
  
  Step.propTypes = {
    className: propTypes.string,
    onClick: propTypes.func,
  };
  
  Step.defaultProps = {
    className: undefined,
    onClick: () => {},
  };
  
  // Define the reducer as before
  const childVisibilityReducer = (state, action) => {
    switch (action.type) {
      case "set_child_visibility": {
        const newChildVisibility = [...state.childVisibility];
        newChildVisibility[action.payload.index] = action.payload.visible;
        return { childVisibility: newChildVisibility };
      }
      default:
        return state;
    }
  };
  
  // Fixing ScrollingCarouselComponent
  const ScrollingCarouselComponent = ({
    children,
    className,
    showButtons,
    showDots,
    numberOfDots,
    current,
    intl,
    showNavigationOnHover,
  }) => {
    const carousel = useRef();
    const [state, dispatch] = useReducer(childVisibilityReducer, {
      childVisibility: [],
    });
    const [isHovering, setIsHovering] = useState(false);
  
    const carouselContextApi = useMemo(() => ({ carousel, dispatch }), []);
  
    const firstVisibleIndex = state.childVisibility.indexOf(true);
    const firstItemIsVisible = firstVisibleIndex === 0;
    const lastVisibleIndex = state.childVisibility.lastIndexOf(true);
    const lastItemIsVisible = lastVisibleIndex === state.childVisibility.length - 1;
  
    const getStepEl = (index) =>
      carousel.current.querySelectorAll(`.${css.step}`)[index];
  
    const scrollTo = (el, config) => {
      setTimeout(() => {
        el.scrollIntoView(config);
      });
    };
  
    const next = useCallback(
      (e) => {
        e.preventDefault();
        if (lastItemIsVisible) return;
        const scrollToIndex = lastVisibleIndex + 1;
        const el = getStepEl(scrollToIndex);
        if (el) scrollTo(el, { behavior: "smooth", inline: "start" });
      },
      [lastItemIsVisible, lastVisibleIndex]
    );
  
    const back = useCallback(
      (e) => {
        e.preventDefault();
        if (firstItemIsVisible) return;
        const scrollToIndex = firstVisibleIndex - 1;
        const el = getStepEl(scrollToIndex);
        if (el) scrollTo(el, { behavior: "smooth", inline: "end" });
      },
      [firstItemIsVisible, firstVisibleIndex]
    );
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const goTo = useCallback((e, i) => {
      e.preventDefault();
      const el = getStepEl(i);
      if (el) scrollTo(el, { behavior: "smooth", inline: "center" });
    });
  
    useEffect(() => {
      const el = getStepEl(current);
      if (el) scrollTo(el, { behavior: "smooth", inline: "center" });
    }, [current]);
  
    const shouldShowNavigation = showNavigationOnHover ? isHovering : true;
  
    return (
      <div
        className={classnames(css.root, className)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className={css.carousel} ref={carousel}>
          <CarouselContext.Provider value={carouselContextApi}>
            {React.Children.map(children, (child, index) =>
              React.cloneElement(child, { index })
            )}
          </CarouselContext.Provider>
        </div>
  
        {shouldShowNavigation && (
          <div className={css.controls}>
            {showButtons && !firstItemIsVisible && (
              <button
                type="button"
                onClick={back}
                className={classnames(css.button, css.buttonLeft)}
              >
                <IconChevronLeft />
              </button>
            )}
            {showButtons && !lastItemIsVisible && (
              <button
                type="button"
                onClick={next}
                className={classnames(css.button, css.buttonRight)}
              >
                <IconChevronRight />
              </button>
            )}
          </div>
        )}
  
        {showDots && (
          <div className={css.dots}>
            <div className={css.dotsInner}>
              {state.childVisibility.map((_, i) => (
                <button
                  type="button"
                  onClick={(e) => goTo(e, i)}
                  className={classnames(css.dot)}
                  key={`step-${i}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  ScrollingCarouselComponent.propTypes = {
    className: propTypes.string,
    showButtons: propTypes.bool,
    showDots: propTypes.bool,
    numberOfDots: propTypes.number,
    showNavigationOnHover: propTypes.bool,
    intl: propTypes.object.isRequired, // Replace `intlShape` with `PropTypes.object`
  };
  
  ScrollingCarouselComponent.defaultProps = {
    className: undefined,
    showButtons: true,
    showDots: false,
    numberOfDots: 5,
    showNavigationOnHover: false,
  };
  
  export const ScrollingCarousel = injectIntl(ScrollingCarouselComponent);
  