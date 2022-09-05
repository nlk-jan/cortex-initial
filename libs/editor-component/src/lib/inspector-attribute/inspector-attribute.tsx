import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Image from 'next/image';
import manIcon from '../man.png';
import settingIcon from '../settings.png';
import CommentSection from './Comment_Section';
import FormulaTable from './FormulaTable';
import InputInspector from './Input_Inspector';
import MultiplierFormula from './Multiplier_Formula';
import MultiplierFormulaResult from './Multiplier_Formula_Result';
import {
  MainWrapper,
  BgColor,
  Col_6,
  MainHeading,
  SubHeading,
  Icon,
  InputBox,
  InputMessage,
  Input,
  Row,
  InputTitle,
  StdTable,
  ImgText,
  ImageTitle,
  MuiTableCell,
  TdAttribute,
  TableDataCell,
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
        <MainHeading>Inspector - Attributes - Multiplier</MainHeading>
        <SubHeading>No Change</SubHeading>
        <BgColor>
          <Row>
            <InputInspector
              Col_6={Col_6}
              InputBox={InputBox}
              Icon={Icon}
              settingIcon={settingIcon}
              InputTitle={InputTitle}
              Input={Input}
              InputMessage={InputMessage}
              InputText="Input Multiplier"
              placeHolder="Value Unit"
              inputCaption="Inherited from Node FFFFFF"
            />
            <InputInspector
              Col_6={Col_6}
              InputBox={InputBox}
              Icon={Icon}
              settingIcon={settingIcon}
              InputTitle={InputTitle}
              Input={Input}
              InputMessage={InputMessage}
              inputCaption=""
              InputText="Splitting Ratio"
              placeHolder="Ratio"
            />
          </Row>
          <StdTable>
            <ImgText>
              <Image src={settingIcon} alt="Setting" />
              <ImageTitle>Multiplier Formula Variables</ImageTitle>
            </ImgText>
            <TableContainer>
              <Table aria-label="simple table">
                <FormulaTable
                  TableHead={TableHead}
                  rows={rows}
                  TableRow={TableRow}
                  MuiTableCell={MuiTableCell}
                  TableBody={TableBody}
                  TableDataCell={TableDataCell}
                  TdAttribute={TdAttribute}
                />
              </Table>
            </TableContainer>
          </StdTable>
          <MultiplierFormula
            Row={Row}
            ImgText={ImgText}
            Icon={Icon}
            src={manIcon}
            InputTitle={InputTitle}
            MultiplierInput={MultiplierInput}
            InputMessage={InputMessage}
            label="Multiplier Formula"
            placeHolder="Formula"
            inputCaption="Multiplier Transformation Formula"
          />
          <Row>
            <InputInspector
              Col_6={Col_6}
              InputBox={InputBox}
              Icon={Icon}
              settingIcon={settingIcon}
              InputTitle={InputTitle}
              Input={Input}
              InputMessage={InputMessage}
              InputText="Multiplier Formula Result"
              inputCaption="Result of Formula above"
            />
            <MultiplierFormulaResult
              Col_6={Col_6}
              InputBox={InputBox}
              Icon={Icon}
              InputTitle={InputTitle}
              Select={Select}
              InputMessage={InputMessage}
              image={manIcon}
              InputText="Multiplier Formula Result Unit"
              inputCaption="Select A Unit From List"
            />
          </Row>
          <Row>
            <InputInspector
              Col_6={Col_6}
              InputBox={InputBox}
              Icon={Icon}
              settingIcon={settingIcon}
              InputTitle={InputTitle}
              Input={Input}
              InputMessage={InputMessage}
              InputText="User Multiplier Value"
              inputCaption="Overrides all other values"
            />
            <MultiplierFormulaResult
              Col_6={Col_6}
              InputBox={InputBox}
              Icon={Icon}
              InputTitle={InputTitle}
              Select={Select}
              InputMessage={InputMessage}
              image={manIcon}
              InputText="User Multiplier Unit"
              inputCaption="Select A Unit From List"
            />
          </Row>
          <MultiplierFormula
            Row={Row}
            ImgText={ImgText}
            Icon={Icon}
            src={settingIcon}
            InputTitle={InputTitle}
            MultiplierInput={MultiplierInput}
            InputMessage={InputMessage}
            label="Output Multiplier"
            placeHolder="Output Value Output Unit"
            inputCaption="Value transformed by above forumula and variables"
          />
          <CommentSection
            Row={Row}
            ImgText={ImgText}
            Icon={Icon}
            src={manIcon}
            InputTitle={InputTitle}
            CommentTextArea={CommentTextArea}
          />
        </BgColor>
      </MainWrapper>
    </div>
  );
}

export default InspectorAttribute;
