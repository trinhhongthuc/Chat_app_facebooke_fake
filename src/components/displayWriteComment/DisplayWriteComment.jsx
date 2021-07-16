import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  DisplayCommentAction,
  DisplayCommentActionDate,
  DisplayCommentActionText,
  DisplayComments,
  DisplayCommentsImg,
  DisplayCommentsNotes,
  DisplayCommentsTitle,
  DisplayCommentWrapper,
  DisplayWrapper,
} from "./style";

// img

import imgPost from "../../assets/post.jpg";

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
const DisplayWriteComment = () => {
  return (
    <DisplayWrapper>
      <DisplayCommentsImg src={imgPost} />

      <DisplayComments>
        <DisplayCommentWrapper>
          <DisplayCommentsTitle>Trinh hong thuc</DisplayCommentsTitle>
          <DisplayCommentsNotes>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            eligendi eos est blanditiis. Iusto dolores, corrupti voluptas veniam
            debitis qui placeat culpa reiciendis impedit voluptatibus
            asperiores, fugiat tempore mollitia error.
          </DisplayCommentsNotes>
        </DisplayCommentWrapper>

        <DisplayCommentAction>
          <DisplayCommentActionText>Thich</DisplayCommentActionText>
          <DisplayCommentActionText>xoa</DisplayCommentActionText>

          <DisplayCommentActionDate>2h</DisplayCommentActionDate>
        </DisplayCommentAction>
      </DisplayComments>
    </DisplayWrapper>
  );
};

DisplayWriteComment.propTypes = propTypes;
DisplayWriteComment.defaultProps = defaultProps;
// #endregion

export default DisplayWriteComment;
