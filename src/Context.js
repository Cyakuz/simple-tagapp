import React, { Component } from 'react';

const UrunContext = React.createContext();

export class UrunProvider extends Component {
  state = {
    urunler: [
      {
        id: "1",
        title: "Pasta No: 0",
        fiyat: "240",
        urunBilesen: "Fıstık, Kaju",
        tur: "dolap"
      },
      {
        id: "2",
        title: "Pasta No: 1",
        fiyat: "240",
        urunBilesen: "Süt Ürünleri",
        tur: "dolap"
      },
      {
        id: "3",
        title: "Ayran",
        fiyat: "6",
        urunBilesen: "Süt Ürünleri",
        tur: "icecek",
      },
      {
        id: "4",
        title: "Sakız",
        fiyat: "8",
        urunBilesen: "Nane",
        tur: "tezgah",
      },
    ]
  }

  render() {
    return (
      <UrunContext.Provider value={this.state}>
        {this.props.children}
      </UrunContext.Provider>
    )
  }
}

const UrunConsumer = UrunContext.Consumer;

export { UrunConsumer, UrunProvider };
