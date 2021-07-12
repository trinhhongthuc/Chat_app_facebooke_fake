import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DivWrapper, Form, Input } from "./style.js";
import Button from "../button/Button.jsx";
import { BorderBottom, WrapperButton } from "components/button/style.js";
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
const Login = () => {
  return (
    <>
      <Form>
        <DivWrapper>
          <Input type="email" placeholder="Email hoặc số điện thoại" required />
        </DivWrapper>

        <DivWrapper>
          <Input type="password" placeholder="Enter Password" required />
        </DivWrapper>

        <Button
          title="Đăng nhập"
          background="#166fe5"
          backgroundHover="#365899"
          fontSize="18px"
          width="100%"
          color="#fff"
        />

        <BorderBottom />
        <WrapperButton>
          <Button
            title="Tạo tài khoản mới"
            background="#36A420"
            backgroundHover="#298a16"
            fontSize="18px"
            width="auto"
            color="#fff"
          />
        </WrapperButton>
      </Form>
    </>
  );
};

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;
// #endregion

export default Login;
