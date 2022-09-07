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
import InputText from './Input';
import SelectBox from './Select';

import {
  MainWrapper,
  Col_6,
  Col12,
  Row,
  MainHeading,
  SubHeading,
  StdTable,
  ImgText,
  ImageTitle,
  MuiTableCell,
  TdAttribute,
  TableDataCell,
  BgColor,
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
    <MainWrapper>
      <MainHeading>Inspector - Attributes - Multiplier</MainHeading>
      <SubHeading>No Change</SubHeading>
      <BgColor>
        <Row>
          <Col_6>
            <InputText
              icon={settingIcon}
              title="Input Multiplier"
              placeHolder="Value Unit"
              helperText="Inherited from Node FFFFFF"
            />
          </Col_6>
          <Col_6>
            <InputText
              icon={settingIcon}
              title="Splitting Ratio"
              placeHolder="Ratio"
              helperText=""
            />
          </Col_6>
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
        <Row>
          <Col12>
            <InputText
              icon={manIcon}
              title="Multiplier Formula"
              placeHolder="Formula"
              helperText="Multiplier Transformation Formula"
            />
          </Col12>
        </Row>
        <Row>
          <Col_6>
            <InputText
              icon={settingIcon}
              title="Multiplier Formula Result"
              placeHolder=""
              helperText="Result of Formula above"
            />
          </Col_6>
          <Col_6>
            <SelectBox
              icon={manIcon}
              title="Multiplier Formula Result Unit"
              helperText="Select a Unit from List"
            >
              <option value="0"> Degrees </option>
              <option value="1"> Degrees </option>
            </SelectBox>
          </Col_6>
        </Row>
        <Row>
          <Col_6>
            <InputText
              icon={settingIcon}
              title="User Multiplier Value"
              placeHolder=""
              helperText="Overrides all other values"
            />
          </Col_6>
          <Col_6>
            <SelectBox
              icon={manIcon}
              title="User Multiplier Unit"
              helperText="Select a Unit from List"
            >
              <option value="0"> Degrees </option>
              <option value="1"> Degrees </option>
            </SelectBox>
          </Col_6>
        </Row>
        <Row>
          <Col12>
            <InputText
              icon={settingIcon}
              title="Output Multiplier"
              placeHolder="Output Value Output Unit"
              helperText="Value transformed by above forumula and variables"
            />
          </Col12>
        </Row>
        <Row>
          <Col12>
            <CommentSection
              icon={manIcon}
              title="Comment"
              placeHolder=""
              helperText=""
            />
          </Col12>
        </Row>
      </BgColor>
    </MainWrapper>
  );
}

export default InspectorAttribute;
