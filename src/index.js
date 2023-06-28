import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import { UrunProvider } from "./Context";
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.scss';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <UrunProvider>
    <App />
  </UrunProvider>
);
