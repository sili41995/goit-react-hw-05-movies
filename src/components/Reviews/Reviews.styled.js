import styled from '@emotion/styled';

export const List = styled.ol`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing * 5}px;
`;
