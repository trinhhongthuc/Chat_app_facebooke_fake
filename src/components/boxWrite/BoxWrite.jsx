import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  BoxInput,
  BoxWriteImg,
  OptionPost,
  OptionPostIcons,
  OptionPostName,
  WrapperBoxWriter,
  WrapperBoxWriterOption,
  WrapperFelling,
} from "./style";

import img from "../../assets/logo.png";

//icon

import { BiImageAdd } from "react-icons/bi";

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
const BoxWrite = () => {
  return (
    <WrapperBoxWriter>
      <WrapperFelling>
        <BoxWriteImg src={img} alt="img" />
        <BoxInput placeholder="Bạn đang nghĩ gì?" />
      </WrapperFelling>

      <WrapperBoxWriterOption>
        <OptionPost>
          <OptionPostIcons color="#44B45F">
            <BiImageAdd />
          </OptionPostIcons>

          <OptionPostName>Anh/Video</OptionPostName>
        </OptionPost>

        <OptionPost>
          <OptionPostIcons color="#44B45F">
            <BiImageAdd />
          </OptionPostIcons>

          <OptionPostName>Anh/Video</OptionPostName>
        </OptionPost>

        <OptionPost>
          <OptionPostIcons color="#44B45F">
            <BiImageAdd />
          </OptionPostIcons>

          <OptionPostName>Anh/Video</OptionPostName>
        </OptionPost>
      </WrapperBoxWriterOption>
    </WrapperBoxWriter>
  );
};

BoxWrite.propTypes = propTypes;
BoxWrite.defaultProps = defaultProps;
// #endregion

export default BoxWrite;
