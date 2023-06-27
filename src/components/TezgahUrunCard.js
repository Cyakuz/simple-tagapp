import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DolapUrunCard from '../components/DolapUrunCard';
import IcecekUrunCard from '../components/IcecekUrunCard';
import TezgahUrunCard from '../components/TezgahUrunCard';

function MenuTabs({ admin }) {
  return (
    <Tabs defaultActiveKey="dolap" id="menutabs" className="mb-3" fill>
      <Tab eventKey="dolap" title="Dolap">
        <DolapUrunCard admin={admin} />
      </Tab>
      <Tab eventKey="tezgah" title="Tezgah">
        <TezgahUrunCard admin={admin} />
      </Tab>
      <Tab eventKey="içecekler" title="İçecekler">
        <IcecekUrunCard admin={admin} />
      </Tab>
      {admin && (
        <Tab eventKey="admin" title="Admin">
          <DolapUrunCard admin={admin} />
          <IcecekUrunCard admin={admin} />
          <TezgahUrunCard admin={admin} />
        </Tab>
      )}
    </Tabs>
  );
}

export default MenuTabs;