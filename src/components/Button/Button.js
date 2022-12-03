import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

const Button = ({
  type = 'button',
  onClick = null,
  disabled = false,
  children,
}) => {
  return (
    <StyledButton
      className="button"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
