import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UrunCard from './components/UrunCard';
import MenuTabs from './components/MenuTabs';
import Dolap from './components/Dolap'; // Import the Dolap component

export default function App() {
  return (
    <Router> {/* Wrap your routes with the Router component */}
      <main>
        <MenuTabs />
        <Routes>
          <Route path='/dolap' element={<Dolap />} /> {/* Use the Dolap component as the element */}
        </Routes>
        <UrunCard />
      </main>
    </Router>
  );
}
