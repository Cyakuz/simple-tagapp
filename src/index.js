import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {UrunProvider} from "./Context";
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
<UrunProvider> 
  
   <App />
    
    </UrunProvider>
    , document.getElementById('root'));
