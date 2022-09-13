import { Box, Form, FormField, Text } from 'grommet';
import { User } from 'grommet-icons';

const CommentEntryBox = () => {
  let iconWidth = {
    width: '50px',
    marginLeft: '-10px',
  };

  let label = {
    marginBottom: '2px',
    marginLeft: '-2px',
    color: '#76A9FF',
    height: '107px',
  };

  let FormFieldBorderBottom = {
    borderBottom: '1px solid #76a9ff',
    paddingBottom: '10px',
  };

  return (
    <>
      <Box direction="row" pad="xsmall">
        <User color="#76A9FF" style={iconWidth} />
        <Text style={label}>Comment</Text>
      </Box>
      <Form color="white">
        <FormField
          placeholder="-- Enter Comment Here --"
          margin="0"
          style={FormFieldBorderBottom}
        ></FormField>
      </Form>
    </>
  );
};

export default CommentEntryBox;
