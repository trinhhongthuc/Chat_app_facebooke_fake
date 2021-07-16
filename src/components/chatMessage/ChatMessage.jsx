import React from "react";
import {
  ChatMessageHeader,
  ChatMessageHeaderInformation,
  ChatMessageHeaderInformationIcon,
  ChatMessageHeaderInformationImg,
  ChatMessageHeaderInformationName,
  ChatMessageHeaderInformationWrapper,
  ChatMessages,
  DisplayMessage,
  WrapperMessage,
  WrapperMessageDisplay,
  WrapperWriteMessage,
  WrapperWriteMessageIcon,
  WrapperWriteMessageInput,
} from "./style";

import imgPost from "../../assets/post.jpg";

import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineSend } from "react-icons/ai";

const ChatMessage = ({ setHidden }) => {
  const OnClickHidden = (e) => {
    setHidden(false);
  };

  return (
    <ChatMessages>
      <ChatMessageHeader>
        <ChatMessageHeaderInformation>
          <ChatMessageHeaderInformationImg
            src={imgPost}
            alt="https://www.facebook.com/100009528500454/"
          />

          <ChatMessageHeaderInformationName>
            Trinh hong thuc
          </ChatMessageHeaderInformationName>
        </ChatMessageHeaderInformation>
        <ChatMessageHeaderInformationWrapper>
          <ChatMessageHeaderInformationIcon onClick={(e) => OnClickHidden(e)}>
            <AiOutlineClose />
          </ChatMessageHeaderInformationIcon>
        </ChatMessageHeaderInformationWrapper>
      </ChatMessageHeader>
      {/* hien thi message */}

      <DisplayMessage>
        <WrapperMessage display="flex-start">
          <WrapperMessageDisplay background="#ccc" color="#fff">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            molestias veritatis tempora alias ad enim vero obcaecati itaque
            possimus nobis non quasi omnis repudiandae voluptatibus! Autem error
            quibusdam eaque aperiam!
          </WrapperMessageDisplay>
        </WrapperMessage>

        <WrapperMessage display="flex-end">
          <WrapperMessageDisplay background="blue" color="#fff">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            molestias veritatis tempora alias ad enim vero obcaecati itaque
            possimus nobis non quasi omnis repudiandae voluptatibus! Autem error
            quibusdam eaque aperiam!
          </WrapperMessageDisplay>
        </WrapperMessage>

        <WrapperMessage display="flex-start">
          <WrapperMessageDisplay background="#ccc" color="#fff">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            molestias veritatis tempora alias ad enim vero obcaecati itaque
            possimus nobis non quasi omnis repudiandae voluptatibus! Autem error
            quibusdam eaque aperiam!
          </WrapperMessageDisplay>
        </WrapperMessage>

        <WrapperMessage display="flex-end">
          <WrapperMessageDisplay background="blue" color="#fff">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            molestias veritatis tempora alias ad enim vero obcaecati itaque
            possimus nobis non quasi omnis repudiandae voluptatibus! Autem error
            quibusdam eaque aperiam!
          </WrapperMessageDisplay>
        </WrapperMessage>
      </DisplayMessage>

      <WrapperWriteMessage>
        <WrapperWriteMessageInput type="text" placeholder="New message" />
        <WrapperWriteMessageIcon>
          <AiOutlineSend />
        </WrapperWriteMessageIcon>
      </WrapperWriteMessage>
    </ChatMessages>
  );
};

export default ChatMessage;
