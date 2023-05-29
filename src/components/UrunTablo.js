import React from 'react';
import Bilesen from './Bilesen';

const UrunTablo = (props) => {
  return (

    <div>
      <h1>{props.title}</h1>
      <hr/>
      <Bilesen 
      ürün="Buğday, Un, sut, Yumurta, Ekmek, Çilek, Portakal"
      uyari= "Alerjen Madde İçerebilir."
      fiyat= {props.fiyat}/>
      </div>
  )

}

export default UrunTablo;