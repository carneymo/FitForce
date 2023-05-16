import { Container } from '@mui/material';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Logo from 'app/components/Logo';
import FitNaviBar from 'app/components/FitNaviBar';
import Calculator from 'app/components/Calculator';

export function CalculatorPage() {
  return (
    <>
      <Container maxWidth={'sm'}>
        <Helmet>
          <title>Fit Force</title>
          <meta
            name="description"
            content="Calculate Fitness Standards and Track Your Progress"
          />
        </Helmet>
        <Logo />

        <Calculator />
        <FitNaviBar page="calculator" />
      </Container>
    </>
  );
}
