import React from 'react';
import {Routes, Route} from "react-router-dom";
import Admin from "./scenes/admin";
import Index from "./scenes/index";
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
      <main>

    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index/>} />
            <Route path='/admin' element={<Admin/>} />
          </Routes>
    </BrowserRouter>
    
      </main>

  );
}
