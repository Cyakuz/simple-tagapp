import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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

  render() {
    const {title, fiyat, urunBilesen,tur} = this.state
    return (
      <Form>
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
    );
  }
}

export default UrunEkleForm;
