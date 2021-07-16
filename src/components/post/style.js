import styled from "styled-components";

export const PostWrapper = styled.div`
  background: #fff;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 0.5px 2px rgb(0, 0, 0, 0.2);
  margin: 14px 0;
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

export const PostContentDisplayFelling = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  margin: 0 12px;
  padding-top: 0;

  border-bottom: 1px solid #ccc;
  // border-top: 1px solid #ccc;
`;

export const PostWrapperFelling = styled.div`
  // padding: 12px;
  display: flex;

  align-items: center;
  justify-content: flex-start;
  width: 70%;
`;

export const PostWrapperFellingIcon = styled.div`
  font-size: 16px;
  color: ${(props) => props.color};

  background: ${(props) => props.background};
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  width: 25px;
  height: 25px;
  box-shadow: 0px 0px 2px ${(props) => props.background};
`;

export const PostWrapperFellingCounter = styled.h5`
  margin: 0;
  margin-left: 12px;

  font-size: 16px;
  color: #606266;
  font-weight: 300;
`;

export const PostWrapperComment = styled.p`
  font-size: 16px;
  color: #606266;

  font-weight: 300;
  display: flex;
  width: 30%;
  justify-content: flex-end;
  margin: 0;
`;

export const PostDisplayFelling = styled.div`
  padding: 6px 0;
  margin: 0 12px;
  display: flex;

  align-items: center;
  border-bottom: 1px solid #ccc;
`;

export const PostDisplayFellingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;

  border-radius: 3px;

  &:hover {
    background: #eaeaea;
    cursor: pointer;
    :transition: all 0.3s ease-in-out;
  }
`;

export const PostDisplayFellingIcon = styled.div`
  font-size: 22px;
  color: #606266;
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 6px 0;
`;

export const PostDisplayFellingName = styled.h4`
  font-size: 16px;
  color: #606266;

  margin: 0;
  margin-left: 12px;
  tex-transform: capitalize;
`;

export const PostComment = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  padding: 12px;
`;

export const PostCommentImg = styled.img`
  width: 35px;
  height: 35px;

  border-radius: 50%;
`;

export const PostCommentInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  font-size: 16px;
  color: #333;

  outline: none;
  border: none;
  border-radius: 25px;
  background: #f0f2f5;

  margin-left: 12px;
`;
