import { Box, Button, Form, FormField, Text } from 'grommet';
import { User } from 'grommet-icons';

const TextFieldWithBtn = () => {
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

  let dangerBtn = {
    border: '1px solid red',
    background: 'red',
    display: 'flex',
    marginLeft: 'auto',
  };

  return (
    <>
      <Box direction="row" pad="xsmall">
        <User color="#76A9FF" style={iconWidth} />
        <Text style={label}>User Value</Text>
        <Button style={dangerBtn} label="Override" />
      </Box>
      <Form color="white">
        <FormField
          placeholder="Value"
          margin="0"
          style={FormFieldBorderBottom}
        ></FormField>
      </Form>
      <span style={validationError}>Helper Message</span>
    </>
  );
};
export default TextFieldWithBtn;
