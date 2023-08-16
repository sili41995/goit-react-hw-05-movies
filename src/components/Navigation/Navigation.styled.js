import styled from '@emotion/styled';

export const NavList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing * 10}px;
  list-style: none;
`;

export const NavListItem = styled.li`
  & a {
    text-decoration: none;
    border: 1px solid;
    color: inherit;
    border-color: transparent;
    border-radius: 10px;
    padding: ${({ theme }) => theme.spacing * 3}px;
  }
  & a.active {
    background-color: white;
  }
`;
