import Box from 'components/Box';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <Box ml="auto" mr="auto" width={576} pl={15} pr={15}>
      {children}
    </Box>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
