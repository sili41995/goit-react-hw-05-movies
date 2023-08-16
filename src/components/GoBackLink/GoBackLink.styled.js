import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const GoBack = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing * 3}px;
  border: 1px solid grey;
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing * 3}px;
  min-width: 150px;
  margin-bottom: ${({ theme }) => theme.spacing * 4}px;
  text-decoration: none;
  color: inherit;
`;
