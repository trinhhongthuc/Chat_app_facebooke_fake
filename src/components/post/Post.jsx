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
  PostContentVideo,
  PostContentDisplayFelling,
  PostWrapperFelling,
  PostWrapperFellingIcon,
  PostWrapperFellingCounter,
  PostWrapperComment,
  PostDisplayFelling,
  PostDisplayFellingWrapper,
  PostDisplayFellingIcon,
  PostDisplayFellingName,
  PostComment,
  PostCommentImg,
  PostCommentInput,
} from "./style";

// #region constants
import img from "../../assets/logo.png";
import imgPost from "../../assets/post.jpg";
import videoDemo from "../../assets/videoDemo.mp4";
//icon

import { AiOutlineDash } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import DisplayWriteComment from "components/displayWriteComment/DisplayWriteComment";

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
      {/* Header post  */}
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

      {/* Content post */}
      <PostContent>
        <PostContentText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
          repellat numquam necessitatibus alias tenetur quam esse laudantium
          odit eligendi repellendus, sapiente magnam, tempore saepe sint
          aspernatur aliquid quasi eveniet. Rem.
        </PostContentText>
        <PostContentWrapper>
          {/* <PostContentImg src={imgPost} /> */}

          <PostContentVideo
            src={videoDemo}
            controls
            autoplay
          ></PostContentVideo>
        </PostContentWrapper>
      </PostContent>
      {/* Display felling */}
      <PostContentDisplayFelling>
        <PostWrapperFelling>
          <PostWrapperFellingIcon color="#fff" background="#14A2FA">
            <AiFillLike />
          </PostWrapperFellingIcon>
          <PostWrapperFellingCounter>4k</PostWrapperFellingCounter>
        </PostWrapperFelling>

        <PostWrapperComment>500 binh luan</PostWrapperComment>
      </PostContentDisplayFelling>
      {/* Display icon felling */}

      <PostDisplayFelling>
        <PostDisplayFellingWrapper>
          <PostDisplayFellingIcon>
            <AiFillLike />
          </PostDisplayFellingIcon>
          <PostDisplayFellingName>Thich</PostDisplayFellingName>
        </PostDisplayFellingWrapper>

        <PostDisplayFellingWrapper>
          <PostDisplayFellingIcon>
            <GoComment />
          </PostDisplayFellingIcon>
          <PostDisplayFellingName>Binh luan</PostDisplayFellingName>
        </PostDisplayFellingWrapper>
      </PostDisplayFelling>

      {/* Writer Comment */}
      <PostComment>
        <PostCommentImg src={imgPost} />
        <PostCommentInput type="text" placeholder="Viết bình luận..." />
      </PostComment>

      {/* Display write comments*/}
      <DisplayWriteComment></DisplayWriteComment>
      <DisplayWriteComment></DisplayWriteComment>
      <DisplayWriteComment></DisplayWriteComment>
    </PostWrapper>
  );
};

Post.propTypes = propTypes;
Post.defaultProps = defaultProps;
// #endregion

export default Post;
