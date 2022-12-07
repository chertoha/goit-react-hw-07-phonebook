import styled from 'styled-components';

export const Title = styled.label`
  margin-bottom: ${p => p.theme.space[3]};

  font-size: ${p => p.theme.fontSizes.lg};
`;

export const Field = styled.input`
  /* width: 200px; */
  display: block;

  padding: ${p => p.theme.space[2]};
  padding-left: ${p => p.theme.space[3]};
  margin-bottom: ${p => p.theme.space[4]};
  margin-left: auto;
  margin-right: auto;

  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.borderRadius};

  width: 100%;
  max-width: 320px;
  /* @media screen and (min-width: 480px) {
    width: 480px;
  } */
`;
