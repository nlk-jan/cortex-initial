import styled from '@emotion/styled';

export const BgColor = styled.div`
  background-color: #0c2146;
  padding: 16px 8px;
  position: relative;
  color: rgb(245, 248, 255);
  font-size: 16px;
`;

export const Row = styled.div`
  margin-top: 10px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
`;

export const Col12 = styled.div`
  max-width: 100%;
  flex: 0 0 100%;
`;

export const Col_6 = styled.div`
  max-width: 48%;
  flex: 0 0 48%;
`;

export const MainWrapper = styled.div`
  max-width: 500px;
  margin-right: auto;
  margin-left: auto;
`;
export const MainHeading = styled.h2`
  font-size: 1.5em;
  color: #000;
`;
export const SubHeading = styled.h3`
  font-size: 1.17em;
  color: #000;
  margin: 0;
`;

export const StdTable = styled.div`
  padding: 15px 0;
`;

export const ImgText = styled.div`
  display: flex;
  color: #76a9ff;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
  margin-bottom: 2px;
`;

export const ImgTextImg = styled.img`
  padding-right: 8px;
`;

export const ImageTitle = styled.span`
  padding-right: 8px;
  margin-left: 8px;
`;

export const MuiTableCell = styled.td`
  color: #76a9ff;
  font-size: 16px;
  border-bottom: 0;
  padding: 10px;
  line-height: 20px;
  font-weight: 400;
`;

export const TdAttribute = styled.td`
  border-bottom: 1px solid #76a9ff;
`;

export const TableDataCell = styled.td`
  color: #828282;
  font-size: 16px;
  border-bottom: 0;
  padding: 10px;
  line-height: 20px;
  font-weight: 400;
`;

export const MultiplierInput = styled.input`
  color: #f5f8ff;
  font-size: 16px;
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  padding: px 0px;
  border-bottom: 1px solid #76a9ff;
  ::placeholder {
    color: #828282;
  }
`;
