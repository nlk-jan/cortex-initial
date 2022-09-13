import { Box } from 'atomic-layout';
import { Form, FormField, Text, TextInput } from 'grommet';
import { User } from 'grommet-icons';

const FormulaBar = () => {
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

  return (
    <>
      <Box direction="row" pad="xsmall">
        <User color="#76A9FF" style={iconWidth} />
        <Text style={label}>Multiplier Formula</Text>
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

export default FormulaBar;
