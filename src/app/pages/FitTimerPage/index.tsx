import { Container } from '@mui/material';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Logo from 'app/components/Logo';
import FitNaviBar from 'app/components/FitNaviBar';

export function FitTimerPage() {
  return (
    <>
      <Container maxWidth="sm">
        <Helmet>
          <title>Fit Force</title>
          <meta
            name="description"
            content="Calculate Fitness Standards and Track Your Progress"
          />
        </Helmet>
        <Logo />
        <div>
          <h1>Fit Timer</h1>
          <p>
            This is the Fit Timer page of the boilerplate application. Use this
            page along with the <code>src/app/components</code> directory to
            build your application.
          </p>
        </div>
        <FitNaviBar page="timer" />
      </Container>
    </>
  );
}
