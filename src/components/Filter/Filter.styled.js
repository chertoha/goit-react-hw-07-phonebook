import styled from 'styled-components';

export const Title = styled.label`
  margin-bottom: ${p => p.theme.space[3]};

  font-size: ${p => p.theme.fontSizes.lg};
`;

export const Field = styled.input`
  /* width: 200px; */
  padding: ${p => p.theme.space[2]};
  padding-left: ${p => p.theme.space[3]};
  margin-bottom: ${p => p.theme.space[4]};

  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.borderRadius};
`;
