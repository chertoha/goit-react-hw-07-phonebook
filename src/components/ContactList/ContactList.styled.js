import styled from 'styled-components';

export const List = styled.ul`
  /* list-style: disc; */
  padding-left: ${p => p.theme.space[4]};
`;

export const ListItem = styled.li`
  margin-bottom: ${p => p.theme.space[4]};
  :last-child {
    margin-bottom: 0;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  line-height: 1;
`;

export const Name = styled.span`
  display: block;
  font-size: ${p => p.theme.fontSizes.lg};
  margin-right: ${p => p.theme.space[4]};

  /* width: 170px; */
`;

export const Number = styled.span`
  display: block;
  font-size: ${p => p.theme.fontSizes.lg};
  margin-right: ${p => p.theme.space[4]};

  /* width: 120px; */
`;

export const ContactFormWrapper = styled.form`
  display: flex;
  align-items: center;
  line-height: 1;
`;
