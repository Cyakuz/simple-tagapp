import React, { Component } from 'react'


class Bilesen extends Component {
  render() {
  const {ürün,uyari,fiyat} = this.props; //destructing özelliği
  return( <div>
    <ul>
   <li><h4>Bileşenler:</h4> {ürün} </li>
   <li><h4>Uyarı:</h4> {uyari}</li>
   <li><h4>Fiyatı:</h4>{fiyat}</li>
   </ul>
  </div>
    )
  }
}
export default Bilesen;