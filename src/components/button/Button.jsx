import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Buttons } from "./style";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const Button = ({
  title,
  background,
  fontSize,
  width,
  color,
  backgroundHover,
}) => {
  return (
    <Buttons
      background={background}
      fontSize={fontSize}
      width={width}
      color={color}
      backgroundHover={backgroundHover}
    >
      {title}
    </Buttons>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
// #endregion

export default Button;
