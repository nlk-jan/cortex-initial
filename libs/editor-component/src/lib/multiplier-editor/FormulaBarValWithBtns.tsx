import { Box, Button, Form, FormField, Text } from 'grommet';
import { SettingsOption } from 'grommet-icons';

const FormulaBarValWithBtns = () => {
  let iconWidth = {
    width: '50px',
    marginLeft: '-10px',
  };

  let label = {
    marginBottom: '2px',
    marginLeft: '-2px',
    color: '#76A9FF',
  };

  let FormFieldBorderBottom = {
    borderBottom: '1px solid #76a9ff',
  };

  let validationError = {
    paddingLeft: '11px',
    paddingTop: '2px',
    color: '#828282',
  };

  let dangerBtn = {
    border: '1px solid red',
    background: 'red',
    display: 'flex',
    marginLeft: 'auto',
  };

  let btnLeft = {
    display: 'flex',
    marginLeft: 'auto',
  };

  return (
    <>
      <Box direction="row" pad="xsmall">
        <SettingsOption color="#76A9FF" style={iconWidth} />
        <Text style={label}>Multiplier Formula</Text>
        <Box direction="row" gap="xsmall" style={btnLeft}>
          <Button style={dangerBtn} label="Validate" />
          <Button style={dangerBtn} label="Override" />
        </Box>
      </Box>
      <Form color="white">
        <FormField
          placeholder="Formula"
          margin="0"
          style={FormFieldBorderBottom}
        ></FormField>
      </Form>
      <span style={validationError}>Multiplier Transformation Formula</span>
    </>
  );
};

export default FormulaBarValWithBtns;
