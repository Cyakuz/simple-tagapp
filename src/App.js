import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MenuTabs from './components/MenuTabs';
import Dolap from './scenes/Dolap';
import Tezgah from './scenes/Tezgah';
import Icecekler from './scenes/Icecekler';

export default function App() {
  return (
    <Router> {/* Wrap your routes with the Router component */}
      <main>
        <MenuTabs />
        <Routes>
          <Route path='/dolap' element={<Dolap />} /> 
          <Route path='/tezgah' element={<Tezgah />} /> 
          <Route path='/icecekler' element={<Icecekler />} /> 
        </Routes>
       
      </main>
    </Router>
  );
}
