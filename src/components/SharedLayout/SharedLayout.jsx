import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation';
import { Container, Header, Section } from './SharedLayout.styled';

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
