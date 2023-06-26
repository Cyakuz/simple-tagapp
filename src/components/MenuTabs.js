import React from 'react';

function MenuTabs() {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#" style={{ color: 'red' }}>
          Active
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" style={{ color: 'red' }}>
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" style={{ color: 'red' }}>
          Link
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link disabled"
          href="#"
          tabIndex="-1"
          aria-disabled="true"
          style={{ color: 'red' }}
        >
          Disabled
        </a>
      </li>
    </ul>
  );
}

export default MenuTabs;
