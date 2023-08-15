import styled from '@emotion/styled';

export const Header = styled.header`
  background-color: #38b6ff;
  padding-top: ${({ theme }) => theme.paddingContainer}px;
  padding-bottom: ${({ theme }) => theme.paddingContainer}px;
`;

export const Container = styled.div`
  width: 1200px;
  padding-left: ${({ theme }) => theme.paddingContainer}px;
  padding-right: ${({ theme }) => theme.paddingContainer}px;
  margin-left: auto;
  margin-right: auto;
`;

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.paddingContainer}px;
  padding-bottom: ${({ theme }) => theme.paddingContainer}px;
`;
