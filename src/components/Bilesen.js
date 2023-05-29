import React, { Component } from 'react'


class Bilesen extends Component {
  render() {
  const {ürün,uyari,fiyat} = this.props; //destructing özelliği
  return( <div>
    <ul className="d-flex d-inline justify-content-between">
   <li><h4>Bileşenler:</h4> <p className="d-flex d-inline justify-content-between" > {ürün} </p> </li>
   <li><h4>Uyarı:</h4> {uyari}</li>
   <li><h4>Fiyatı:</h4>{fiyat}</li>
   </ul>
  </div>
    )
  }
}
export default Bilesen;