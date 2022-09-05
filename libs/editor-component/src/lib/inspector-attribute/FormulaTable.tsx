const FormulaTable = ({
  TableHead,
  TableRow,
  MuiTableCell,
  TableBody,
  rows,
  IdValueUnit,
  AttrVaribale,
}: any) => {
  let Array = [
    {
      AttributeName: 'Attribute ID',
      Attribute_Variable: 'Attribute Variable',
      Attribute_Value: 'Attribute Value',
      Attribute_Unit: 'Attribute Unit',
    },
  ];
  return (
    <>
      <TableHead>
        {Array.map((item, index) => {
          return (
            <TableRow key={index}>
              <MuiTableCell>{item.AttributeName}</MuiTableCell>
              <MuiTableCell>{item.Attribute_Variable}</MuiTableCell>
              <MuiTableCell>{item.Attribute_Value}</MuiTableCell>
              <MuiTableCell>{item.Attribute_Unit}</MuiTableCell>
            </TableRow>
          );
        })}
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
    </>
  );
};

export default FormulaTable;
