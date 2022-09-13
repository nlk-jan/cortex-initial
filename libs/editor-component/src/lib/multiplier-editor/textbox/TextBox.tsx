import { Box, Form, FormField, Text } from 'grommet';
import { SettingsOption } from 'grommet-icons';

const TextBox = () => {
  let iconWidth = {
    width: '50px',
    marginLeft: '-10px',
  };

  let label = {
    marginBottom: '2px',
    marginLeft: '-2px',
    color: '#76A9FF',
  };

  let validationError = {
    paddingLeft: '8px',
    paddingTop: '2px',
    color: '#828282',
  };

  let FormFieldBorderBottom = {
    borderBottom: '1px solid #76a9ff',
  };

  return (
    <>
      <Box direction="row" pad="xsmall">
        <SettingsOption color="#76A9FF" style={iconWidth} />
        <Text style={label}>Attribute Name</Text>
      </Box>
      <Form color="white">
        <FormField
          placeholder="Name"
          margin="0"
          style={FormFieldBorderBottom}
        ></FormField>
      </Form>
      <span style={validationError}>A reference to the Attribute</span>
    </>
  );
};

export default TextBox;
