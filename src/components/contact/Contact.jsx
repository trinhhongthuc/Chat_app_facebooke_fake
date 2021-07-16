import React, { useState } from "react";
import {
  ContactHeading,
  ContactWrapper,
  ListContact,
  ListContactInFormation,
  ListContactInFormationImg,
  ListContactInFormationName,
} from "./style";

// img
import imgPost from "../../assets/post.jpg";
import ChatMessage from "components/chatMessage/ChatMessage";

const Contact = () => {
  const [hidden, setHidden] = useState(false);

  const DisplayMessage = (e) => {
    setHidden(true);
  };

  return (
    <>
      <ContactWrapper>
        <ContactHeading>Người liên hệ</ContactHeading>
        <ListContact>
          <ListContactInFormation onClick={(e) => DisplayMessage(e)}>
            <ListContactInFormationImg src={imgPost} />
            <ListContactInFormationName>
              trinh hong thuc
            </ListContactInFormationName>
          </ListContactInFormation>

          <ListContactInFormation onClick={(e) => DisplayMessage(e)}>
            <ListContactInFormationImg src={imgPost} />
            <ListContactInFormationName>
              trinh hong thuc
            </ListContactInFormationName>
          </ListContactInFormation>
        </ListContact>
      </ContactWrapper>

      {hidden ? <ChatMessage setHidden={setHidden}></ChatMessage> : ""}
    </>
  );
};

export default Contact;
