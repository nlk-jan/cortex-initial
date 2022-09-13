import { Box, Form, FormField, Text } from 'grommet';
import { SettingsOption } from 'grommet-icons';

const TextFieldWithMultVal = () => {
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

  let systemJoinLink = {
    color: '#76A9FF',
    cursor: 'pointer',
    textDecoration: 'underline',
  };

  return (
    <>
      <Box direction="row" pad="xsmall">
        <SettingsOption color="#76A9FF" style={iconWidth} />
        <Text style={label}>System Join Type</Text>
      </Box>
      <Form color="white">
        <FormField
          placeholder="Value01, Value02, Value03, Value04"
          margin="0"
          style={FormFieldBorderBottom}
        ></FormField>
      </Form>
      <span style={validationError}>
        Value Inherited From <span style={systemJoinLink}>AAAAAA, </span>
        <span style={systemJoinLink}>BBBBBB, </span>
        <span style={systemJoinLink}>CCCCCC, </span>
        <span style={systemJoinLink}>DDDDDD, </span>
        <span style={systemJoinLink}>EEEEEE, </span>
      </span>
    </>
  );
};

export default TextFieldWithMultVal;
