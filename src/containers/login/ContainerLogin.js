import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Login from "components/login/Login";
import { Heading, ParagraphStyle, WrapperContent } from "./style";

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
const ContainerLogin = () => {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <WrapperContent>
              <Heading>Facebook fake</Heading>
              <ParagraphStyle>
                Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc
                sống của bạn.
              </ParagraphStyle>
            </WrapperContent>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <WrapperContent>
              <Login />
            </WrapperContent>
          </div>
        </div>
      </div>
    </>
  );
};

ContainerLogin.propTypes = propTypes;
ContainerLogin.defaultProps = defaultProps;
// #endregion

export default ContainerLogin;
