import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  Avatar,
  Headers,
  IconSearch,
  Information,
  InformationName,
  InputSearch,
  LogoImg,
  WrapperCenter,
  WrapperIconCenter,
  WrapperLeft,
  WrapperLeftLogo,
  WrapperLeftSearch,
  WrapperRight,
  WrapperRightContent,
} from "./style";

// img
import logo from "../../assets/logo.png";
import { BsSearch } from "react-icons/bs";
import { BiHome } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiDownArrow } from "react-icons/bi";
// router
import { Link } from "react-router-dom";

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
const Header = () => {
  return (
    <Headers>
      <WrapperLeft>
        <WrapperLeftLogo>
          <LogoImg src={logo} alt="logo" />
        </WrapperLeftLogo>

        <WrapperLeftSearch>
          <IconSearch>
            <BsSearch />
          </IconSearch>
          <InputSearch type="text" placeholder="Tim kiem tren facebook" />
        </WrapperLeftSearch>
      </WrapperLeft>
      <WrapperCenter>
        <WrapperIconCenter to="/home">
          <BiHome />
        </WrapperIconCenter>

        <WrapperIconCenter to="/friend">
          <FaUserFriends />
        </WrapperIconCenter>

        <WrapperIconCenter to="/watch">
          <MdOndemandVideo />
        </WrapperIconCenter>

        <WrapperIconCenter to="/group">
          <HiUserGroup />
        </WrapperIconCenter>
      </WrapperCenter>
      <WrapperRight>
        <Information>
          <Avatar src={logo} alt={logo} />
          <InformationName>thuc</InformationName>
        </Information>
        <WrapperRightContent>
          <AiOutlineMessage />
        </WrapperRightContent>
        <WrapperRightContent>
          <IoMdNotificationsOutline />
        </WrapperRightContent>
        <WrapperRightContent>
          <BiDownArrow />
        </WrapperRightContent>
      </WrapperRight>
    </Headers>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
// #endregion

export default Header;
