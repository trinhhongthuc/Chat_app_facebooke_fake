import styled from "styled-components";

export const WrapperContent = styled.div`
  height: 100vh;
  max-height: 100vh;
  width: 100%;

  background: rgba(255, 255, 255, 0.5);
`;

export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 450px;
  height: auto;

  background: #fff;
  box-sizing: border-box;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.5);
`;

export const Heading = styled.h1`
  font-size: 30px;
  font-weight: bold;
  padding: 18px 18px 8px 18px;
  margin: 0;
`;

export const TextNote = styled.p`
  font-size: 16px;
  font-weight: 400;

  color: #606770;
  padding: 0 18px;
`;

export const BorderBottom = styled.span`
  border-bottom: 1px solid #ccc;

  //   padding: 15px 0;
  display: block;
`;

export const WrapperFormContent = styled.div`
  padding: 12px 18px;
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 18px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-right: 18px;
  position: relative;
  top: 5px;
  cursor: pointer;
`;

export const Input = styled.input`
  padding: 8px 12px;
  font-size: 16px;
  //   text-transform: capitalize;

  background-color: #f5f6f7;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #33;
  margin-bottom: 6px;
`;

export const ContentLabel = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const TextName = styled.p`
    margin: 0;
    margin-left: 12px;
    color: #3333
    font-size: 16px;
    position: relative;
    top: -2px;
`;

export const InputRadio = styled.input`
  width: 14px;
  height: 14px;
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 18px 18px 18px;
`;
