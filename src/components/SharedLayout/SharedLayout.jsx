import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Section } from './SharedLayout.styled';
import Navigation from 'components/Navigation';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation />
        </Container>
      </Header>
      <main>
        <Section>
          <Container>
            <Outlet />
          </Container>
        </Section>
      </main>
    </>
  );
};

export default SharedLayout;
