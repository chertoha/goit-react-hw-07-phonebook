import Box from 'components/Box';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return <Box>{children}</Box>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
