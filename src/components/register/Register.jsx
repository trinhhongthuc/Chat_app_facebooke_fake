import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  BorderBottom,
  Form,
  Heading,
  TextNote,
  WrapperContent,
  WrapperFormContent,
  WrapperInput,
  Input,
  Label,
  ContentLabel,
  TextName,
  InputRadio,
  WrapperButton,
  Wrapper,
  Icon,
} from "./style";
import Button from "components/button/Button";

import { AiOutlineClose } from "react-icons/ai";
// import { Input } from "reactstrap";

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
const Register = () => {
  return (
    <>
      <WrapperContent>
        <Form>
          <Wrapper>
            <Heading>Đăng ký</Heading>
            <Icon>
              <AiOutlineClose />
            </Icon>
          </Wrapper>

          <TextNote>Nhanh chóng và dễ dàng.</TextNote>

          <BorderBottom />

          <WrapperFormContent>
            <WrapperInput>
              <Input type="text" placeholder="Họ" required />
            </WrapperInput>

            <WrapperInput>
              <Input type="text" placeholder="Tên" required />
            </WrapperInput>

            <WrapperInput>
              <Input
                type="email"
                placeholder="Số điện thoại hoặc Email"
                required
              />
            </WrapperInput>

            <WrapperInput>
              <Input type="password" placeholder="Mật khẩu mới" required />
            </WrapperInput>

            <WrapperInput>
              <Label>Ngày sinh:</Label>
              <Input type="date" placeholder="Ngày tháng năm sinh" required />
            </WrapperInput>

            <WrapperInput>
              <Label>Giới tính:</Label>

              <ContentLabel>
                <InputRadio type="radio" name="gender" value="male" />{" "}
                <TextName>Nam</TextName>
              </ContentLabel>

              <ContentLabel>
                <InputRadio type="radio" name="gender" value="Female" />{" "}
                <TextName>Nữ</TextName>
              </ContentLabel>
            </WrapperInput>
          </WrapperFormContent>

          <WrapperButton>
            <Button
              background="#2d9615"
              color="#fff"
              title="Đăng ký"
              backgroundHover="#6CA160 "
            ></Button>
          </WrapperButton>
        </Form>
      </WrapperContent>
    </>
  );
};

Register.propTypes = propTypes;
Register.defaultProps = defaultProps;
// #endregion

export default Register;
