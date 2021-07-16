import styled from "styled-components";

export const ContactWrapper = styled.div`
  width: 20%;
  padding: 20px 12px 12px 12px;
  overflow-y: scroll;
  heigh: 100vh;
  max-height: 100vh;

  position: relative;
  right: 0;
  top: 0;

  margin-top: 60px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ContactHeading = styled.h3`
  font-size: 17px;
  color: #606266;
  padding: 0 12px;
`;

export const ListContact = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const ListContactInFormation = styled.li`
  display: flex;
  align-item: center;
  padding: 12px;

  list-style: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: #e6e6e6;
    transition: all 0.3s ease-in-out;
  }
`;

export const ListContactInFormationImg = styled.img`
  width: 35px;
  height: 35px;

  border-radius: 50%;
  margin-right: 12px;
`;

export const ListContactInFormationName = styled.h3`
  margin: 0;
  display: flex;
  align-items: center;
  color: #333;

  font-size: 16px;
`;
