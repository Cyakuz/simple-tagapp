import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DolapUrunCard from '../components/DolapUrunCard';
import IcecekUrunCard from '../components/IcecekUrunCard';
import TezgahUrunCard from '../components/TezgahUrunCard';

function MenuTabs() {
  return (
    <Tabs
    defaultActiveKey="dolap"
    id="menutabs"
    className="mb-3"
    fill
  >
    <Tab eventKey="dolap" title="Dolap">
      <DolapUrunCard/>
    </Tab>
    <Tab eventKey="tezgah" title="Tezgah">
      <TezgahUrunCard/>
    </Tab>
    <Tab eventKey="içecekler" title="İçecekler">
      <IcecekUrunCard/>
    </Tab>
  </Tabs>
  );
}

export default MenuTabs;