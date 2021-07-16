import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ContentHome, WrapperContentCenter } from "./style";
import NavbarLeft from "components/navbarLeft/NavbarLeft";
import BoxWrite from "components/boxWrite/BoxWrite";
import Post from "components/post/Post";
import Contact from "components/contact/Contact";
import FormNewPost from "components/formCreateNewPost/FormNewPost";
import ChatMessage from "components/chatMessage/ChatMessage";

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
    <>
      <ContentHome>
        {/* <FormNewPost></FormNewPost> */}

        {/*Navbar Left  */}
        <NavbarLeft></NavbarLeft>

        {/* Content */}
        <WrapperContentCenter>
          <BoxWrite></BoxWrite>
          <Post></Post>

          <Post></Post>

          <Post></Post>

          <Post></Post>

          <Post></Post>

          <Post></Post>
        </WrapperContentCenter>

        {/* Contact */}
        <Contact></Contact>
      </ContentHome>
      {/* <ChatMessage></ChatMessage> */}
    </>
  );
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
// #endregion

export default Home;
