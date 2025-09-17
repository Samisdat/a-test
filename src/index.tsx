import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { GlobalStyle } from '@vodafone_de/brix-components';
import Demo from './Demo';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <Demo />
    <GlobalStyle />
  </React.StrictMode>
);
