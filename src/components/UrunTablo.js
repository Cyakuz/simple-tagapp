import React from 'react';
import Bilesen from './Bilesen';

const UrunTablo = (props) => {
  return (

    <div>
      <h1>{props.title}</h1>
      <hr/>
      <Bilesen 
      ürün="Pasta No:0"
      adet= {10}
      fiyat={240}/>
       <Bilesen 
      ürün="Pasta No:1"
      adet= {4}
      fiyat={320}/>
      </div>
  )

}

export default UrunTablo;