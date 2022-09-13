import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Text,
} from 'grommet';
import { SettingsOption } from 'grommet-icons';

const AttributeVarTable = () => {
  const border = {
    color: '#76a9ff',
    size: 'medium',
  };
  const borderBottom = {
    borderBottom: '2px solid #76a9ff',
  };
  const unitColor = {
    color: '#828282',
  };

  const tableData = [
    {
      attrId: '',
      attrVariable: 'InMult',
      attrValue: '99999.99',
      attrUnit: '99999.99',
    },
    {
      attrId: 'A1A1',
      attrVariable: 'Variable A',
      attrValue: '99999.99',
      attrUnit: '99999.99',
    },
    {
      attrId: 'B2B2',
      attrVariable: 'Variable A',
      attrValue: '99999.99',
      attrUnit: '99999.99',
    },
    {
      attrId: '',
      attrVariable: 'ResMult',
      attrValue: '99999.99',
      attrUnit: '99999.99',
    },
  ];

  let iconWidth = {
    width: '50px',
    marginLeft: '-10px',
  };

  let label = {
    marginBottom: '2px',
    marginLeft: '-2px',
    color: '#76A9FF',
  };

  return (
    <>
      <Box direction="row" pad="xsmall">
        <SettingsOption color="#76A9FF" style={iconWidth} />
        <Text style={label}>Multiplier Formula Variables</Text>
      </Box>
      <Table align="center">
        <TableHeader>
          <TableRow style={border}>
            <TableCell scope="col" border={{ size: '0px' }}>
              Attribute ID
            </TableCell>
            <TableCell scope="col" border={{ size: '0px' }}>
              Attribute Variable
            </TableCell>
            <TableCell scope="col" border={{ size: '0px' }}>
              Attribute Value
            </TableCell>
            <TableCell scope="col" border={{ size: '0px' }}>
              Attribute Unit
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((item, index) => {
            return (
              <TableRow>
                <TableCell scope="row" style={unitColor} key={index}>
                  {item.attrId}
                </TableCell>
                <TableCell style={borderBottom}>{item.attrVariable}</TableCell>
                <TableCell style={unitColor}>{item.attrValue}</TableCell>
                <TableCell style={unitColor}>{item.attrUnit}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default AttributeVarTable;
