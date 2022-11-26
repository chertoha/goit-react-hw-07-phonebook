import Box from 'components/Box';
import { nanoid } from 'nanoid';
import { Field, Title } from './Filter.styled';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'components/redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  //  const onFilterChange = e => {
  //    setFilter(e.currentTarget.value);
  //  };

  const filterInputId = nanoid();

  return (
    <Box display="flex" flexDirection="column" pt={4} pb={4} width={300}>
      <Title htmlFor={filterInputId}>Find contacts by name</Title>
      <Field
        id={filterInputId}
        type="text"
        value={filter}
        onChange={e => {
          dispatch(setFilter(e.currentTarget.value));
        }}
      />
    </Box>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default Filter;
