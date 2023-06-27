import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MenuTabs from './components/MenuTabs';
import Dolap from './scenes/Dolap';
import Tezgah from './scenes/Tezgah';
import Icecekler from './scenes/Icecekler';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MenuTabs from './components/MenuTabs';


export default function App() {
  return (
      <main>
    <MenuTabs/>
       
      </main>

  );
}
