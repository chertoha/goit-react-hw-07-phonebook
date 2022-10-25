import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

const Button = ({ type = 'button', onClick = null, children }) => {
  return (
    <StyledButton className="button" type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
