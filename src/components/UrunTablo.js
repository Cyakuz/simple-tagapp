import React from 'react';
import Bilesen from './Bilesen';

const UrunTablo = (props) => {

  return (
    <div>
      <h2>{props.title}</h2>
      <hr />
      <Bilesen
        urunBilesen={props.urunBilesen}
        uyari="Alerjen Madde İçerebilir."
        fiyat={props.fiyat}
        imgsrc={props.imgsrc}
      />
    </div>
  );
}

export default UrunTablo;