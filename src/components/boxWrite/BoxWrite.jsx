import React, { useState, useCallback } from "react";
import {
  BoxInput,
  BoxWriteImg,
  OptionPost,
  OptionPostIcons,
  OptionPostName,
  WrapperBoxWriter,
  WrapperBoxWriterOption,
  WrapperFelling,
} from "./style";

import img from "../../assets/logo.png";

import { BiImageAdd } from "react-icons/bi";
import FormNewPost from "components/formCreateNewPost/FormNewPost";

const BoxWrite = () => {
  const [hidden, setHidden] = useState(false);

  const OnClickInput = useCallback(() => {
    setHidden(true);
  }, []);

  return (
    <>
      <WrapperBoxWriter>
        <WrapperFelling>
          <BoxWriteImg src={img} alt="img" />
          <BoxInput
            placeholder="Bạn đang nghĩ gì?"
            onClick={() => OnClickInput()}
          />
        </WrapperFelling>

        <WrapperBoxWriterOption>
          <OptionPost>
            <OptionPostIcons color="#44B45F">
              <BiImageAdd />
            </OptionPostIcons>

            <OptionPostName>Anh/Video</OptionPostName>
          </OptionPost>

          <OptionPost>
            <OptionPostIcons color="#44B45F">
              <BiImageAdd />
            </OptionPostIcons>

            <OptionPostName>Anh/Video</OptionPostName>
          </OptionPost>

          <OptionPost>
            <OptionPostIcons color="#44B45F">
              <BiImageAdd />
            </OptionPostIcons>

            <OptionPostName>Anh/Video</OptionPostName>
          </OptionPost>
        </WrapperBoxWriterOption>
      </WrapperBoxWriter>

      {hidden ? <FormNewPost setHidden={setHidden}></FormNewPost> : ""}
    </>
  );
};

export default BoxWrite;
