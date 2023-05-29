import React from 'react';


const UrunCard = (props) => {
  return (

    <div>
      <h1>{props.title}</h1>
      <hr/>
      <Bilesen 
      ürün="Pasta No:0"
      adet= {10}
      fiyat={240}/>
    
      </div>
  )

}

export default UrunTablo;