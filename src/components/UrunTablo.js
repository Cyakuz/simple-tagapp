import React from 'react';
import Bilesen from './Bilesen';

const UrunTablo = (props) => {
  return (

    <div>
      <h1>{props.title}</h1>
      <hr/>
      <Bilesen 
      ürün="Pasta No:0"
      uyari= {10}
      fiyat={240}/>
      </div>
  )

}

export default UrunTablo;