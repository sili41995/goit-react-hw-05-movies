import styled from '@emotion/styled';

export const NavList = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
`;

export const NavListItem = styled.li`
  & a {
    text-decoration: none;
    border: 1px solid;
    color: inherit;
    border-color: transparent;
    border-radius: 10px;
    padding: 10px;
  }
  & a.active {
    background-color: white;
  }
`;
