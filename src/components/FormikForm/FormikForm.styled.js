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
  margin-bottom: ${p => p.theme.space[4]};

  border: 1px solid ${p => p.theme.colors.border};

  :last-of-type {
    margin-bottom: ${p => p.theme.space[5]};
  }
`;
