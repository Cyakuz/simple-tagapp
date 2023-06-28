import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DolapUrunCard from '../components/DolapUrunCard';
import IcecekUrunCard from '../components/IcecekUrunCard';
import TezgahUrunCard from '../components/TezgahUrunCard';
import UrunEkleForm from '../components/UrunEkle';
function AdminTabs() {
  return (
    <Tabs
    defaultActiveKey="ekle"
    id="menutabs"
    className="mb-3"
    fill
  >
    <Tab eventKey="sil" title="Sil">
      <DolapUrunCard/>
      <TezgahUrunCard/>
      <IcecekUrunCard/>
    </Tab>
    <Tab eventKey="ekle" title="Ekle">
      <UrunEkleForm/>
    </Tab>
    <Tab eventKey="dashboard" title="Dashboard">
      dashboard
    </Tab>
  </Tabs>
  );
}

export default AdminTabs;