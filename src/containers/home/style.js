import styled from "styled-components";

export const ContentHome = styled.div`
  width: 100%;
  background: #f0f2f5;
  display: flex;
`;

export const WrapperContentCenter = styled.div`
  width: 60%;
  padding: 0 10%;
  padding-top: 18px;
  margin-top: 60px;
  height: calc(100vh - 60px);

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
