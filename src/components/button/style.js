import styled from "styled-components";

export const Buttons = styled.button`
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.background};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  border-radius: 5px;
  border: none;
  color: ${(props) => props.color};
  padding: 8px 18px;
  width: ${(props) => props.width};
  font-weight: bold;

  &:hover {
    background-color: ${(props) => props.backgroundHover};
    transition: all 0.3s ease-in-out;
  }
`;

export const BorderBottom = styled.span`
  margin: 20px 0;
  display: block;
  border-bottom: 1px solid #ccc;
`;

export const WrapperButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
