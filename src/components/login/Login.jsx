import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DivWrapper, Form, Input } from "./style.js";
import Button from "../button/Button.jsx";
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
          <Input placeholder="Email hoặc số điện thoại" required />
        </DivWrapper>

        <DivWrapper>
          <Input placeholder="Enter Password" required />
        </DivWrapper>

        <Button title="Đăng nhập" background="#166fe5" font-size="18px" />
      </Form>
    </>
  );
};

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;
// #endregion

export default Login;
