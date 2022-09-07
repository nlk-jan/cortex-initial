import styled from 'styled-components';

export const InputTitle = styled.span`
  color: rgb(118, 169, 255);
  font-size: 14px;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5px;
`;

export const InputMessage = styled.p`
  font-size: 12px;
  padding: 0px;
  margin: 0;
  display: inline-block;
  color: #828282;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  top: -4px;
`;

export const Input = styled.input`
  color: #f5f8ff;
  font-size: 16px;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid #76a9ff;
  width: 100%;
  ::placeholder {
    color: #f5f8ff;
  }
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 8px;
`;
