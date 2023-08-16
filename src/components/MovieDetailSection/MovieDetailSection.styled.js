import styled from '@emotion/styled';

export const Image = styled.img`
  width: 300px;
`;

export const Movie = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing * 8}px;
`;

export const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing * 4}px;
`;

export const Text = styled.p``;

export const Subtitle = styled.h3`
  margin-top: ${({ theme }) => theme.spacing * 4}px;
  margin-bottom: ${({ theme }) => theme.spacing * 4}px;
`;

export const Info = styled.div`
  margin-top: ${({ theme }) => theme.spacing * 4}px;
`;

export const List = styled.ul`
  margin-bottom: ${({ theme }) => theme.spacing * 4}px;
`;

export const ListItem = styled.li`
  margin-top: ${({ theme }) => theme.spacing * 4}px;
`;
