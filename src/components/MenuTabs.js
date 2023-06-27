import React from 'react';

function MenuTabs() {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/dolap" style={{ color: 'red' }}>
          Dolap
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/tezgah" style={{ color: 'red' }}>
          Tezgah
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/icecekler" style={{ color: 'red' }}>
          İçecekler
        </a>
      </li>
    
    </ul>
  );
}

export default MenuTabs;
