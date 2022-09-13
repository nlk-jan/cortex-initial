import styled from 'styled-components';

export const CommentBoxMain = styled.div`
  display: block;
  max-width: 500px;
  margin-right: auto;
  margin-left: auto;
  background: #133774;
  border-radius: 8px;
  padding: 8px;
  textarea {
    display: block;
    width: 100%;
    resize: none;
    background-color: #133774;
    border: none;
    outline: none;
    border-bottom: 1px solid #76A9FF;
    font-family: $font-family_1;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: $color_1;
    padding-top: 100px;
    padding-bottom: 5px;
`;

export const CommentActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  div {
    &:first-child {
      .btnImg {
        margin-right: 10px;
      }
    }
  }
`;

export const ButtonImage = styled.button`
  display: inline-flex;
  background: none;
  outline: none;
  border: none;
  align-items: center;
  cursor: pointer;
  img {
    max-width: 35px;
  }
`;
