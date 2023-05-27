import React, { Component } from 'react'


class Bilesen extends Component {
  render() {
  const {ürün,adet,fiyat} = this.props; //destructing özelliği
  return( <div className="h2">
    <ul>
   <li>Ürün Adı: {ürün} </li>
   <li>Adet: {adet}</li>
   <li>Fiyat: {fiyat}</li>
   </ul>
  </div>
    )
  }
}
export default Bilesen;