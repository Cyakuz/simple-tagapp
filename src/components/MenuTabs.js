import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UrunCard from '../components/UrunCard';

function MenuTabs() {
  return (
    <Tabs
    defaultActiveKey="dolap"
    id="menutabs"
    className="mb-3"
    fill
  >
    <Tab eventKey="dolap" title="Home">
      <UrunCard/>
    </Tab>
    <Tab eventKey="tezgah" title="Tezgah">
      Gelecek...
    </Tab>
    <Tab eventKey="İçecekler" title="Contact">
      Gelecek...
    </Tab>
  </Tabs>
  );
}

export default MenuTabs;