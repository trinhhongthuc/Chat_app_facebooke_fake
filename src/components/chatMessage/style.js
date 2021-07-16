import styled from "styled-components";

export const ChatMessages = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 350px;

  position: fixed;
  bottom: 0;
  right: 100px;
  background: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.5);
`;

export const ChatMessageHeader = styled.div`
  display: flex;
  padding: 6px;
  border-bottom: 1px solid #ccc;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
`;

export const ChatMessageHeaderInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
`;

export const ChatMessageHeaderInformationImg = styled.img`
  width: 35px;
  height: 35px;

  border-radius: 50%;
  margin-right: 12px;
`;

export const ChatMessageHeaderInformationName = styled.h4`
  font-size: 16px;
  color: #333;
  display: flex;

  align-items: center;
  justify-content: flex-start;
  margin: 0;
`;

export const ChatMessageHeaderInformationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 20%;
`;

export const ChatMessageHeaderInformationIcon = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 25px;
  height: 25px;
  border-radius: 50%;

  margin-right: 12px;
  cursor: pointer;

  &:hover {
    background: #e4e4e4;
    transition: all 0.3s ease-in-out;
  }
`;

export const DisplayMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  height: 80%;
  overflow-y: scroll;
`;

export const WrapperMessage = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.display};
`;

export const WrapperMessageDisplay = styled.p`
  margin: 0;
  padding: 6px 12px;
  color: ${(props) => props.color};
  font-size: 16px;

  width: 70%;
  background: ${(props) => props.background};
  margin: 12px;
  border-radius: 12px;
`;

export const WrapperWriteMessage = styled.div`
  display: flex;
  padding: 12px;
`;

export const WrapperWriteMessageInput = styled.input`
  padding: 7px 12px;
  font-size: 16px;

  color: #333;
  font-weight: 300;
  width: 100%;
  border: none;

  outline: none;
  background: #f0f2f5;

  border-radius: 25px;
  margin-right: 6px;
`;

export const WrapperWriteMessageIcon = styled.div`
  font-size: 18px;
  color: blue;
  cursor: pointer;

  width: 40px;
  height: 35px;

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #e4e4e4;
  }
`;
