import Box from 'components/Box';
import { nanoid } from 'nanoid';
import { Field, Title } from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  const filterInputId = nanoid();
  return (
    <Box display="flex" flexDirection="column" pt={4} pb={4} width={300}>
      <Title htmlFor={filterInputId}>Find contacts by name</Title>
      <Field id={filterInputId} type="text" value={value} onChange={onChange} />
    </Box>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
