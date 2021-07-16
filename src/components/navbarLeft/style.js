import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContentLeft = styled.div`
  width: 20%;
  padding: 20px 18px;
  background: #f0f2f5;
  height: calc(100vh -60px);

  overflow-y: scroll;
  margin-top: 60px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NavContentLeft = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 12px 20px 12px 12px;
  text-decoration: none;

  &:hover {
    background: #e2e2e2;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;

export const NavInformationImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 12px;
  border-radius: 4px;
`;

export const NavInformationTitle = styled.h4`
  font-size: 16px;
  color: #333;
  text-transform: capitalize;
  margin: 0;
`;

export const NavLeftIcon = styled.div`
  font-size: 30px;
  margin-right: 12px;
  color: #22a5f0;
  display: flex;
  align-items: center;
`;

export const NavLeftTitle = styled.h3`
  font-size: 16px;
  color: #333;
  margin: 0;
`;
