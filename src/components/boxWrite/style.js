import styled from "styled-components";

export const WrapperBoxWriter = styled.div`
  width: 100%;
  background: #fff;
  //   border: 1px solid #ccc;
  border-radius: 8px;

  box-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.2);
  margin: 12px 0;
`;

export const WrapperFelling = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #ccc;
`;

export const BoxWriteImg = styled.img`
  width: 35px;
  height: 35px;

  border-radius: 50%;
  margin-right: 12px;
`;

export const BoxInput = styled.input`
  padding: 8px 12px;
  font-size: 16px;

  color: #cdcecf;
  background-color: #e4e6e9;
  border-radius: 20px;
  overflow: hidden;

  width: 100%;
  outline: none;
  border: none;

  cursor: pointer;

  &:hover {
    background: #ccced2;
    transition: all 0.3s ease-in-out;
  }
`;

export const WrapperBoxWriterOption = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px;
`;

export const OptionPost = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 6px;

  border-radius: 8px;
  width: 33.33%;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: #ececec;
    transition: all 0.3s ease-in-out;
  }
`;

export const OptionPostIcons = styled.div`
  font-size: 28px;
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  margin-right: 12px;
`;

export const OptionPostName = styled.h4`
  font-size: 16px;
  color: #5d5d5d;
  margin: 0;
`;
