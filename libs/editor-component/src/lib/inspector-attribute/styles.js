// import styled from 'styled-components';
import styled from '@emotion/styled';
// let Styles = {
//   //   heading: {
//   //     maxWidth: 500,
//   //     marginRight: 'auto',
//   //     marginLeft: 'auto',
//   //   },
//   //   designBox: {
//   //     backgroundColor: 'var(--bgcolor)',
//   //     padding: '16px 8px',
//   //     position: 'relative',
//   //   },
//   //   stdForm: {
//   //     color: ' #F5F8FF',
//   //     fontSize: '16px',
//   //     confirmOverRide: {
//   //       paddingTtop: '0px',
//   //       marginBottom: '5px',
//   //     },
//   //   },
//   //   img_text: {
//   //     display: 'flex',
//   //     color: '#76A9FF',
//   //     alignItems: 'center',
//   //     justifyContent: 'flex-start',
//   //     fontSize: '14px',
//   //     marginBottom: '2px',
//   //     img: {
//   //       paddingRight: '8px',
//   //     },
//   //   },
//   //   imgFluid: {
//   //     maxWidth: 'fit-content',
//   //     width: '100%',
//   //     height: 'auto',
//   //   },
//   //   grayClr: {
//   //     label: {
//   //       color: '#282828',
//   //     },
//   //   },
// };
// export default Styles;

export const MainWrapper = styled.div`
  max-width: 500px;
  margin-right: auto;
  margin-left: auto;
`;
export const Heading2 = styled.h2`
  font-size: 1.5em;
  color: #000;
`;
export const Heading3 = styled.h3`
  font-size: 1.17em;
  color: #000;
  margin: 0;
`;
export const BgColor = styled.div`
  background-color: #0c2146;
  padding: 16px 8px;
  position: relative;
  color: rgb(245, 248, 255);
  font-size: 16px;
`;
export const Row = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
`;
export const Col6 = styled.div`
  max-width: 48%;
  flex: 0 0 48%;
`;
export const Col12 = styled.input`
  max-width: 100%;
  flex: 0 0 100%;
`;
export const InpBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5px;
`;
export const SpanInp = styled.span`
  color: rgb(118, 169, 255);
  font-size: 14px;
`;
export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 8px;
`;
export const Input = styled.input`
  color: #f5f8ff;
  font-size: 16px;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid #76a9ff;
  ::placeholder {
    color: #f5f8ff;
  }
`;
export const InpCaption = styled.p`
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

export const StdTbl = styled.div`
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

export const SpanInpTwo = styled.span`
  padding-right: 8px;
  margin-left: 8px;
`;

// export const TableCont = styled.table`
//   color: #828282;
// `;

export const MuiTableCell = styled.td`
  color: #76a9ff;
  font-size: 16px;
  border-bottom: 0;
  padding: 10px;
  line-height: 20px;
  font-weight: 400;
`;

export const AttrVaribale = styled.td`
  border-bottom: 1px solid #76a9ff;
`;

export const IdValueUnit = styled.td`
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
export const RowTwo = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Select = styled.select`
  color: #f5f8ff;
  font-size: 16px;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid #76a9ff;
  width: 100%;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
