import { Box, FormField, Select, Text } from 'grommet';
import { User, SettingsOption } from 'grommet-icons';
import React, { useState } from 'react';

const MeasurementUnit = () => {
  const [value, setValue] = useState('medium');

  let iconWidth = {
    width: '40px',
    marginLeft: '-10px',
  };

  let label = {
    marginBottom: '2px',
    marginLeft: '-2px',
    color: '#76A9FF',
  };

  const options = [
    { label: 'Select 1', value: 1 },
    { label: 'Select 2', value: 2 },
    { label: 'Select 3', value: 3 },
  ];

  let validationError = {
    paddingLeft: '8px',
    paddingTop: '2px',
    color: '#828282',
  };

  return (
    <>
      <Box direction="row" pad="xsmall">
        <Box direction="column" pad="xsmall" width="49%">
          <Box direction="row" pad="xsmall">
            <SettingsOption color="#76A9FF" style={iconWidth} />
            <Text style={label}>Unit</Text>
          </Box>
          <FormField name="select" margin="0px">
            <Select
              name="select"
              placeholder="Value"
              options={options}
              valueKey="value"
            />
          </FormField>
          <span style={validationError}>Helper Message</span>
        </Box>
        <Box direction="column" pad="xsmall" width="49%">
          <Box direction="row" pad="xsmall">
            <User color="#76A9FF" style={iconWidth} />
            <Text style={label}>Multiplier Formula Result Unit</Text>
          </Box>
          <FormField name="select" margin="0px">
            <Select
              name="select"
              placeholder="Formula Unit"
              options={options}
              valueKey="value"
            />
          </FormField>
          <span style={validationError}>Select A Unit From List</span>
        </Box>
      </Box>
    </>
  );
};

export default MeasurementUnit;
