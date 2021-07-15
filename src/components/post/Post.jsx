import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  HeaderPost,
  HeaderPostLeft,
  HeaderPostLeftContent,
  HeaderPostLeftDate,
  HeaderPostLeftImg,
  HeaderPostLeftTitle,
  HeaderPostRight,
  HeaderPostRightIcon,
  PostContent,
  PostContentWrapper,
  PostContentText,
  PostWrapper,
  PostContentImg,
} from "./style";

// #region constants
import img from "../../assets/logo.png";
import imgPost from "../../assets/post.jpg";
//icon

import { AiOutlineDash } from "react-icons/ai";
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
const Post = () => {
  return (
    <PostWrapper>
      <HeaderPost>
        <HeaderPostLeft>
          <HeaderPostLeftImg src={img} alt="img" />

          <HeaderPostLeftContent>
            <HeaderPostLeftTitle>Trinh hong thuc</HeaderPostLeftTitle>
            <HeaderPostLeftDate>2 gio</HeaderPostLeftDate>
          </HeaderPostLeftContent>
        </HeaderPostLeft>

        <HeaderPostRight>
          <HeaderPostRightIcon>
            <AiOutlineDash />
          </HeaderPostRightIcon>
        </HeaderPostRight>
      </HeaderPost>
      <PostContent>
        <PostContentText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
          repellat numquam necessitatibus alias tenetur quam esse laudantium
          odit eligendi repellendus, sapiente magnam, tempore saepe sint
          aspernatur aliquid quasi eveniet. Rem.
        </PostContentText>
        <PostContentWrapper>
          <PostContentImg src={imgPost} />
        </PostContentWrapper>
      </PostContent>
    </PostWrapper>
  );
};

Post.propTypes = propTypes;
Post.defaultProps = defaultProps;
// #endregion

export default Post;
