const FormulaTable = ({
  TableHead,
  TableRow,
  MuiTableCell,
  TableBody,
  rows,
  TableDataCell,
  TdAttribute,
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
            <TableDataCell>{row.s_no}</TableDataCell>
            <TdAttribute>{row.att_variable}</TdAttribute>
            <TableDataCell>{row.att_value}</TableDataCell>
            <TableDataCell>{row.att_unit}</TableDataCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default FormulaTable;
