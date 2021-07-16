import React, { useCallback } from "react";
import {
  BoxAdd,
  BoxAddName,
  BoxAddWrapper,
  BoxAddWrapperIcon,
  ContentForm,
  ContentFormInformation,
  ContentFormInformationImg,
  ContentFormInformationName,
  ContentFormWriter,
  FormHeader,
  FormHeaderIcon,
  FormNewPosts,
  WrapperNewPost,
} from "./style";

//icon

import { AiOutlineClose } from "react-icons/ai";
// #region constants
import imgPost from "../../assets/post.jpg";
import { BiImageAdd } from "react-icons/bi";
import Button from "components/button/Button";

const FormNewPost = ({ setHidden }) => {
  const OnHidden = (e) => {
    if (e.target.id === "hidden") setHidden(false);
  };

  const OnClickClose = (e) => {
    setHidden(false);
  };

  return (
    <WrapperNewPost id="hidden" onClick={(e) => OnHidden(e)}>
      <FormNewPosts>
        <FormHeader>Tạo bài viết</FormHeader>

        <FormHeaderIcon onClick={(e) => OnClickClose(e)}>
          <AiOutlineClose />
        </FormHeaderIcon>

        <ContentForm>
          <ContentFormInformation>
            <ContentFormInformationImg src={imgPost} alt="imgPost" />
            <ContentFormInformationName>
              Trinh hong thuc
            </ContentFormInformationName>
          </ContentFormInformation>

          <ContentFormWriter placeholder="Ban đang nghĩ gì"></ContentFormWriter>

          <BoxAdd>
            <BoxAddName>Thêm vào bài viết</BoxAddName>
            <BoxAddWrapper>
              <BoxAddWrapperIcon color="#42B35E">
                <BiImageAdd></BiImageAdd>
              </BoxAddWrapperIcon>
            </BoxAddWrapper>
          </BoxAdd>

          <Button
            background="#1877F2"
            fontSize="16px"
            width="100%"
            color={"#fff"}
            backgroundHover="#0a63d6"
            title="Đăng"
          />
        </ContentForm>
      </FormNewPosts>
    </WrapperNewPost>
  );
};

export default FormNewPost;
