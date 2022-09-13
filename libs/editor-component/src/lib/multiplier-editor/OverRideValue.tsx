import { Box, Button, Form, FormField, Select, Text } from 'grommet';
import { SettingsOption } from 'grommet-icons';

const OverRideValue = () => {
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

  const options = [
    { label: 'option 1', value: 1 },
    { label: 'option 2', value: 2 },
    { label: 'option 3', value: 3 },
  ];

  return (
    <>
      <Box direction="row" pad="xsmall">
        <SettingsOption color="#76A9FF" style={iconWidth} />
        <Text style={label}>User Value</Text>
        <Button style={dangerBtn} label="Override" />
      </Box>
      <Form color="white">
        <FormField placeholder="Value" margin="0" style={FormFieldBorderBottom}>
          <Select
            name="select"
            placeholder="Value"
            options={options}
            valueKey="value"
          />
        </FormField>
      </Form>
      <span style={validationError}>User Value Overrides System Value</span>
    </>
  );
};

export default OverRideValue;
