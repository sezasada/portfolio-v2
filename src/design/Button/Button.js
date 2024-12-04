import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import css from "./Button.module.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { mounted: false };
  }

  componentDidMount() {
    this.setState({ mounted: true }); // eslint-disable-line react/no-did-mount-set-state
  }

  render() {
    const {
      children,
      className,
      rootClassName,
      spinnerClassName,
      checkmarkClassName,
      inProgress,
      ready,
      disabled,
      isFullWidth,
      dataTestId,
      ...rest
    } = this.props;
    const { mounted } = this.state;
    const rootClass = rootClassName || css.root;
    const classes = classNames(rootClass, className, {
      [css.ready]: ready,
      [css.inProgress]: inProgress,
      [css.fullWidth]: isFullWidth,
    });

    const content = children;

    // All buttons are disabled until the component is mounted. This
    // prevents e.g. being able to submit forms to the backend before
    // the client side is handling the submit.
    const buttonDisabled = mounted ? disabled : true;

    return (
      // eslint-disable-next-line react/button-has-type
      <button
        data-testid={dataTestId}
        className={classes}
        {...rest}
        disabled={buttonDisabled}
      >
        {content}
      </button>
    );
  }
}

const { node, string, bool } = PropTypes;

Button.defaultProps = {
  rootClassName: null,
  className: null,
  spinnerClassName: null,
  checkmarkClassName: null,
  inProgress: false,
  ready: false,
  disabled: false,
  isFullWidth: false,
  children: null,
};

Button.propTypes = {
  rootClassName: string,
  className: string,
  spinnerClassName: string,
  checkmarkClassName: string,

  inProgress: bool,
  ready: bool,
  disabled: bool,
  isFullWidth: bool,

  children: node,
};

export default Button;

export const PrimaryButton = ({
  component: RenderedComponent = Button,
  isSmall = false,
  className = null,
  dataTestId = null,
  ...props
}) => {
  const classes = classNames(
    css.primaryButton,
    {
      [css.small]: isSmall,
    },
    className
  );

  return (
    <RenderedComponent
      rootClassName={css.root}
      className={classes}
      dataTestId={dataTestId}
      {...props}
    />
  );
};

PrimaryButton.displayName = "PrimaryButton";

export const SecondaryButton = ({
  component: RenderedComponent = Button,
  isSmall = false,
  className = null,
  ...props
}) => {
  const classes = classNames(
    css.secondaryButton,
    {
      [css.small]: isSmall,
    },
    className
  );

  return (
    <RenderedComponent
      rootClassName={css.root}
      className={classes}
      {...props}
    />
  );
};

SecondaryButton.displayName = "SecondaryButton";

export const TertiaryButton = ({
  component: RenderedComponent,
  isSmall,
  className,
  ...props
}) => {
  const classes = classNames(
    css.tertiaryButton,
    {
      [css.small]: isSmall,
    },
    className
  );

  return (
    <RenderedComponent
      rootClassName={css.root}
      className={classes}
      {...props}
    />
  );
};
TertiaryButton.displayName = "TertiaryButton";
TertiaryButton.defaultProps = {
  component: Button,
};

export const QuaternaryButton = ({
  component: RenderedComponent,
  isSmall,
  isBold,
  className,
  ...props
}) => {
  const classes = classNames(
    css.quaternaryButton,
    {
      [css.small]: isSmall,
      [css.bold]: isBold,
    },
    className
  );

  return (
    <RenderedComponent
      rootClassName={css.root}
      className={classes}
      {...props}
    />
  );
};
QuaternaryButton.displayName = "QuaternaryButton";
QuaternaryButton.defaultProps = {
  component: Button,
};

export const InlineTextButton = (props) => {
  const { rootClassName } = props;
  const classes = classNames(
    css.inlineTextButtonRoot,
    rootClassName,
    css.inlineTextButton
  );

  return <Button {...props} rootClassName={classes} />;
};
InlineTextButton.displayName = "InlineTextButton";

export const FacebookLoginButton = (props) => {
  const { rootClassName } = props;
  const classes = classNames(
    rootClassName || css.socialButtonRoot,
    css.facebookButton
  );
  return <Button {...props} rootClassName={classes} />;
};
FacebookLoginButton.displayName = "FacebookLoginButton";

export const GoogleLoginButton = (props) => {
  const { rootClassName } = props;
  const classes = classNames(
    rootClassName || css.socialButtonRoot,
    css.googleButton
  );
  return <Button {...props} rootClassName={classes} />;
};

GoogleLoginButton.displayName = "GoogleLoginButton";
