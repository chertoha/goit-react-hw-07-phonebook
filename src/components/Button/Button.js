import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

const Button = ({ type = 'button', children }) => {
  return (
    <StyledButton className="button" type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
