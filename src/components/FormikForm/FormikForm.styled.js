import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  margin-top: ${p => p.theme.space[4]};
  margin-bottom: ${p => p.theme.space[5]};
  padding: ${p => p.theme.space[4]};

  width: 300px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.borderRadius};
`;

export const Label = styled.label`
  font-size: ${p => p.theme.fontSizes.lg};
  margin-bottom: ${p => p.theme.space[3]};
`;

export const Input = styled(Field)`
  width: 200px;
  padding: ${p => p.theme.space[2]};

  border: 1px solid ${p => p.theme.colors.border};
`;

export const ErrorWrapper = styled('div')`
  position: relative;

  margin-bottom: ${p => p.theme.space[5]};

  :last-of-type {
    margin-bottom: ${p => p.theme.space[5]};
  }
`;

export const Message = styled('div')`
  padding: ${p => p.theme.space[2]};
  width: 250px;

  position: absolute;
  bottom: -2px;
  left: -5px;
  transform: translateY(100%);

  background-color: ${p => p.theme.colors.error};
  border: 1px solid ${p => p.theme.colors.failure};
  border-radius: 5px;

  font-size: 12px;
  font-weight: 500;
  color: ${p => p.theme.colors.failure};

  z-index: 2;
`;
