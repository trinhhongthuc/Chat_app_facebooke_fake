import styled from "styled-components";

export const Buttons = styled.button`
  font-size: ${(props) => props.fontSize} || 15px;
  background-color: ${(props) => props.background} || #166fe5;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  border-radius: 5px;

  &:hover {
    background-color: rgba(${(props) => props.background} || #166fe5, 0.5);
  }
`;
