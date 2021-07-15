import styled from "styled-components";

export const PostWrapper = styled.div`
  background: #fff;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 0.5px 2px rgb(0, 0, 0, 0.2);
`;

export const HeaderPost = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
`;

export const HeaderPostLeft = styled.div`
  display: flex;
  width: 90%;
`;

export const HeaderPostLeftImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;

  margin-right: 12px;
`;

export const HeaderPostLeftContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderPostLeftTitle = styled.h4`
  font-size: 16px;
  color: #333;
  margin-bottom: 0;
`;

export const HeaderPostLeftDate = styled.p`
  font-size: 14px;
  color: #6a676b;
  margin-bottom: 0;
`;

export const HeaderPostRight = styled.div`
  display: flex;
  align-items: center;
  width: 10%;
  justify-content: flex-end;

  height: 100%;
`;

export const HeaderPostRightIcon = styled.div`
  font-size: 25px;
  color: #333;
  display: flex;

  justify-content: center;
  align-items: center;

  width: 35px;
  height: 35px;

  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background: #eeeeef;
    transition: all 0.3s ease-in-out;
  }
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostContentText = styled.p`
  font-size: 16px;
  color: #333;
  padding: 0 12px 12px 12px;
  margin: 0;
`;

export const PostContentWrapper = styled.div`
  width: 100%;
  padding-bottom: 12px;
`;

export const PostContentImg = styled.img`
  width: 100%;
  height: auto;
`;

export const PostContentVideo = styled.video`
  width: 100%;
  height: auto;
`;
