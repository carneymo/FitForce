import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { CalculatorPage } from './pages/CalculatorPage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { ResourcesPage } from './pages/ResourcesPage';
import { FitTimerPage } from './pages/FitTimerPage';

export function App() {
  const { i18n } = useTranslation();

  return (
    <BrowserRouter>
      <Helmet defaultTitle="Fit Force" htmlAttributes={{ lang: i18n.language }}>
        <meta
          name="description"
          content="Air Force Fitness Standards application"
        />
      </Helmet>

      <Routes>
        <Route path="/" element={<CalculatorPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/timer" element={<FitTimerPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
