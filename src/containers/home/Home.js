import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ContentHome, WrapperContentCenter } from "./style";
import NavbarLeft from "components/navbarLeft/NavbarLeft";
import BoxWrite from "components/boxWrite/BoxWrite";
import Post from "components/post/Post";

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
const Home = () => {
  return (
    <ContentHome>
      <NavbarLeft></NavbarLeft>
      <WrapperContentCenter>
        <BoxWrite></BoxWrite>
        <Post></Post>
      </WrapperContentCenter>
    </ContentHome>
  );
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
// #endregion

export default Home;
