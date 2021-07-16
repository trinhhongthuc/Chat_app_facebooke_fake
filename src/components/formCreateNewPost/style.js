import styled from "styled-components";

export const WrapperNewPost = styled.div`
  background: rgba(255, 255, 255, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 100vh;
  z-index: 999;
`;

export const FormNewPosts = styled.form`
  background: #fff;
  width: 450px;
  height: auto;
  border-radius: 4px;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);
`;

export const FormHeader = styled.h3`
  width: 100%;
  font-size: 20px;
  color: #333;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  padding: 12px 0;
  border-bottom: 1px solid #ccc;
`;

export const FormHeaderIcon = styled.div`
  font-size: 22px;
  background: #d8dadf;

  width: 30px;
  height: 30px;

  border-radius: 50%;
  position: absolute;

  top: 8px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #868b92;
  cursor: pointer;
`;

export const ContentForm = styled.div`
  padding: 12px;
  height: auto;
`;

export const ContentFormInformation = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  //   height: 50px;
`;

export const ContentFormInformationImg = styled.img`
  width: 35px;
  height: 35px;

  border-radius: 50%;
  margin-right: 12px;
`;

export const ContentFormInformationName = styled.h4`
  font-size: 16px;
  color: #333;
  margin: 0;

  display: flex;
  align-items: center;
`;

export const ContentFormWriter = styled.textarea`
  resize: none;
  border: none;
  outline: none;
  padding: 12px 0;

  font-size: 18px;
  color: #333;
  height: 200px;
  width: 100%;
`;

export const BoxAdd = styled.div`
  border: 1px solid #ccc;
  border-radius: 3px;
  display: flex;
  align-items: center;

  padding: 7px 0;
  margin-bottom: 12px;
`;

export const BoxAddName = styled.h4`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 14px;

  width: 50%;
  margin: 0;
`;

export const BoxAddWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
`;

export const BoxAddWrapperIcon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;

  font-size: 27px;
  color: ${(props) => props.color};
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #ccc;
    transition: all 0.3s ease-in-out;
  }
`;
