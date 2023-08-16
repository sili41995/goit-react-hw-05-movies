import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation';
import { Container, Header, Section } from './SharedLayout.styled';
import Loader from 'components/Loader';

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
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default SharedLayout;
