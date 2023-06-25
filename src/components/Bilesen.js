import React, { Component } from 'react'


class Bilesen extends Component {
  state = {
    isVisible: false
  }
  
  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
  const {ürün,uyari,fiyat} = this.props; //destructing özelliği
  const {isVisible} = this.state;
  
  return( 
   
  <div>
   {
      isVisible ?   <div><ul className="d-flex col-12" style={{listStyle:'none'}}>
      <li><h4>Bileşenler:</h4> <p className="d-flex flex-column" > {ürün} </p> </li>
      <li><h4>Uyarı:</h4> {uyari}</li>
      <li><h4>Fiyatı:</h4>{fiyat}</li> 
      </ul>
      <i class="fa-solid fa-angle-down" onClick={this.toggleVisibility} ></i>
      </div>
       : <i class="fa-solid fa-angle-down" onClick={this.toggleVisibility} ></i>
    }
  </div>
    )
  }
}
export default Bilesen;