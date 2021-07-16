import styled from "styled-components";

export const DisplayWrapper = styled.div`
  display: flex;
  margin: 0 12px;
`;

export const DisplayCommentsImg = styled.img`
  width: 35px;
  height: 35px;

  border-radius: 50%;
  margin-right: 12px;
`;

export const DisplayComments = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DisplayCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  background: #f0f2f5;
  border-radius: 12px;
`;

export const DisplayCommentAction = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
`;

export const DisplayCommentActionText = styled.h5`
  font-size: 13px;
  color: #6b6b6b;
  text-transform: capitalize;
  padding: 6px 8px 6px 0;
  cursor: pointer;
`;

export const DisplayCommentActionDate = styled.h5`
  font-size: 13px;
  color: #333;
  font-weight: 300;
`;

export const DisplayCommentsTitle = styled.h3`
  margin: 0;
  font-size: 16px;
`;

export const DisplayCommentsNotes = styled.p`
  margin: 0;
  font-size: 16px;

  color: #333;
  font-weight: 300;
`;
