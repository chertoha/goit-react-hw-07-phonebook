import PropTypes from 'prop-types';
import { ClipLoader, PropagateLoader } from 'react-spinners';

const TYPE = {
  BUTTON: 'button',
  DEFAULT: 'default',
};

const Spinner = ({ type }) => {
  if (type === TYPE.BUTTON)
    return <ClipLoader color="#435651" size={12} speedMultiplier={1} />;

  if (type === TYPE.DEFAULT)
    return (
      <PropagateLoader color="#435651" loading size={5} speedMultiplier={2} />
    );
};

Spinner.type = TYPE;

Spinner.propTypes = {
  type: PropTypes.oneOf([TYPE.BUTTON, TYPE.DEFAULT]),
};

export default Spinner;
