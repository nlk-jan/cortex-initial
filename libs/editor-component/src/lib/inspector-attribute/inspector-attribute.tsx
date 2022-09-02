import React from 'react';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
// import Autocomplete from '@mui/material/Autocomplete';
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
// import { Mul }
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Image from 'next/image';
import styled from 'styled-components';

import manIcon from '../man.png';
import settingIcon from '../settings.png';
// import RobotoRegular from '../../assets/fonts/Roboto-Regular.ttf'
import {
  MainWrapper,
  BgColor,
  Col6,
  Heading2,
  Heading3,
  Icon,
  InpBox,
  InpCaption,
  Input,
  Row,
  SpanInp,
  StdTbl,
  ImgText,
  ImgTextImg,
  SpanInpTwo,
  MuiTableCell,
  AttrVaribale,
  IdValueUnit,
  Col12,
  MultiplierInput,
  RowTwo,
  // AutoCompleteField,
  Select,
} from './styles';

const topFilms = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
];

export const isString = (item: any): item is string => {
  return typeof item === 'string';
};

type AutoCompleteFieldProps<T> = {
  selectValue: keyof T;
  options: T[];
};

// const AutoCompleteField = <T extends {}>({
//   selectValue,
//   options,
// }: AutoCompleteFieldProps<T>): React.ReactElement => {
//   return (
//     <Autocomplete<T>
//       id={name}
//       options={options}
//       fullWidth
//       // Error here
//       getOptionLabel={(option) =>
//         isString(option[selectValue]) ? option[selectValue] : ''
//       }
//       renderInput={(params) => <TextField {...params} />}
//     />
//   );
// };

function createData(
  s_no: string,
  att_variable: string,
  att_value: string,
  att_unit: string
) {
  return { s_no, att_variable, att_value, att_unit };
}
const rows = [
  createData('', 'InMult', '99999.99', 'unit'),
  createData('A1A1', 'Variable A', '99999.99', 'unit'),
  createData('B2B2', 'Variable B', '99999.99', 'unit'),
  createData('', 'ResMult', '99999.99', 'unit'),
];

function InspectorAttribute() {
  // @ts-ignore
  const defaultProps: AutocompleteProps = {
    options: dropdownOpt,
    getOptionLabel: (option: { title: String }) => option.title,
  };

  const flatProps = {
    options: dropdownOpt.map((option) => option.title),
  };

  const [value, setValue] = React.useState(null);

  //   let Styles = {
  //     mainWrapper: {
  //       maxWidth: '500px',
  //       marginRight: 'auto',
  //       marginLeft: 'auto',
  //     },
  //     inpectorMainDiv: {
  //       backgroundColor: '#0C2146',
  //       padding: '16px 8px',
  //       color: 'rgb(245, 248, 255)',
  //       fontSize: '16px',
  //     },
  //     MarginTB_0: {
  //       margin: 0,
  //     },
  //   };

  return (
    <div>
      <MainWrapper>
        <Heading2>Inspector - Attributes - Multiplier</Heading2>
        <Heading3>No Change</Heading3>
        <BgColor>
          <Row>
            <Col6>
              <InpBox>
                <Icon>
                  <Image src={settingIcon} alt="Setting" />
                </Icon>
                <SpanInp>Input Multiplier</SpanInp>
              </InpBox>
              <Input type="text" placeholder="Value Unit" />
              <InpCaption> Inherited from Node FFFFFF </InpCaption>
            </Col6>
            <Col6>
              <InpBox>
                <Icon>
                  <Image src={settingIcon} alt="Setting" />
                </Icon>
                <SpanInp>Splitting Ratio</SpanInp>
              </InpBox>
              <Input type="text" placeholder="Ratio" />
            </Col6>
          </Row>
          <StdTbl>
            <ImgText>
              <Image src={settingIcon} alt="Setting" />
              <SpanInpTwo>Multiplier Formula Variables</SpanInpTwo>
            </ImgText>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <MuiTableCell>Attribute ID</MuiTableCell>
                    <MuiTableCell>Attribute Variable</MuiTableCell>
                    <MuiTableCell>Attribute Value</MuiTableCell>
                    <MuiTableCell>Attribute Unit</MuiTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row: any) => (
                    <TableRow key={row.name}>
                      <IdValueUnit>{row.s_no}</IdValueUnit>
                      <AttrVaribale>{row.att_variable}</AttrVaribale>
                      <IdValueUnit>{row.att_value}</IdValueUnit>
                      <IdValueUnit>{row.att_unit}</IdValueUnit>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </StdTbl>
          <Row>
            <ImgText>
              <Icon>
                <Image src={manIcon} alt="Setting" />
              </Icon>
              <SpanInp>Multiplier Formula</SpanInp>
            </ImgText>
          </Row>

          <MultiplierInput type="text" placeholder="Formula" />
          <InpCaption>Multiplier Transformation Formula</InpCaption>
          <RowTwo>
            <Col6>
              <ImgText>
                <Icon>
                  <Image src={settingIcon} alt="Setting" />
                </Icon>
                <SpanInp>Multiplier Formula Result</SpanInp>
              </ImgText>
              <Input type="text" placeholder="ResMult" />
              <InpCaption> Result Of Formula Above </InpCaption>
            </Col6>
            <Col6>
              <InpBox>
                <Icon>
                  <Image src={manIcon} alt="Setting" />
                </Icon>
                <SpanInp>Multiplier Formula Result Unit</SpanInp>
              </InpBox>
              <Select>
                <option value="0"> Degrees </option>
                <option value="1"> Degrees </option>
              </Select>
              {/* <AutoComplete /> */}
              {/* <AutoCompleteField<{ title: string; year: number }>
                options={topFilms}
                selectValue="title"
              /> */}
              {/* <Input type="text" placeholder="Formula Unit" /> */}
              <InpCaption>Select A Unit From List</InpCaption>
            </Col6>
          </RowTwo>
        </BgColor>
      </MainWrapper>
    </div>
  );
}

const dropdownOpt = [{ title: 'Degrees ' }, { title: 'Degrees' }];

export default InspectorAttribute;
