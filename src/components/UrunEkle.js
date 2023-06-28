import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import uniqid from 'uniqid';
import {UrunConsumer} from '../Context';

var uniqid = require('uniqid'); 

class UrunEkleForm extends Component {
  state ={
    title : "",
    fiyat : "",
    urunBilesen : "",
    tur : "",
  }

  degerAtama = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  urunEkle = (dispatch,e) => {
    e.preventDefault();
    const {title,fiyat,urunBilesen,tur} = this.state;
    const yeniUrun = {
      id: uniqid(),
      title,
      fiyat,
      urunBilesen,
      tur,
    }
    dispatch({type: "URUN_EKLE", payload:yeniUrun});
  }
  render() {
    const {title, fiyat, urunBilesen,tur} = this.state;
    return <UrunConsumer>
      {
        value => {
          const {dispatch} = value;
          return (
            <Form onSubmit = {this.urunEkle.bind(this,dispatch)}>
              <Form.Group className="mb-3" controlId="formGroupUrun">
                <Form.Control type="text" placeholder="Ürün İsmi" name="title" value={title} onChange= {this.degerAtama} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupFiyat">
                <Form.Control type="text" placeholder="Fiyatı" name="fiyat" value={fiyat} onChange= {this.degerAtama} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupBilesen">
                <Form.Control type="text" placeholder="Bileşenler" name="urunBilesen" value ={urunBilesen} onChange= {this.degerAtama} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupTur">
                <Form.Control type="text" placeholder="Tur" name="tur" value={tur} onChange= {this.degerAtama}  />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>
          )
        }
      }

    </UrunConsumer>



    
  }
}

export default UrunEkleForm;
