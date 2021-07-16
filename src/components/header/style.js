import styled from "styled-components";
import { Link } from "react-router-dom";
export const Headers = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.5);
  padding: 10px;

  z-index: 1000;
  position: fixed;
  top: 0;
`;

export const WrapperLeft = styled.div`
  display: flex;
  width: 30%;
  margin-left: 20px;
`;

export const WrapperCenter = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-around;
  height: 100%;
`;

export const WrapperRight = styled.div`
  display: flex;
  width: 30%;
  justify-content: flex-end;
  padding: 0 20px 0 0;
  align-items: center;
`;

export const WrapperLeftSearch = styled.div`
  display: flex;
  align-items: center;
  background: #f0f2f5;
  border-radius: 30px;
  overflow: hidden;
  padding: 0 12px 0 12px;
  margin-left: 12px;
  width: 60%;
`;

export const InputSearch = styled.input`
  background: #f0f2f5;
  font-size: 14px;
  border: none;
  outline: none;
  padding: 3px 8px;
  color: #797f87;
  width: 100%;
`;

export const WrapperLeftLogo = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const IconSearch = styled.div`
  display: flex;
  align-items: center;
  color: #797f87;
`;

export const WrapperIconCenter = styled(Link)`
  display: flex;
  justify-content: center;
  font-size: 28px;
  color: #797f87;
  width: 100px;
  height: 100%;
  cursor: pointer;
  padding: 0 5px;
  align-items: center;

  &:hover {
    background: #f0f2f5;
    border-radius: 5px;
    color: #1878e7;
    transition: all 0.3s ease-in-out;
  }
`;

export const Information = styled.div`
  height: 100%;
  width: auto;
  background: #f0f2f5;
  display: flex;

  justify-content: center;
  align-items: center;
  border-radius: 26px;
  padding: 4px 10px;

  margin: 0 8px;
`;

export const Avatar = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

export const InformationName = styled.h4`
  font-size: 14px;
  color: #333;
  text-transform: capitalize;
  margin: 0;
  margin-left: 4px;
`;

export const WrapperRightContent = styled.div`
  margin: 0 8px;
  background: #f0f2f5;

  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;

  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #333;

  cursor: pointer;
`;
