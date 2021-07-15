import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  ContentLeft,
  NavContentLeft,
  NavInformationImg,
  NavInformationTitle,
  NavLeftIcon,
  NavLeftTitle,
} from "./style";

import img from "../../assets/logo.png";

import { BsSearch } from "react-icons/bs";
import { BiHome } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiDownArrow } from "react-icons/bi";
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
const NavbarLeft = () => {
  return (
    <ContentLeft>
      <NavContentLeft to="/information">
        <NavInformationImg src={img} />
        <NavInformationTitle>Hoongf thuc</NavInformationTitle>
      </NavContentLeft>

      <NavContentLeft to="/friend">
        <NavLeftIcon>
          <FaUserFriends />
        </NavLeftIcon>
        <NavLeftTitle>Bạn bè</NavLeftTitle>
      </NavContentLeft>

      <NavContentLeft to="/watch">
        <NavLeftIcon>
          <MdOndemandVideo />
        </NavLeftIcon>
        <NavLeftTitle>Watch</NavLeftTitle>
      </NavContentLeft>

      <NavContentLeft to="/group">
        <NavLeftIcon>
          <HiUserGroup />
        </NavLeftIcon>
        <NavLeftTitle>Nhóm</NavLeftTitle>
      </NavContentLeft>

      <NavContentLeft to="/message">
        <NavLeftIcon>
          <AiOutlineMessage />
        </NavLeftIcon>
        <NavLeftTitle>Message</NavLeftTitle>
      </NavContentLeft>
    </ContentLeft>
  );
};

NavbarLeft.propTypes = propTypes;
NavbarLeft.defaultProps = defaultProps;
// #endregion

export default NavbarLeft;
