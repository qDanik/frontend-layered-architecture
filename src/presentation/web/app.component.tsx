import React from 'react';

import { AppContainer } from 'containers';
import { AppRoutes } from 'presentation/web/routes';

import { IoC } from './components/ioc';
import { GlobalStyles } from './styles';

export function App(): React.ReactElement {
  return (
    <IoC.Provider container={AppContainer}>
      <GlobalStyles />
      <AppRoutes />
    </IoC.Provider>
  );
}
