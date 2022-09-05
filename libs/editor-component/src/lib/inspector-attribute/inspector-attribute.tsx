import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Image from 'next/image';
import manIcon from '../man.png';
import settingIcon from '../settings.png';
import Comment_Section from './Comment_Section';
import FormulaTable from './FormulaTable';
import Input_Inspector from './Input_Inspector';
import Multiplier_Formula from './Multiplier_Formula';
import Multiplier_Formula_Result from './Multiplier_Formula_Result';
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
  SpanInpTwo,
  MuiTableCell,
  AttrVaribale,
  IdValueUnit,
  MultiplierInput,
  RowTwo,
  Select,
  CommentTextArea,
} from './styles';

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
  return (
    <div>
      <MainWrapper>
        <Heading2>Inspector - Attributes - Multiplier</Heading2>
        <Heading3>No Change</Heading3>
        <BgColor>
          <Row>
            <Input_Inspector
              Col6={Col6}
              InpBox={InpBox}
              Icon={Icon}
              settingIcon={settingIcon}
              SpanInp={SpanInp}
              Input={Input}
              InpCaption={InpCaption}
              InpText="Input Multiplier"
              placeHolder="Value Unit"
              downSpanText="Inherited from Node FFFFFF"
            />
            <Input_Inspector
              Col6={Col6}
              InpBox={InpBox}
              Icon={Icon}
              settingIcon={settingIcon}
              SpanInp={SpanInp}
              Input={Input}
              InpCaption={InpCaption}
              downSpanText=""
              InpText="Splitting Ratio"
              placeHolder="Ratio"
            />
          </Row>
          <StdTbl>
            <ImgText>
              <Image src={settingIcon} alt="Setting" />
              <SpanInpTwo>Multiplier Formula Variables</SpanInpTwo>
            </ImgText>
            <TableContainer>
              <Table aria-label="simple table">
                <FormulaTable
                  TableHead={TableHead}
                  rows={rows}
                  TableRow={TableRow}
                  MuiTableCell={MuiTableCell}
                  TableBody={TableBody}
                  IdValueUnit={IdValueUnit}
                  AttrVaribale={AttrVaribale}
                />
              </Table>
            </TableContainer>
          </StdTbl>
          <Multiplier_Formula
            Row={Row}
            ImgText={ImgText}
            Icon={Icon}
            src={manIcon}
            SpanInp={SpanInp}
            MultiplierInput={MultiplierInput}
            InpCaption={InpCaption}
            topText="Multiplier Formula"
            placeHolder="Formula"
            bottomText="Multiplier Transformation Formula"
          />
          <RowTwo>
            <Input_Inspector
              Col6={Col6}
              InpBox={InpBox}
              Icon={Icon}
              settingIcon={settingIcon}
              SpanInp={SpanInp}
              Input={Input}
              InpCaption={InpCaption}
              InpText="Multiplier Formula Result"
              downSpanText="Result of Formula above"
            />
            <Multiplier_Formula_Result
              Col6={Col6}
              InpBox={InpBox}
              Icon={Icon}
              SpanInp={SpanInp}
              Select={Select}
              InpCaption={InpCaption}
              image={manIcon}
              InpText="Multiplier Formula Result Unit"
              downSpanText="Select A Unit From List"
            />
          </RowTwo>
          <RowTwo>
            <Input_Inspector
              Col6={Col6}
              InpBox={InpBox}
              Icon={Icon}
              settingIcon={settingIcon}
              SpanInp={SpanInp}
              Input={Input}
              InpCaption={InpCaption}
              InpText="User Multiplier Value"
              downSpanText="Overrides all other values"
            />
            <Multiplier_Formula_Result
              Col6={Col6}
              InpBox={InpBox}
              Icon={Icon}
              SpanInp={SpanInp}
              Select={Select}
              InpCaption={InpCaption}
              image={manIcon}
              InpText="User Multiplier Unit"
              downSpanText="Select A Unit From List"
            />
          </RowTwo>
          <Multiplier_Formula
            Row={Row}
            ImgText={ImgText}
            Icon={Icon}
            src={settingIcon}
            SpanInp={SpanInp}
            MultiplierInput={MultiplierInput}
            InpCaption={InpCaption}
            topText="Output Multiplier"
            placeHolder="Output Value Output Unit"
            bottomText="Value transformed by above forumula and variables"
          />
          <Comment_Section
            Row={Row}
            ImgText={ImgText}
            Icon={Icon}
            src={manIcon}
            SpanInp={SpanInp}
            CommentTextArea={CommentTextArea}
          />
        </BgColor>
      </MainWrapper>
    </div>
  );
}

export default InspectorAttribute;
