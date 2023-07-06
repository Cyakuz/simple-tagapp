import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DolapUrunCard from '../components/DolapUrunCard';
import IcecekUrunCard from '../components/IcecekUrunCard';
import TezgahUrunCard from '../components/TezgahUrunCard';
import Login from '../components/Login'

function MenuTabs() {
  return (
    <Tabs
    defaultActiveKey="giriş"
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
    <Tab eventKey="giriş" title="Giriş" >
     <Login/>
    </Tab>
  </Tabs>
  );
}

export default MenuTabs;